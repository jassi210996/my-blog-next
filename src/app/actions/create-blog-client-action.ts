import { z } from "zod";
import { createBlogServerAction } from ".";
import { IBlog, IBlogError } from "../shared";

const BlogSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be of 3 or more characters" })
    .max(180, { message: "Title must not be of more than 180 characters" }),
  description: z
    .string()
    .min(120, { message: "Description must be of 120 or more characters" }),
  imageUrl: z.string().url({ message: "Invalid URL" }).includes("images.unsplash.com", { message: "Only images from images.unsplash.com are allowed" }),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
});

export const formSubmitAction = async (
  data: IBlogError,
  formData: FormData
): Promise<IBlogError> => {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const imageUrl = formData.get("image-url") as string;
    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const newBlog: IBlog = {
      title,
      description,
      imageUrl,
      firstName,
      lastName,
    };
    const result = BlogSchema.safeParse(newBlog);
    if (!result.success) {
      console.log(result.error.flatten().fieldErrors);
      return { error: result.error.flatten().fieldErrors, success: false };
    }
    await createBlogServerAction(newBlog);

    return { success: true };
  } catch (e: any) {
    return { error: e, success: false };
  }
};
