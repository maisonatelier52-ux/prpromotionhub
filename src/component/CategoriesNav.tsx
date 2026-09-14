"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_LABELS } from "@/utils/siteConfig";
const links = [{ href: "/", label: "Blog" }, ...Object.entries(CATEGORY_LABELS).map(([slug, label]) => ({ href: "/" + slug, label }))];
export default function CategoriesNav() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  return <nav aria-label="Blog topics" className="flex flex-wrap justify-center gap-x-6 gap-y-3 py-5 text-base">
    {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`font-semibold underline-offset-8 ${pathname === link.href ? "underline text-[#102b4a]" : "text-slate-600 hover:text-[#102b4a] hover:underline"}`}>{link.label}</Link>)}
  </nav>;
}
