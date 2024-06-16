"use client";
import { IBlog } from "@/app/shared";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * blog detail page
 * @param param
 * @returns
 */
export default function BlogDetail({ params }: { params: { title: string } }) {
  const [post, setPost] = useState({} as { blog: IBlog; success: number });
  const [loading, setLoading] = useState(true);

  // calling blog detail api
  useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${params.title}`)
      .then((res) => res.json())
      .then((res) => {
        setPost(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw new Error(err);
      });
  }, [params.title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-black">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="pt-6">
      <div className="mx-auto mt-6 max-w-4xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-4">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              src={post?.blog?.imageUrl}
              alt="img"
              width={500}
              height={300}
              className="h-96 w-full object-cover object-center"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {post?.blog?.title}
          </h1>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only"></h2>
          <p className="text-lg tracking-tight text-gray-900">
            Creator Information
          </p>
          <p className="text-base text-gray-900">
            {post?.blog?.firstName} {post?.blog?.lastName}
          </p>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                {post?.blog?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
