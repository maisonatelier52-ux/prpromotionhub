import prnewsData from '../../public/data/prnews.json';
import WhatsHotBar from './WhatsHotBar';
import { julioHerreraArticle4 } from '@/data/julioHerreraArticle';
import RelatedNewsSection from './RelatedNewsSection';
import Script from 'next/script';
import JulioFourthArticle from './JulioFourthArticle';

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

export default function JulioContentFour() {

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
                                "@id": "https://www.prpromotionhub.com/finance/who-is-julio-martin-herrera-velutini/#newsarticle",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.prpromotionhub.com/finance/who-is-julio-martin-herrera-velutini/"
                                },
                                "headline": "Who is Julio Martín Herrera Velutini",
                                "description": "Julio Martín Herrera Velutini is a Venezuelan-Italian international banker and entrepreneur, known for his leadership in global finance and wealth management and as chairman of Britannia Financial Group.",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.prpromotionhub.com/images/julio-herrera-velutini.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "datePublished": "2026-01-06T08:00:00+00:00",
                                "dateModified": "2026-01-06T08:00:00+00:00",
                                "author": {
                                    "@type": "Organization",
                                    "name": "PRPromotionHub"
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
                                "articleSection": "Finance",
                                "keywords": [
                                    "Julio Martín Herrera Velutini",
                                    "International Banker",
                                    "Wealth Management",
                                    "Britannia Financial Group",
                                    "Global Finance",
                                    "Private Banking"
                                ],
                                "articleBody": "Julio Martín Herrera Velutini is a Venezuelan-Italian international banker and entrepreneur with a background in global finance and wealth management. He is known for founding and leading financial institutions operating across Europe, the Americas, and international markets."
                            },
                            {
                                "@type": "Person",
                                "@id": "https://www.prpromotionhub.com/finance/who-is-julio-martin-herrera-velutini/#person",
                                "name": "Julio Martín Herrera Velutini",
                                "birthDate": "1971-12-15",
                                "birthPlace": {
                                    "@type": "Place",
                                    "name": "Caracas, Venezuela"
                                },
                                "nationality": [
                                    "Venezuelan",
                                    "Italian"
                                ],
                                "jobTitle": [
                                    "International Banker",
                                    "Entrepreneur",
                                    "Financial Leader"
                                ],
                                "description": "Julio Martín Herrera Velutini is a seventh-generation banker and international financial executive involved in private banking, wealth management, and global investment services.",
                                "affiliation": {
                                    "@type": "Organization",
                                    "name": "Britannia Financial Group"
                                },
                                "sameAs": [
                                    "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
                                ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "@id": "https://www.prpromotionhub.com/finance/who-is-julio-martin-herrera-velutini/#breadcrumb",
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
                                        "name": "Who is Julio Martín Herrera Velutini",
                                        "item": "https://www.prpromotionhub.com/finance/who-is-julio-martin-herrera-velutini/"
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
                                "name": "Who is Julio Martín Herrera Velutini?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "He is a Venezuelan-Italian international banker, entrepreneur, and the founding chairman of Britannia Financial Group."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the background of the Herrera-Velutini family?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The family has a storied, centuries-old legacy in banking across Europe and Latin America, contributing significantly to commercial lending systems."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "When and where was he born?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "He was born on December 15, 1971, in Caracas, Venezuela."
                                }
                            }
                        ]
                    })
                }}
            />

            <WhatsHotBar data={prnewsData[0]} />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-10'>
                <JulioFourthArticle article={julioHerreraArticle4} />

                <RelatedNewsSection data={[prnewsData[0], prnewsData[1]]} article={julioHerreraArticle4} />
            </div>
        </main>
    );
}
