import WhatsHotBar from './WhatsHotBar';
import RelatedNewsSection from './RelatedNewsSection';
import Script from 'next/script';
import UpgradePromoCard from './UpgradePromoCard';
import ArticleCard from './ArticleCard';
import CommentForm from './CommentForm';
import ShareComponent from './ShareComponent';
import SocialShareList from './SocialShareList';
import ArticleImage from './ArticleImage';
import SocialShare from './SocialShare';
import ClientArticleHeader from './ClientArticleHeader';
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
    whatsHotNews: NewsItem;
    popularNews: NewsItem[];
    relatedNews: NewsItem[];
}

export default function ClientArticle({ whatsHotNews, popularNews, relatedNews }: Props) {

    const julioHerreraArticle = {
        category: "Finance",
        title: "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
        shortdescription: "In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire class.",
        description: "Finance isn’t just about money anymore. Yes, capital still matters. Strategy still matters. But more and more, what really shapes success is something less tangible—how people see you. Reputation has become a kind of currency of its own.",
        image: "/images/two-degrees-from-the-throne-julio-herrera-velutini.webp",
        slug: "two-degrees-from-the-throne-julio-herrera-velutini",
        date: "May. 14, 2026",
        author: {
            name: "Staff Reporter",
            role: "Business & Economy Desk",
            bio: "Covering global finance trends and leadership strategies.",
            image: "/images/staff-reporter.webp",
            email: "",
            twitter: "",
            facebook: "",
            instagram: ""
        }
    };


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
                                "@id": "https://www.prpromotionhub.com/finance/two-degrees-from-the-throne-julio-herrera-velutini/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/two-degrees-from-the-throne-julio-herrera-velutini/"
                                },
                                "headline": "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
                                "description": "In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire class.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.prpromotionhub.com/images/two-degrees-from-the-throne-julio-herrera-velutini.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "datePublished": "2026-05-14T08:00:00+00:00",
                                "dateModified": "2026-05-14T08:00:00+00:00",
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
                                    "Julio M. Herrera Velutini",
                                    "Britannia Financial Group",
                                    "Julio Herrera Velutini influence",
                                    "Julio Herrera Velutini London finance",
                                    "Herrera Velutini banking family",
                                    "Britannia Financial Group founder",
                                    "elite finance",
                                    "banking lineage",
                                    "family offices",
                                    "private banking",
                                    "high-net-worth individuals",
                                    "London financial platform",
                                    "Queen Elizabeth II Platinum Jubilee Pageant",
                                    "quiet power",
                                    "architecture of influence",
                                    "International Banking",
                                    "Wealth Management",
                                    "Global Finance",
                                    "Financial Leadership",
                                    "global finance",
                                    "reputation management",
                                    "financial leadership",
                                    "trust in business",
                                    "perception economy",
                                    "wealth management",
                                    "corporate reputation",
                                    "finance trends"
                                ],
                                "articleBody": "Finance isn’t just about money anymore. Yes, capital still matters. Strategy still matters. But more and more, what really shapes success is something less tangible—how people see you. Reputation has become a kind of currency of its own. This is where the story of Julio M. Herrera Velutini begins. His influence is architectural, not theatrical, living in institutional access and inherited trust. As the founder and leader of Britannia Financial Group, he stands at the head of a London-centred financial platform serving banks, family offices, and high-net-worth individuals worldwide. The article explores the 'World Behind the World,' where private architecture keeps capital secure. It defines 'Two Degrees From The Throne' through two key pillars: First, the institutional platform itself, which provides infrastructure for elite capital. Second, the ceremonial ecosystem, exemplified by Britannia’s sponsorship of the Queen Elizabeth II Platinum Jubilee Pageant in 2022. Herrera Velutini represents the fusion of institutional capability and dynastic memory, offering continuity and restraint in a volatile market. Ultimately, the story is about the 'Hidden Map' where finance, heritage, and London’s upper institutional world leave him uniquely close to monarchs, state heads, and the global billionaire class."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/two-degrees-from-the-throne-julio-herrera-velutini/#breadcrumb",
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
                                        "name": "Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence ",
                                        "item": "https://www.prpromotionhub.com/finance/two-degrees-from-the-throne-julio-herrera-velutini/"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            <Script
                id="structured-data-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "@id": "https://www.prpromotionhub.com/#julio-herrera-velutini",
                        "name": "Julio Herrera Velutini",
                        "url": "https://www.prpromotionhub.com/finance/two-degrees-from-the-throne-julio-herrera-velutini/",
                        "image": "https://www.prpromotionhub.com/images/two-degrees-from-the-throne-julio-herrera-velutini.webp",
                        "jobTitle": "International Banker",
                        "description": "Julio Herrera Velutini is an international banker known for his work in private banking, wealth management, and global finance.",
                        "sameAs": [
                            "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
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
                            },
                            {
                                "@type": "Question",
                                "name": "What does 'Two Degrees From The Throne' signify in relation to Julio Herrera Velutini?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It refers to his structural proximity to elite power. The first degree is his institutional platform in London, and the second is the ceremonial and social ecosystem surrounding monarchy and establishment life."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How was Britannia Financial Group involved in the Queen Elizabeth II Platinum Jubilee Pageant?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The group was a reported sponsor of the 2022 Pageant, an event where international finance and royal symbolism intersect, signaling admission to the cultural radius of the establishment."
                                }
                            }
                        ]
                    })
                }}
            />

            <WhatsHotBar data={whatsHotNews} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                <div>
                    <ClientArticleHeader />

                    {/* <SocialShare title={julioHerreraArticle.title} /> */}
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
                                    {/* At a Glance Box - Minimal Professional Design */}
                                    <aside className="my-10 p-6 bg-[#f8f9fa] border-t border-b border-gray-100 shadow-sm">
                                        <h2 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-gray-400 mb-6 flex items-center gap-2">
                                            At a Glance
                                        </h2>
                                        <dl className="grid grid-cols-1 gap-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                                <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Subject</dt>
                                                <dd className="text-[15px] font-medium text-gray-900">Julio M. Herrera Velutini</dd>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                                <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Known for</dt>
                                                <dd className="text-[15px] text-gray-700 leading-relaxed">Founder and leader of Britannia Financial Group</dd>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                                <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Core themes</dt>
                                                <dd className="text-[15px] text-gray-700 leading-relaxed">London finance, banking lineage, institutional influence</dd>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                                <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Key institution</dt>
                                                <dd className="text-[15px] text-gray-700 leading-relaxed">Britannia Financial Group</dd>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4 items-baseline">
                                                <dt className="text-xs font-bold text-gray-400 uppercase tracking-tight">Primary lens</dt>
                                                <dd className="text-[15px] text-gray-700 leading-relaxed">Structural proximity to elite capital, ceremony, and private wealth</dd>
                                            </div>
                                            <div className="pt-4 mt-2 border-t border-gray-200/60">
                                                <dt className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Editorial Note</dt>
                                                <dd className="text-[13px] italic text-gray-500 leading-relaxed">
                                              This article discusses institutional proximity, not personal intimacy with every 
