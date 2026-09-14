
type CategoryHeaderProps = {
  category: string;
};
export default function CategoryHeader({category}:CategoryHeaderProps) {

  let headerTitle: string;
  
  if (category === "prnews") {
    headerTitle = "Public Relations";
  } else if (category === "us") {
    headerTitle = "U.S";
  } else {
    headerTitle = category;
  }

  return (
    <header className={`py-5 relative overflow-hidden`}>
      {/* Vertical lines background */}
      <div className="absolute inset-0 flex">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className='flex-1 border-r border-gray-100'
            style={{ minWidth: '1px' }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[35px] md:text-[40px] font-bold capitalize">
         {headerTitle}
        </h1>
      </div>
    </header>
  );
}