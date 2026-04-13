import prnewsData from '../../public/data/prnews.json';
import WhatsHotBar from './WhatsHotBar';
import JulioArticles from './JulioArticles';
import { julioHerreraArticle } from '@/data/julioHerreraArticle';
import RelatedNewsSection from './RelatedNewsSection';
import Script from 'next/script';
import UpgradePromoCard from './UpgradePromoCard';
import ArticleCard from './ArticleCard';
import CommentForm from './CommentForm';
import ShareComponent from './ShareComponent';
import SocialShareList from './SocialShareList';
import ArticleImage from './ArticleImage';
import SocialShare from './SocialShare';
import JulioArticleHeader from './JulioArticleHeader';
import Link from 'next/link';

interface Author {
    name: string;
    role: string;
    bio: string;
    image: string;
    email: string;
    twitter: string;
    facebook: string;
    instagram: string;
    substack?: string;
    medium?: string;
}
interface SubParagraph {
    subtitle: string;
    description: string;
}
interface SubParagraph2 {
    subtitle: string;
    description: string;
}
interface SubPoints {
    subline: string;
    points: string[];
}
interface NewsItem {
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    image: string;
    slug: string;
    date: string;
    author: Author;
    subpara?: SubParagraph[];
    subpoints?: SubPoints;
    subpara2?: SubParagraph[];
}

interface Props {
    article: NewsItem;
}

