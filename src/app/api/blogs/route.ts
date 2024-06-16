export const dynamic = "force-dynamic";
import { FILE_DIRECTORY_PATH, IBlog, IListResponse } from "@/app/shared";
import parseFileData from "@/app/shared/utils/parse-file-data";
import { readdir, readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request: NextRequest): Promise<IListResponse<IBlog>> {
  try {
    const page = request.nextUrl.searchParams.get("page") || 1;
    const allFiles = await readdir(FILE_DIRECTORY_PATH);
    const files = [...allFiles].splice((+page - 1) * 5, 5);
    const promises: Promise<Buffer>[] = [];

    files.map((file) => {
      promises.push(readFile(path.join(FILE_DIRECTORY_PATH, file)));
    });
    const filesData = await Promise.all(promises);
    const data = filesData.map((file) => {
      const values = parseFileData(file.toString());
      return values;
    });
    return NextResponse.json({
      data,
      total: allFiles.length,
      page,
      limit: 5,
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      error: { message: "Error reading files", error: err, status: 500 },
    });
  }
}
