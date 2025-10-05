import { cn } from '@/lib/utils/cn';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={cn('w-full py-16 sm:py-20 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};
