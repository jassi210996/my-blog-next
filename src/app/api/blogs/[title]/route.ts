import { FILE_DIRECTORY_PATH, IBlog } from "@/app/shared";
import parseFileData from "@/app/shared/utils/parse-file-data";
import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { title: string } }
): Promise<any> {
  try {
    const filePath = path.join(
      FILE_DIRECTORY_PATH,
      `${params.title.replace(/ /g, "_")}.md`
    );
    const fileContent = await readFile(filePath, "utf-8");
    const values = parseFileData(fileContent.toString());
    return NextResponse.json({ blog: values, status: 200 });
  } catch (err) {
    return NextResponse.json({
      error: { message: "Error reading file", error: err, status: 500 },
    });
  }
}