export default function JulioPage() {


    return (
        <main>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "NewsArticle",
                                "@id": "https://www.prpromotionhub.com/finance/reputation-global-finance-leadership-trust/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/reputation-global-finance-leadership-trust/"
                                },
                                "headline": "Why Reputation Is the Real Power in Global Finance Today",
                                "description": "Find out how reputation and perception are changing leadership, trust, and decision-making in global finance, making them more important for success.",
                                  "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.prpromotionhub.com/images/julio-herrera-velutini.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "datePublished": "2026-01-06T08:00:00+00:00",
                                "dateModified": "2026-01-06T08:00:00+00:00",
                                "author": {
                                    "@type": "Person",
                                    "name": "Staff Reporter",
                                    "jobTitle": "Business & Economy Desk"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "PRPromotionHub",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.prpromotionhub.com/images/pr-logo.webp",
                                        "width": 600,
                                        "height": 60
                                    }
                                },
                                "about": {
                                    "@type": "Person",
                                    "name": "Julio Herrera Velutini",
                                    "description": "Julio Herrera Velutini is a seventh-generation international banker involved in global wealth management, private banking, and cross-border financial services.",
                                    "sameAs": [
                                        "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                    ]
                                },
                                "articleSection": "Finance",
                                "keywords": [
                                    "Julio Herrera Velutini",
                                    "International Banking",
                                    "Wealth Management",
                                    "Global Finance",
                                    "Private Banking",
                                    "Financial Leadership",
                                    "global finance",
                                    "reputation management",
                                    "financial leadership",
                                    "trust in business",
                                    "Julio Herrera Velutini",
                                    "private banking",
                                    "perception economy",
                                    "wealth management",
                                    "corporate reputation",
                                    "finance trends"
                                ],
                                "articleBody": "Finance isn’t just about money anymore. Yes, capital still matters. Strategy still matters. But more and more, what really shapes success is something less tangible—how people see you. Reputation has become a kind of currency of its own."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/reputation-global-finance-leadership-trust/#breadcrumb",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://www.prpromotionhub.com/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Finance",
                                        "item": "https://www.prpromotionhub.com/finance/"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Why Reputation Is the Real Power in Global Finance Today",
                                        "item": "https://www.prpromotionhub.com/finance/reputation-global-finance-leadership-trust/"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is Julio Herrera Velutini known for in the financial sector?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "He is recognized for his leadership in international banking, global wealth management, and operating institutions that navigate a complex regulatory landscape."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does he participate in philanthropic or social initiatives?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, alongside his banking career, he has supported initiatives related to education, entrepreneurship, and community development."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is his approach to international finance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "His strategy emphasizes long-term value creation, disciplined risk management, and conservative capital preservation across global markets."
                                }
                            }
                        ]
                    })
                }}
            />

            <WhatsHotBar data={prnewsData[0]} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                <div>
                    <JulioArticleHeader article={julioHerreraArticle} />

                    <SocialShare title={julioHerreraArticle.title} />
                    <div className="flex flex-col lg:flex-row mt-2 md:gap-8 lg:gap-8">
                        <div className="w-full lg:w-300 mb-6 md:mb-0">

                            <ArticleImage src={julioHerreraArticle.image} alt={julioHerreraArticle.title} />
                            <div className="flex flex-col md:flex-row mt-8 gap-12">

                                {/* SocialShareList */}
                                <div className="hidden md:block sticky top-8 self-start">
                                    <SocialShareList title={julioHerreraArticle.title} />
                                </div>
                                {/* Article Content */}
                                <article className="w-full max-w-4xl mx-auto px-4 md:px-0">
                                    <div className="">
                                        <p className='text-[16px] leading-[1.7] text-black mb-6'>
                                             Finance isn’t just about money anymore. 
                                       </p>
                                       <p className='text-[16px] leading-[1.7] text-black mb-6'>
                                            Yes, capital still matters. Strategy still matters. But more and more, what really shapes success is something less tangible—how people see you.
                                       </p>
                                    </div>
                                    <div className='space-y-2'>
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Reputation has become a kind of currency of its own.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In a world where information moves instantly and businesses operate across borders, perception can open doors—or quietly close them. For global financial leaders, managing that perception is no longer optional. It’s part of the role.
                                            </p>
                                        </section>
                                    </div>
                                    <div className='space-y-2'>
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Julio Herrera Velutini’s career is a good example of how this shift is playing out. His experience shows how modern finance isn’t just about running institutions—it’s also about understanding how those institutions, and the people behind them, are viewed from the outside.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Reputation Isn’t Something You Leave to Chance
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                There was a time when success in private banking meant staying under the radar. The less visibility, the better. Trust was once a slow burn, built over time, but now it seems to be in high demand. The world has shifted. Reputation, once a given, now requires constant attention. Global media, digital platforms, and a tangle of new regulations have fundamentally altered the landscape. People are scrutinizing, analyzing, and responding in ways that would have seemed unlikely. This level of attention is significant.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Your reputation shapes the deals you make, the chances you get, and the confidence others have in your choices. It's a big deal, arguably as significant as the numbers on a balance sheet.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That’s why modern financial leaders have to think differently. They’re not just managing assets—they’re managing how their story is told.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Finance and Communication Are Now Connected
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The most significant shift in recent times is the increasing connection between finance and communication. 
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It's not only the choices themselves that matter; it's also how we interpret them.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Media coverage, public presence, and even silence all play a role in shaping perception. And once that perception is out there, it can travel fast.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In that sense, influence doesn’t just come from what happens behind closed doors. It also comes from how those actions are interpreted by the outside world.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                For someone like Herrera Velutini, whose work spans multiple markets, that balance becomes even more important.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It’s not about being everywhere or saying everything—it’s about being intentional. Showing up when it matters, and staying measured when it doesn’t.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    The Challenge of a Global Stage
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Operating across countries sounds like an advantage—and it is—but it also comes with complexity. 
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Different regions have different rules. Different expectations. Different ways of reading the same situation.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                And in today’s connected world, everything is visible almost instantly.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That’s why communication has become part of strategy, not an afterthought.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It’s no longer enough to do the right thing internally. Leaders also have to think about how their actions will be seen externally—sometimes by very different audiences at the same time. 
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That balancing act is now just part of modern finance.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    People Trust People, Not Just Institutions
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Another big shift is how much individuals matter.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It used to be that institutions stood on their own. Now, people look closely at who’s behind them. Leadership has become a signal—a way for others to judge credibility, stability, and direction.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In simple terms, trust has become more personal. 
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Clients, partners, and regulators don’t just evaluate companies—they evaluate the people leading them. And that means personal reputation and institutional reputation are closely tied together.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                When those two align, it builds confidence. When they don’t, it raises questions. That’s just the reality of how business works today.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Success Now Means Managing More Than Money
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The role of a financial leader has, without a doubt, evolved.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It’s no longer just about making smart financial decisions.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It's a juggling act, really:
                                            </p>
                                            <ul className="space-y-2 pl-5 mb-3">
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Forge solid connections.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Steer through a maze of rules.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Preserve your reputation.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">And, ultimately, control your image.</span>
                                                </li>
                                            </ul>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                All simultaneously.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That’s not easy—but it’s what defines success in today’s environment.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Because in the end, performance alone isn’t enough. It has to be understood, trusted, and believed in.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Final Thought
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                What’s happening in global finance right now is bigger than any one person. It’s a shift in how influence works.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Reputation, communication, and how things are perceived are now central to everything. Those who understand this will be the ones who stay relevant.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Because today, it’s not just about what you do.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It’s about how the world sees what you do—and whether they trust it.
                                            </p>
                                        </section>
                                    </div>
                                </article>
                            </div>

                            {/* Share Component and Comment Form */}
                            <ShareComponent title={julioHerreraArticle.title} />
                            <CommentForm />
                        </div>

                        {/* Right Sidebar */}
                        <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200">
                            <ArticleCard
                                data={[
                                    prnewsData[0],
                                    prnewsData[1],
                                    prnewsData[2],
                                    prnewsData[3],
                                ]}
                            />
                            <div className="py-5">
                                <UpgradePromoCard />
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} article={julioHerreraArticle} />
            </div>
        </main>
    );
}
