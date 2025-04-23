import PageCotainer from '@/components/layouts/PageContainer';

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageCotainer className="max-w-3xl mx-auto">{children}</PageCotainer>;
}
