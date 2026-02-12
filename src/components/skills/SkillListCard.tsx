export function SkillListCard({ category, items }: { category: string, items: string[] }) {
  return (
    <div className="bg-card/50 p-6 rounded-lg h-full border border-border/50">
      <h3 className="text-xl font-semibold text-primary mb-4">{category}</h3>
      <ul className="space-y-2 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <span className="mr-2 text-primary">▹</span> {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
