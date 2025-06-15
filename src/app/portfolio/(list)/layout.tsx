import PageCotainer from '@/components/layouts/PageContainer';

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PageCotainer className="max-w-5xl mx-auto">{children}</PageCotainer>;
}
