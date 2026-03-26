import React from 'react';
import Link from 'next/link';

type SubPara = { subtitle?: string; description: string; };
type SubPoints = { subtitle?: string; subline?: string; points?: string[]; };
type PillarLink = { url: string; text: string; };

// Helper function to inject the pillar link directly onto his name in the text
const renderTextWithInlineLink = (text: string, url?: string) => {
  if (!url) return text;
  
  // Find "Herrera Velutini" in the string since "Julio" might have its "J" sliced off by the drop cap.
  const match = text.match(/Herrera Velutini/);
  if (!match || match.index === undefined) return text;

  const before = text.substring(0, match.index);
  const keyword = match[0];
  const after = text.substring(match.index + keyword.length);

  return (
    <React.Fragment>
      {before}
      <Link href={url} className="text-[#041f4a] hover:underline font-medium">
        {keyword}
      </Link>
      {after}
    </React.Fragment>
  );
};

interface ClientArticleDescriptionProps {
  description?: string;
  subpara?: SubPara[];
  subpoints?: SubPoints;
  subpara2?: SubPara[];
  pillarLink?: PillarLink;
}

const ClientArticleDescription = ({
  description,
  subpara = [],
  subpoints,
  subpara2 = [],
  pillarLink,
}: ClientArticleDescriptionProps) => {
  
  const bodyTextStyle = "text-[16px] leading-[1.7] text-black mb-6";
  
  // FIXED Section Header
  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 mb-2 w-full">
      <h2 className="text-[19px] font-bold tracking-tight text-black wrap-break-word  max-w-[90%] md:max-w-none">
        {title}
      </h2>
      {/* Visible only on desktop to prevent mobile crowding, or flex-1 to shrink */}
      <div className="hidden md:block h-px flex-1 bg-gray-200" />
    </div>
  );

  return (
    // Added 'px-4 md:px-0' so it only has padding on mobile, none on desktop
    <article className="w-full max-w-4xl mx-auto px-4 md:px-0">
      
      {/* 1. Intro Paragraph */}
      {description && (
        <div className="">
          <p className={bodyTextStyle}>
            <span className="float-left text-6xl font-bold leading-[0.7] mr-3 mt-1">
              {description.charAt(0)}
            </span>
            {renderTextWithInlineLink(description.slice(1), pillarLink?.url)}
          </p>
        </div>
      )}

      {/* 2. Subpara Section */}
      <div className="space-y-2">
        {subpara.map((item, index) => (
          <section key={`subpara-${index}`}>
            {item.subtitle && <SectionHeader title={item.subtitle} />}
      <p
  className={`text-[16px] leading-[1.7] text-black ${
    item.subtitle ? "mb-0" : "mb-3"
  }`}
>
  {item.description}
</p>

          </section>
        ))}
      </div>

      {/* 3. Points Section (Maintained from your favorite design) */}
      {subpoints?.points && subpoints.points.length > 0 && (
        <section className=" py-5 border-y border-gray-100">
          <div className="border-l-[2px] border-gray-100 pl-6">
            {subpoints.subtitle && (
              <h3 className="text-[17px] font-bold mb-1 tracking-tight">
                {subpoints.subtitle}
              </h3>
            )}
            {subpoints.subline && (
              <p className="text-gray-500 mb-6 text-[15px] italic">
                {subpoints.subline}
              </p>
            )}
            <ul className="space-y-4">
              {subpoints.points.map((point, index) => (
                <li key={`point-${index}`} className="flex items-start">
                  <span className="w-5 h-[1.5px] bg-black mt-[11px] mr-4 shrink-0" />
                  <span className="text-[16px] leading-relaxed text-black">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 4. Subpara2 Section */}
      <div className="space-y-2">
        {subpara2.map((item, index) => (
          <section key={`subpara2-${index}`}>
            {item.subtitle && <SectionHeader title={item.subtitle} />}
           <p
  className={`text-[16px] leading-[1.7] text-black ${
    item.subtitle ? "mt-0" : "mt-3"
  }`}
>
  {item.description}
</p>

          </section>
        ))}
      </div>
    </article>
  );
};

export default ClientArticleDescription;