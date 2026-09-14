import Image from 'next/image';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ArticleImage({
  src,
  alt,
  caption = 'AI-generated illustration.',
}: ArticleImageProps) {
  const cleanedSrc = src.trimEnd();
  return (
    <figure className="relative w-full overflow-hidden">
      <Image
        src={cleanedSrc}
        alt={alt}
        width={960}
        height={540}
        className="w-full aspect-video object-cover"
        priority
      />
      <figcaption className="text-xs text-slate-500 mt-2 leading-relaxed">{caption}</figcaption>
    </figure>
  );
}
