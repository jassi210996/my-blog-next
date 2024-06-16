import Image from "next/image";
import Link from "next/link";
import { IBlog } from "../../interface";

export default function BlogItem({ post }: { post: IBlog }) {
  return (
    <>
      <article
        key={post.id}
        className="flex min-w-full flex-col items-start justify-between shadow p-4"
      >
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.createdAt} className="text-gray-500">
            {post.createdAt}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a>{post.title}</a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p>
          <Link href={`/blog/${post.title}`} className="text-black">
            View More
          </Link>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <Image
            src={post.imageUrl}
            alt={post.firstName}
            height={500} // Desired size in pixels
            width={500}
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a>
                <span className="absolute inset-0" />
                {post.firstName} {post.lastName}
              </a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