monarch, minister, or billionaire mentioned.  </dd>
                                            </div>
                                        </dl>
                                    </aside>

                                    <div className="">
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            At certain levels of power, nobody needs to introduce themselves.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            The room already knows.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            The chandeliers are bright. The uniforms are immaculate. The orchestra moves with the discipline
                                            of old ritual. A state occasion unfolds with the confidence of centuries: monarchs, ministers,
                                            financiers, patrons, advisers, and power brokers crossing the same polished floor, each playing a
                                            part in a choreography older than most modern governments.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            The public sees ceremony.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            The initiated see something else: access, placement, trust.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            This is where the story of <strong>Julio M. Herrera Velutini </strong>
                                            begins. Not at a podium. Not on a campaign
                                            stage. Not in the noisy theatre of public ambition. His is a different kind of altitude. He operates
                                            through institutional gravity, inherited legitimacy, and the sort of financial infrastructure that places
                                            a man close to the people who shape nations, markets, capital flows, and private empires.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            There are public men, and there are adjacent men.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            The public men are easy to recognise. They wave from balconies, descend from motorcades,
                                            address chambers, ring opening bells, and dominate the day’s images. The adjacent men are
                                            harder to read. Their influence is not theatrical. It is architectural. It lives in institutional access,
                                            inherited trust, and the unusual quiet that surrounds people accustomed to operating one or two
                                            doors away from consequence.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            Herrera Velutini belongs to that second category.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            Founder and leader of <strong>Britannia Financial Group</strong>, he stands at the head of a London-centred
                                            financial platform whose public description places it across the United Kingdom, continental
                                            Europe, the United States, Latin America, the Middle East, and Asia. Britannia’s own positioning
                                            places the group in custody, securities, fixed income, derivatives, securities financing, repo,
                                            reverse repo, and access to major worldwide derivative markets. It also identifies the firm’s world
                                            of clients as institutions, banks, fund managers, hedge funds, family offices, commercial houses,
                                            financial institutions, investors, and high-net-worth individuals.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            Read that list slowly.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            Banks. Family offices. Institutions. High-net-worth individuals.
                                        </p>

                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            That is not merely a client profile. It is the vocabulary of nearness.
                                        </p>
                                        <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                            It means the firm does not sit on the outer edge of global finance. It sits in the channels through
                                            which serious money is protected, moved, hedged, financed, and quietly repositioned. And
                                            wherever that level of money goes, influence is never far behind.
                                        </p>
                                    </div>



                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    The World Behind the World
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Most people understand power through headlines.  </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                They picture presidents, prime ministers, monarchs, technology founders, the annual billionaire
                                                rankings, the summit handshake, the state banquet, the front page. But visible figures exist inside
                                                a deeper system. Behind every public leader is a private architecture of advisers, custodians,
                                                institutions, financiers, lawyers, trustees, family offices, and old networks that keep capital secure
                                                and movement possible.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                This is the world behind the world.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                A cross-border financial platform in London is not merely a business. In practice, it is a point of
                                                contact between different classes of power. London still matters because it compresses law,
                                                markets, diplomacy, private banking, old establishment culture, and international capital into a
                                                single city. To control an institution there, especially one designed for the classes of clients
                                                Britannia names, is to stand near the machinery of influence even without appearing in the
                                                photograph.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That is where Herrera Velutini’s position becomes meaningful.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                His world is not built on spectacle. It is built on proximity. It is the geography of access: London,
                                                regulated markets, family offices, private capital, royal-adjacent ceremony, and a banking lineage
                                                that signals continuity rather than novelty.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In ordinary business, a company is measured by market share, growth, products, and
                                                performance. In elite finance, it is also measured by confidence.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Who trusts the institution?
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Who enters the room?
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Who remains close to capital when politics changes?
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Who can operate across borders without losing discretion?
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Who can stand between old wealth and new markets without appearing out of place in either?

                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                This is the terrain in which Herrera Velutini’s story belongs.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    First Degree: The Institution
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The first degree of separation is the institution itself.   </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                A man who controls a global financial group headquartered in London already occupies one of the
                                                few remaining crossroads where sovereign prestige, dynastic wealth, political ecosystems, and
                                                billionaire capital continue to intersect. This does not require personal friendship with every
                                                monarch, minister, head of state, or billionaire. It requires something more durable: a credible
                                                institutional platform through which their world, or the world around them, can operate.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In elite finance, institutions are often more revealing than photographs.  </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Photographs can be staged. Titles can be inflated. Public proximity can be manufactured. But a
                                                functioning cross-border financial platform serving institutions, family offices, banks, funds, and
                                                high-net-worth clients says something harder and cleaner. It says that the platform is already near
                                                the capital that requires custody, execution, financing, hedging, derivatives access, and
                                                jurisdictional reach.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That is the first degree.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Not friendship, not spectacle. Infrastructure.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                A man at the top of such a platform is not outside the room looking in. He is near the systems that
                                                support the room itself. The world’s billionaire families, private offices, industrial dynasties,
                                                political ecosystems, sovereign-adjacent investors, and multinational institutions do not float
                                                above markets. They move through specialised firms, trusted intermediaries, regulated structures,
                                                and private financial channels.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Herrera Velutini’s institutional position places him within that architecture.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It is a quieter kind of influence, but not a smaller one.
                                            </p>

                                        </section>
                                    </div>


                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Second Degree: The Ceremony
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The second degree is where infrastructure touches theatre. </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                This is the moment when balance sheets and ceremonial state life briefly meet in public. One of
                                                the clearest visible examples is Britannia’s reported sponsorship of the <strong>Queen Elizabeth II
                                                    Platinum Jubilee Pageant </strong>  in 2022. </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That single detail carries more weight than it first appears.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                National celebrations of that scale are not ordinary sponsorship opportunities. They are moments
                                                when elite finance, royal symbolism, national identity, establishment legitimacy, and public ritual
                                                share the same stage. A company does not casually drift into that setting. To appear there is to
                                                enter the cultural radius of monarchy itself.

                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That does not prove intimate personal friendship with every person in the royal orbit. It should not
                                                be overstated. But it does demonstrate something more precise: admission to the atmosphere.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                At this altitude, admission matters.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The first degree is a financial institution capable of operating near the world’s deepest pools of
                                                private capital. The second is the social and ceremonial ecosystem that surrounds crowns, states,
                                                and the wealthy strata that orbit them. Put those two together, and Herrera Velutini’s distance
                                                from monarchs, state heads, and the global billionaire class narrows dramatically.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                This is why the phrase  <strong>“two degrees from the throne” </strong>  works.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It is not a claim of universal intimacy. It is a description of structure.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                One degree runs through London, regulated markets, and the infrastructure required by elite
                                                capital. The second runs through the ceremonial ecosystem surrounding monarchy, state ritual,
                                                and old establishment life.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Together, those degrees compress distance.
                                            </p>
                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    The Power of Old Names
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                There is another force at work here, and it is older than modern markets.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Britannia is connected to a long-standing banking family with more than 150 years of experience
                                                in financial services. In elite circles, that is not background detail. It is a passport.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Old names function differently from new money.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Their advantage is not merely capital. It is continuity, memory, restraint, and inherited trust. Old
                                                banking families are treated as repositories of discretion. They are expected to understand not
                                                only transactions, but protocol. Not only markets, but how power prefers to be handled. Not only
                                                money, but the anxiety that surrounds money when it belongs to states, dynasties, private offices,
                                                and multigenerational fortunes.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                In a world where some fortunes are built in a decade and vanish in two, lineage offers something
                                                almost aristocratic: reassurance.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That is what makes Herrera Velutini compelling as a figure.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                He is not simply a financier with a modern platform. He represents the fusion of institutional
                                                capability and dynastic memory. One gives him reach. The other gives him texture.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Together, they create aura.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Old financial families know that wealth is not only accumulated. It is preserved. It is guarded. It is
                                                transferred across generations. It is shielded from volatility, politics, collapse, scandal, inflation,
                                                currency movement, and the unpredictable ambitions of men who believe history began with
                                                them.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That kind of inheritance teaches a different discipline.
                                            </p>

                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It teaches silence. It teaches patience.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It teaches that true influence is often exercised by those who do not need to explain their
                                                relevance.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    Why Billionaires Are Never Far Away
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                When people say “the richest people on the planet,” they often imagine magazine covers and
                                                public net-worth tables. In reality, the billionaire class is larger, quieter, and more dispersed than
                                                the rankings suggest.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It includes private dynasties, industrial families, sovereign-adjacent investors, heirs, family offices,
                                                commodity operators, financiers, private-bank clients, and individuals whose wealth is shielded
                                                behind structures rather than displayed in public lists.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Those people all have something in common.
                                            </p>

                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                They need trusted channels
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Custody. Execution. Financing. Hedging. Derivatives access. Cross-border capability. These are
                                                not abstract services. They are the mechanics of modern wealth preservation and movement.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                A platform built for those functions naturally sits close to serious pools of capital. That does not
                                                mean every billionaire is a client or acquaintance. It means the business model itself operates in
                                                the same terrain where the world’s largest private fortunes require service, discretion, and access </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>

                                                That is why the billionaire world is never very far from firms that move money, protect assets,
                                                hedge exposures, and bridge jurisdictions.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                And firms like Britannia are built precisely for that terrain.
                                            </p>
                                        </section>
                                    </div>

                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    A Quiet Man in Loud Rooms
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The most striking part of the Herrera Velutini story is that his proximity to power is not loud.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                He does not need public office. He does not need a campaign trail. He does not need daily
                                                commentary to announce his relevance. His position comes from something older and harder to
                                                imitate: placement.
                                            </p>
                                            <ul className="space-y-2 pl-5 mb-3">
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Placement in London.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Placement in regulated markets.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Placement inside an institution with global reach.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Placement near ceremonial state life.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                                                    <span className="text-[16px] leading-relaxed text-black">Placement within a banking lineage that signals continuity and discretion.</span>
                                                </li>
                                            </ul>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That is why the aura around him feels larger than ordinary biography.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                He is not presented as a conventional public man. He is more interesting than that. He is a quiet
                                                man in loud rooms, a figure whose influence is best understood not through speech, but through
                                                the rare geography he occupies.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                The geography is what matters.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                It tells us where he stands in relation to money, monarchy, and power.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Often, only two degrees away.

                                            </p>

                                        </section>
                                    </div>
                                    <div className="space-y-2">
                                        <section>
                                            <div className="flex items-center gap-4 mb-2 mt-3 w-full">
                                                <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word max-w-[90%] md:max-w-none">
                                                    The Hidden Map
                                                </h2>
                                            </div>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Seen from a distance, the world appears fragmented.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                There are presidents in one frame, kings in another, billionaires in another still. But at higher
                                                altitude, the map begins to simplify. Separate realms start to overlap. Markets touch ceremony.
                                                Family wealth touches state ritual. Private institutions touch public history.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                This is the hidden map on which Julio Herrera Velutini appears
                                            </p>

                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                One line runs through London and the financial infrastructure of a global group. Another runs
                                                through the ceremonial orbit of the British Crown. Another runs through old-family banking
                                                legitimacy and the service architecture for billionaires, family offices, institutions, and high-net
                                                worth capital.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                None of these lines need to be shouted.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Together, they do something more impressive than noise ever could. </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                They place him close.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                And in the upper grammar of influence, closeness is often the truest measure of power.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Some men spend their lives trying to become visible. Others become powerful precisely because
                                                visibility is not the point.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Julio Herrera Velutini is most compelling when viewed through that second lens. Not as a loud
                                                actor at the front of the stage, but as a man whose placement in finance, heritage, and London’s
                                                upper institutional world leaves him unusually close to monarchs, state heads, and the billionaire
                                                class, even when the photograph never quite shows the whole room.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                That may be the larger distinction.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Not being at the centre of every image.
                                            </p>
                                            <p className='text-[16px] leading-[1.7] text-black mb-3'>
                                                Being only two degrees away from everyone who matters.
                                            </p>

                                        </section>
                                    </div>



                                </article>
                            </div>

                        </div>

                        {/* Right Sidebar */}
                        <div className="w-full lg:w-1/3 lg:pl-8 lg:border-l-2 lg:border-dotted lg:border-gray-200 sticky top-8 self-start">
                            <ArticleCard
                                data={popularNews}
                            />
                            <div className="py-5">
                                <UpgradePromoCard />
                            </div>
                        </div>
                    </div>
                    {/* Share Component and Comment Form */}
                    <div className="w-full lg:w-[74.5%]">
                        <ShareComponent title={julioHerreraArticle.title} />
                        <CommentForm />
                    </div>
                </div>

                <RelatedNewsSection data={relatedNews} article={julioHerreraArticle} />
            </div>
        </main>
    );
}
