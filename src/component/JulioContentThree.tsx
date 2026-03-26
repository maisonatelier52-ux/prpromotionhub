import prnewsData from '../../public/data/prnews.json';
import WhatsHotBar from './WhatsHotBar';
import JulioArticles from './JulioArticles';
import { julioHerreraArticle3 } from '@/data/julioHerreraArticle';
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

export default function JulioContentThree() {


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
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-uk-financial-lens/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-uk-financial-lens/"
                                },
                                "headline": "Julio Herrera Velutini in the UK Financial Lens: Banking Heritage, London Finance, and Regulatory Accountability",
                                "description": "Julio Herrera Velutini is a seventh-generation international banker whose London-based activities place him within the UK’s regulated financial landscape, highlighting the intersection of heritage finance and modern regulatory accountability.",
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
                                    "jobTitle": "UK Business & Finance"
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
                                    "description": "Julio Herrera Velutini is an international banker involved in global wealth management and private banking, with significant operations linked to London’s financial ecosystem.",
                                    "sameAs": [
                                        "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                    ]
                                },
                                "articleSection": "Finance",
                                "keywords": [
                                    "Julio Herrera Velutini",
                                    "UK Finance",
                                    "London Banking",
                                    "Private Banking",
                                    "Wealth Management",
                                    "Financial Regulation UK"
                                ],
                                "articleBody": "Julio Herrera Velutini is a seventh-generation banker whose London-based financial activities highlight the role of the UK as a global hub for private banking and wealth management. His career illustrates how historic banking families operate within modern regulatory frameworks and heightened governance expectations."
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-uk-financial-lens/#breadcrumb",
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
                                        "name": "Julio Herrera Velutini in the UK Financial Lens",
                                        "item": "https://www.prpromotionhub.com/finance/julio-herrera-velutini-uk-financial-lens/"
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
                                "name": "What is Julio Herrera Velutini's connection to the UK?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "He is the founding chairman of Britannia Financial Group, a firm deeply embedded in London's regulatory and financial ecosystem."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does Britannia Financial Group operate in London?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The group provides private banking, wealth management, and capital markets advisory services tailored to international clients under strict UK regulatory standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why is London a crucial hub for heritage banking?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The UK capital offers a robust regulatory framework, storied financial institutions, and global connectivity that aligns closely with traditional private banking practices."
                                }
                            }
                        ]
                    })
                }}
            />

            <WhatsHotBar data={prnewsData[0]} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                <JulioArticles article={julioHerreraArticle3} />

                <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} article={julioHerreraArticle3} />
            </div>
        </main>
    );
}
