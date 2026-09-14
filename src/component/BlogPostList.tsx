"use client";
import { useState } from "react";
import BlogPostCard, { type PostPreview } from "./BlogPostCard";
export default function BlogPostList({ posts }: { posts: PostPreview[] }) {
  const [visible, setVisible] = useState(9);
  return <div>
    <div className="grid gap-x-9 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.slice(0, visible).map(post => <BlogPostCard key={post.category + "/" + post.slug} post={post} />)}
    </div>
    {visible < posts.length && <div className="py-8 text-center">
      <button className="border border-[#102b4a] px-8 py-3 font-semibold text-[#102b4a] hover:bg-[#102b4a] hover:text-white transition-colors cursor-pointer" onClick={() => setVisible(count => count + 9)}>More posts</button>
    </div>}
    <p role="status" className="text-sm text-center text-slate-500 py-5">Showing {Math.min(visible, posts.length)} of {posts.length} posts</p>
  </div>;
}

