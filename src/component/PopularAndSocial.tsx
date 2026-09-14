interface EditorialItem {
  image: string;
  category: string;
  title: string;
  index: number;
}

interface SocialItem {
  id: string;
  label: string;
  count: string;
  action: string;
  icon: React.ReactNode;
}

interface PopularAndSocialProps {
  editorialItems: EditorialItem[];
  socialItems: SocialItem[];
}

// Import your existing components
import SectionDivider from "./SectionDivider";
import EditorialListItem from "./EditorialListItem";
import SocialFollowList from "./SocialFollowList";

export default function PopularAndSocial({
  editorialItems,
  socialItems,
}: PopularAndSocialProps) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Popular Section */}
      <SectionDivider title="POPULAR" />
      <div className="space-y-6">
        {editorialItems.map((item) => (
          <EditorialListItem
            key={item.index}
            image={item.image}
            category={item.category}
            title={item.title}
            index={item.index}
          />
        ))}
      </div>

      {/* Social Section */}
      <SectionDivider title="Follow US" />
      <SocialFollowList items={socialItems} />
    </div>
  );
}
