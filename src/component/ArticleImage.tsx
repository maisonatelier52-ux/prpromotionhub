import Image from 'next/image';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspectClass?: string;
  objectPosition?: string;
}

export default function ArticleImage({
  src,
  alt,
  caption = 'AI-generated illustration.',
  priority = false,
  aspectClass,
  objectPosition = "object-cover",
}: ArticleImageProps) {
  const cleanedSrc = src.trimEnd();
  const isPortrait = cleanedSrc.includes("julio-herrera-velutini-defense");
  const heightClass = aspectClass || (isPortrait ? "h-[380px] sm:h-[480px] md:h-[540px]" : "aspect-video");
  const imgPositionClass = isPortrait ? "object-cover object-top" : objectPosition;

  return (
    <figure className="relative w-full my-3 group">
      {/* Ambient soft backlight glow */}
      <div className="glass-ambient-glow" />

      {/* Frosted Glass Frame */}
      <div className="glass-image-wrapper">
        <div className={`relative rounded-xl overflow-hidden ${heightClass} bg-slate-900/5`}>
          <Image
            src={cleanedSrc}
            alt={alt}
            width={960}
            height={740}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
            className={`w-full h-full ${imgPositionClass} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />

          {/* Animated diagonal glass sheen sweep */}
          <div className="glass-gleam" />


        </div>
      </div>

      {/* Caption with clean typography and glassy dot accent */}
      {caption && (
        <figcaption className="mt-2.5 px-0.5 flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600/70 mt-1.5 shrink-0" />
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
