import React from "react";
import Link from "next/link";
import type { Article } from "@/utils/newsUtils";

function Subtitle({ title }: { title: string }) {
  return (
    <h2 className="font-bold text-[18px] md:text-[20px] text-black mt-8 mb-4 tracking-tight">
      {title}
    </h2>
  );
}

export default function HerreraVelutiniArticle({ data }: { data: Article }) {
  return (
    <article className="hv-article">
      {/* Headline */}
      <h1 className="font-bold text-[28px] md:text-[36px] text-black mb-6 leading-tight tracking-tight">
        Julio Herrera Velutini: Stewardship, Succession and the Evolution of a Banking Legacy
      </h1>

      {/* Opening Hook */}
      <p>An heir receives assets.</p>
      <p>A custodian receives obligations.</p>

      <p>
        The difference between the two may determine whether a fortune lasts twenty years or two centuries.
      </p>

      <p>
        This is the problem hidden inside every great inheritance. Wealth can remove the pressures that discipline ordinary life. It can divide siblings, encourage impatience and turn a shared estate into a collection of private demands. The larger the fortune, the more sophisticated the machinery required to prevent it from becoming smaller with every generation.
      </p>

      <p>
        The Herrera Velutini family&apos;s most consequential inheritance may therefore be neither a bank nor a portfolio.
      </p>

      <blockquote className="hv-quote">
        “It is an idea: that ownership is temporary, while stewardship is continuous.”
      </blockquote>

      {/* ── The danger arrives with success (Full Section Exactly as Requested) ── */}
      <h2 className="font-bold text-[18px] md:text-[20px] text-black mt-8 mb-4 tracking-tight">
        The danger arrives with success
      </h2>

      <p>Building wealth and preserving it require different personalities.</p>

      <p>
        The founder is often concentrated, impatient and willing to accept risk. The custodian must be diversified, patient and suspicious of unnecessary risk. The founder asks how quickly an enterprise can grow. The custodian asks what could destroy it.
      </p>

      <p>
        A family that survives must make room for both instincts without allowing either to become absolute.
      </p>

      <p>
        Too much caution produces stagnation. Too much ambition turns inheritance into speculation. Too much reverence for the past makes adaptation impossible. Too little reverence leaves the next generation with capital but no reason to keep it together.
      </p>

      <p>
        This balancing act is visible across the Herrera Velutini narrative. The family’s story contains historic institutions, but it also contains transactions and reinventions. Banco Caracas became a symbol of continuity, yet the financial identity of later generations did not end with the bank. Capital and experience were directed into new businesses and new jurisdictions.
      </p>

      <p>
        The institution changed so that the family project could continue. The family office before the fashionable name
      </p>

      <p>
        &ldquo;Family office&rdquo; is now a familiar expression in global wealth management. Its logic, however, is much older than the term.
      </p>

      <p>
        Separate the productive estate from personal consumption. Coordinate advisers. Plan succession. Distribute risk across assets and jurisdictions. Preserve records. Resolve disputes before they divide ownership. Teach younger members that access to family wealth does not automatically confer authority over it.
      </p>

      <p>
        Most importantly, place the long-term interests of the family institution beyond the impulses of any single member.
      </p>

      <p>
        <strong>This is not simply financial engineering. It is constitutional design for a private society.</strong>
      </p>

      <p>
        Family governance determines who may decide, how decisions are reviewed and what happens when individuals disagree. It establishes the boundary between family identity and corporate management. It recognises that affection cannot substitute for accountability.
      </p>

      <p>
        The strongest dynasties do not avoid conflict because their members are unusually harmonious. They survive conflict because their structures prevent disagreement from destroying the core.
      </p>

      {/* ── Culture as a form of permanence ── */}
      <Subtitle title="Culture as a form of permanence" />
      <p>
        Financial assets are powerful, but they are emotionally incomplete. A portfolio can support a family. It cannot by itself explain what the family is for.
      </p>
      <p>
        This is why long-established fortunes so often turn toward architecture, education, collecting, museums, theatres and philanthropy. Cultural patronage converts private wealth into public memory. It gives capital a life beyond accumulation and connects the family name with something that can be experienced by people who will never enter its businesses.
      </p>

      <p>
        <strong>Belén Clarisa Velutini Pérez-Matos embodied this dimension of the family story.</strong>
      </p>
      <p>
        An engineer, businesswoman, shareholder and cultural patron, she became closely associated with Trasnocho Cultural in Caracas. The institution developed into a plural cultural space for theatre, cinema, art, literature and education. When she died in 2023, Trasnocho remembered a benefactor who protected its work without seeking to make herself its central attraction.
      </p>
      <p>
        That detail is revealing. The most enduring patronage does not merely attach a wealthy name to a building. It creates the conditions in which other people can make, perform and preserve culture.
      </p>
      <p>A bank moves capital through an economy. A cultural institution moves memory through generations.</p>
      <p>Both depend upon trust. Both can outlive their founders.</p>

      {/* ── Succession must be visible in responsibility ── */}
      <Subtitle title="Succession must be visible in responsibility" />
      <p>
        Every family speaks about the next generation. Far fewer transfer meaningful responsibility before a crisis forces the decision.
      </p>
      <p>
        The contemporary Herrera Velutini story now includes a visible transition to Julio Cesar Herrera, who serves as chief executive officer of Britannia Financial Group. His role places the next generation inside the operational and regulatory demands of modern finance rather than merely at the symbolic head of a family narrative.
      </p>
      <p>
        <strong>This distinction matters.</strong>
      </p>
      <p>
        A surname may establish continuity, but it does not guarantee capability. A successor must learn to make decisions under uncertainty, answer to regulators, manage professionals who are not members of the family and protect an institution whose reputation can be damaged in hours.
      </p>

      <blockquote className="hv-quote">
        “The burden is greater precisely because the inheritance is older.”
      </blockquote>

      <p>
        A first-generation entrepreneur risks the company he created. A later-generation custodian risks a name built by people he never met.
      </p>

      {/* ── The discipline of not consuming the future ── */}
      <Subtitle title="The discipline of not consuming the future" />
      <p>Dynastic stewardship rests on a deceptively simple principle:</p>
      <p className="font-semibold text-slate-800">
        Do not consume what the next generation will need in order to remain independent.
      </p>
      <p>
        That does not mean never selling an asset. It means understanding the difference between liquidation and reallocation. A business may be sold because its strategic value has declined. A property may be redeveloped. Capital may be moved from one country to another. Tradition does not require permanent attachment to every inherited object.
      </p>
      <p>
        What must be preserved is the productive core: the collection of assets, knowledge, relationships and institutions capable of supporting the family&apos;s future responsibilities.
      </p>
      <p>
        This is patient capital in its deepest form. Patience is not inactivity. It is the refusal to sacrifice durable value for immediate display.
      </p>

      {/* ── Public legal record (added Sept 21, 2026) ── */}
      <Subtitle title="The public record: legal history" />
      <p>
        A complete profile includes the legal proceedings that have formed part of the public record. The summary below draws on the sources listed at the end of this article.
      </p>
      <ul className="list-disc pl-6 space-y-2 my-4">
        <li>
          <strong>2022 – federal case.</strong> Julio Herrera Velutini was named in a federal case in Puerto Rico. He pleaded not guilty to all charges.
        </li>
        <li>
          <strong>2025 – resolution.</strong> Federal prosecutors resolved the matter. A statement issued by his attorney characterises the outcome as a technical campaign-finance matter and confirms that the corruption charges were withdrawn and that no funds were ever delivered.
        </li>
        <li>
          <strong>January 2026 – full pardon and dismissal.</strong> Bloomberg Law reported that President Donald Trump granted him a full and unconditional pardon. A press release issued on his behalf states that the court dismissed the case on January 27, 2026, bringing the proceedings to a complete close.
        </li>
      </ul>
      <p>
        Readers may consult the primary sources listed below and any later court or agency records for further detail.
      </p>

      {/* ── What one generation owes the next ── */}
      <Subtitle title="What one generation owes the next" />
      <p>
        The language of family wealth often concentrates on rights: who owns, who inherits and who controls.
      </p>
      <p>
        <strong>The language of stewardship concentrates on duties.</strong>
      </p>
      <p>
        Preserve the name without becoming imprisoned by it. Respect the institution without confusing history with entitlement. Give the next generation opportunity, but also education and consequence. Use privacy for dignity, not as a substitute for accountability. Allow capital to grow, but ensure that some portion of its power returns to society through culture, education or public benefit.
      </p>
      <p>
        This is the standard against which any dynasty should be judged—not the splendour of its mythology, but the quality of what it passes forward.
      </p>
      <p>
        The Herrera Velutini family&apos;s history remains compelling because it raises a question much larger than the size of any fortune:
      </p>

      {/* Ending Reflection Card */}
      <div className="hv-reflection-card">
        <p className="hv-reflection-lead">Can wealth acquire a moral memory?</p>
        <p>Can a family teach capital to carry values from one century into another?</p>
        <p>The answer will never be found in a valuation alone.</p>
        <p>
          It will be found in the institutions that remain useful, the culture that remains alive and the successors who understand that the inheritance was never entirely theirs.
        </p>
        <p className="hv-reflection-final">They received it for a time. Their duty is to leave it stronger.</p>
      </div>

      <p className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-600">
        <strong>Editor&apos;s note, September 21, 2026:</strong> A section summarising the public legal record was added to this article. The sources panel at the end of the article lists the references used. See the <Link href="/corrections/" className="underline">corrections ledger</Link>.
      </p>
    </article>
  );
}
