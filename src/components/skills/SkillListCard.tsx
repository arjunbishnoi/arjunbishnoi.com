export function SkillListCard({ category, items }: { category: string, items: string[] }) {
  return (
    <div className="group relative rounded-[32px] bg-white dark:bg-[#111] border border-black/5 dark:border-white/10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md p-6 sm:p-8 h-full flex flex-col">
      <h3 className="text-xl font-bold text-foreground mb-6 text-center">{category}</h3>
      <div className="flex flex-wrap gap-2 flex-1 content-start">
        {items.map((item) => (
          <span 
            key={item} 
            className="flex-grow text-center px-3 py-1.5 bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-full text-sm font-medium text-foreground transition-colors hover:bg-black/[0.05] dark:hover:bg-white/[0.05]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
