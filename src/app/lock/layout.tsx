import PageCotainer from '@/components/layouts/PageContainer';

export default function LockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageCotainer className="max-w-4xl mx-auto">{children}</PageCotainer>;
}
