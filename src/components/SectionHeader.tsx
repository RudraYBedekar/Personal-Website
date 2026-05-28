interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = '' }: SectionHeaderProps) => (
  <header className={`mb-10 ${className}`}>
    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-500">{subtitle}</p>
    )}
  </header>
);

export default SectionHeader;
