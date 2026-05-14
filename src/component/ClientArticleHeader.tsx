
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

interface NewsData {
    slug: string;
    category: string;
    title: string;
    shortdescription: string;
    description: string;
    date: string;
    image: string;
    author: Author;
}

interface Props {
    article: NewsData;
}

export default function ClientArticleHeader() {
    return (
        <header className=" mx-auto mt-5">
            {/* Category */}
            <span className="inline-block bg-[#041f4a] capitalize text-white text-xs font-semibold px-3 py-1 mb-4">
                Finance
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
               Two Degrees From The Throne: Julio Herrera Velutini and the Quiet Power of Influence
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-[15px] md:text-[18px] text-[#000000] font-light tracking-tight leading-[1.1] max-w-6xl">
              In elite circles, proximity matters more than publicity. Julio Herrera Velutini’s world sits 
unusually close to crowns, capitals, family offices, sovereign circles, and the billionaire 
class.
            </p>

            {/* Meta */}
            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-gray-100 pb-6">
                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="text-[12px] md:text-[14px]">
                        <span className="font-semibold text-[#041f4a]">
                        By Staff Reporter
                        </span>

                        <span className="mx-2 text-gray-400">|</span>

                        <span className="text-gray-600">
                          Business & Economy Desk
                        </span>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-gray-500 text-[11px] uppercase tracking-wider font-medium">
                            <div>Published: May. 14, 2026</div>
                            {/* <div>Updated: May. 15, 2026</div> */}
                            <div className="text-[#9b7a3c]">Reviewed by Editorial Board</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
