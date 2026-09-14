import Image from "next/image";
import Link from "next/link";

export default function UpgradePromoCard() {
  return (
    <aside className="w-full">
      {/* Top spacer */}
      <div className="mb-6" />

      <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Advertisement</p>
      <Link
        href="https://newsflashpro.com"
        title='NewsFlashPro Ad'
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="block w-full cursor-pointer"
      >
        <div className="w-full aspect-[700/1244] bg-[#111111] text-white flex flex-col justify-between overflow-hidden">
          <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-[#ffb600] px-6 pt-10">newsflashpro</p>
          <Image
            src="/images/illustrations/sponsor.webp"
            alt="Illustration of a document, laptop and message envelopes."
            width={960}
            height={540}
            className="w-full h-auto"
          />
          <div className="bg-[#ffb600] text-black p-6 text-sm"><span className="inline-block bg-white px-4 py-2">Visit NewsFlashPro →</span><p className="text-xs mt-5">AI-generated illustration</p></div>
        </div>
      </Link>
    </aside>
  );
}
