"use server";
import { writeFile } from "fs/promises";
import path from "path";
import { IBlog, IServerResponse } from "../shared";

/**
 * server action for creating blog
 * @param createBlogRequest  create blog request
 */
export const createBlogServerAction = async (
  createBlogRequest: IBlog
): Promise<IServerResponse<IBlog | unknown>> => {
  try {
    console.log("Blog Action", createBlogRequest);
    const { title } = createBlogRequest;
    const id = Date.now();
    const filePath = path.join(
      `${process.cwd()}/blogs`,
      `${title.trim().replace(/ /g, '_')}.md`
    );
    const content = createBlogContent({
      id,
      createdAt: new Date().toDateString(),
      ...createBlogRequest,
    });

    await writeFile(filePath, content, "utf8");
    return { message: "Blog created successfully", status: 200 };
  } catch (e: any) {
    return { error: e, message: "Error", status: e.status || 500 };
  }
};

/**
 * generate blog content in markdown format
 * @param data blog data in IBlog format
 * @returns content in markdown format
 */
function createBlogContent(data: IBlog): string {
  let content = "";
  for (const key in data) {
    content += `# ${key}: ${data[key as keyof IBlog]}\n`;
  }
  return content;
}
