"use client";
import { useEffect, useState } from "react";
import { IBlog, IListResponse } from "../../interface";
import BlogItem from "./blog-item";

export default function BlogList() {
  const [list, setPosts] = useState({} as IListResponse<IBlog>);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/blogs?${new URLSearchParams({
        page: page.toString(),
      })}`
    )
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        throw new Error(err);
      });
  }, [page]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-black">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="bg-white py-16 sm:py-16 min-w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Trending...</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {list?.data?.map((post: IBlog) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl mt-16 flex justify-center">
        <button
          className={`px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg mr-2 ${
            page === 1
              ? "disabled:opacity-50"
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button
          disabled={list?.total && list?.total / 5 > page ? false : true}
          className={`px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg ${
            list?.total && list?.total / 5 > page
              ? "hover:bg-black hover:text-white"
              : "disabled:opacity-50"
          }`}
          onClick={() => {
            if (list.total && page < list?.total / 5) {
              setPage(page + 1);
            }
          }}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
