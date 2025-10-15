import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fact-tory - 뉴스 편향성 분석 AI',
  description: 'AI가 뉴스의 편향성을 분석하고 균형 잡힌 관점을 제공합니다',
  icons: {
    icon: '/img/web_favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
