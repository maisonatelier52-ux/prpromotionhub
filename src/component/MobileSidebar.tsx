import Link from 'next/link';
import CategorySectionHeader from './CategorySectionHeader';
import NewsCard from './NewsCard';
import { FaFacebookF, FaInstagram, FaMediumM, FaReddit, FaTwitter } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';

import prnewsData from '../../public/data/prnews.json';
import financeData from '../../public/data/finance.json';
import usData from '../../public/data/us.json';
import worldData from '../../public/data/world.json';
import entertainmentData from '../../public/data/entertainment.json';
import technologyData from '../../public/data/technology.json';

const latestNews = [
  prnewsData?.[0],
  financeData?.[0],
  worldData?.[0],
  usData?.[0],
  technologyData?.[0],
  entertainmentData?.[0],
].filter(Boolean);

interface Props {
  onClose: () => void;
}

export default function MobileSidebar({ onClose }: Props) {
  return (
    <aside
      className="
        fixed
        top-[104px]
        left-0
        w-full
        h-[calc(100vh-104px)]
        bg-white
        text-black
        z-50
        overflow-y-auto
        overscroll-contain
      "
    >
      <div className="px-6 py-6 space-y-8">
        {/* Home */}
        <section className="font-bold">
          <h3 className="text-sm mb-3 uppercase">Home</h3>
          <ul className="space-y-3 text-[16px] ml-5">
            {[
              ['/', 'Blog'],
              ['/prnews', 'Public Relations'],
              ['/world', 'World'],
              ['/us', 'U.S'],
              ['/finance', 'Finance'],
              ['/technology', 'Technology'],
              ['/entertainment', 'Entertainment'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={onClose}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section className="font-bold">
          <h3 className="text-sm mb-3 uppercase">About</h3>
          <ul className="space-y-3 text-[16px] ml-5">
            {[
              ['/about', 'About Us'],
              ['/contact', 'Contact'],
              ['/editorial', 'Blog standards'],
              ['/privacy-policy', 'Privacy Policy'],
              ['/terms-and-conditions', 'Terms and Conditions'],
              ['/faq', 'FAQ'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={onClose}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>



        {/* Latest News */}
        <section>
          <CategorySectionHeader title="From the blog" />
          <NewsCard data={latestNews} onClose={onClose} />
        </section>

        {/* Socials */}
        <section>
          <CategorySectionHeader title="Socials" />
          <div className="flex items-center gap-4 mt-5">
            <Link href="https://x.com/promotionh77500" title="twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:opacity-70" />
            </Link>
            <Link href="https://medium.com/@prpromotionhub" title="medium" target="_blank" rel="noopener noreferrer">
              <FaMediumM className="text-xl hover:opacity-70" />
            </Link>
            <Link href="https://substack.com/@prpromotionhub" title="substack" target="_blank" rel="noopener noreferrer">
              <SiSubstack className="text-xl hover:opacity-70" />
            </Link>
            <Link href="https://www.reddit.com/user/PRPromotionHub3009/" title="reddit" target="_blank" rel="noopener noreferrer">
              <FaReddit className="text-xl hover:opacity-70" />
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
