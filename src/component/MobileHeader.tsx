"use client"
import Link from 'next/link';
import { useState } from 'react';
import { CATEGORY_LABELS } from '@/utils/siteConfig';
import MobileSidebar from './MobileSidebar';

const categories = Object.keys(CATEGORY_LABELS).map(slug => ({ link: "/" + slug }));

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-black text-white relative z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" title="home">
            <span className="site-logo font-serif font-bold text-[22px] uppercase">
              PR<span className="font-normal">PROMOTIONHUB</span>
            </span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label="Blog menu" aria-expanded={open}
          >
            {!open ? (
              <div className="flex flex-col items-end gap-1">
                <span className="h-[2px] w-6 bg-white" />
                <span className="h-[2px] w-4 bg-white" />
                <span className="h-[2px] w-3 bg-white" />
              </div>
            ) : (
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white -rotate-45" />
              </div>
            )}
          </button>
        </div>

        <div className="flex gap-6 px-4 py-2 text-[15px] font-bold overflow-x-auto whitespace-nowrap border-t border-white/10">
          {categories.map((item) => (
            <Link key={item.link} href={item.link}>
              {CATEGORY_LABELS[item.link.slice(1)]}
            </Link>
          ))}
        </div>
      </header>

         {open && <MobileSidebar onClose={() => setOpen(false)} />}
    </>
  );
}
