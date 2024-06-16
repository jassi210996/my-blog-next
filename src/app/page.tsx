import { Suspense } from "react";
import BlogList from "./shared/components/blog-list/blog-list";
import Hero from "./shared/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <BlogList />
      </Suspense>
    </main>
  );
}
