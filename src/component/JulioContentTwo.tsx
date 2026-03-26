import prnewsData from '../../public/data/prnews.json';
import WhatsHotBar from './WhatsHotBar';
import JulioArticles from './JulioArticles';
import { julioHerreraArticle, julioHerreraArticle2 } from '@/data/julioHerreraArticle';
import RelatedNewsSection from './RelatedNewsSection';
import Script from 'next/script';

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

export default function JulioContentTwo() {


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
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-us-financial-spotlight/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-us-financial-spotlight/"
                                },
                                "headline": "Julio Herrera Velutini and the U.S. Financial Spotlight: Global Banker, Legacy Wealth, and Regulatory Scrutiny",
                                "description": "Julio Herrera Velutini is an international banker whose global financial activities have drawn attention from U.S. regulators and media, reflecting the intersection of legacy finance and modern compliance standards.",
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
                                    "name": "Staff Writer",
                                    "jobTitle": "U.S. Business & Economy"
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
                                    "U.S. Financial Regulation",
                                    "International Banking",
                                    "Wealth Management",
                                    "Campaign Finance Oversight",
                                    "Global Finance"
                                ],
                                "articleBody": "Julio Herrera Velutini is an international banker whose activities have drawn attention within the United States due to the convergence of global finance, regulatory oversight, and political accountability. His career reflects how legacy banking figures navigate modern compliance environments and U.S. legal standards."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-us-financial-spotlight/#breadcrumb",
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
                                        "name": "Julio Herrera Velutini and the U.S. Financial Spotlight",
                                        "item": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-us-financial-spotlight/"
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
                                "name": "Why is Julio Herrera Velutini in the U.S. financial spotlight?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "His career in global finance, compliance, and international banking has repeatedly intersected with U.S. financial systems and intense regulatory scrutiny."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What challenges do international bankers face in the US?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "International bankers must navigate complex compliance structures, campaign finance laws, and rigorous cross-border regulatory demands when interacting with the U.S. market."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does his banking legacy influence his operations?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "As a seventh-generation banking heir, his approach emphasizes adapting to modern transparency standards while preserving traditional financial governance."
                                }
                            }
                        ]
                    })
                }}
            />

            <WhatsHotBar data={prnewsData[0]} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                <JulioArticles article={julioHerreraArticle2} />

                <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} article={julioHerreraArticle2} />
            </div>
        </main>
    );
}
