import './globals.css';
import type { Metadata } from 'next';
import { inter, outfit } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookieBanner } from '@/components/cookie-banner';

export const metadata: Metadata = {
  title: 'Recruo | AI-Powered Recruitment Platform',
  description: 'Revolutionize your technical hiring process with AI-powered screening and interviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen font-sans sophisticated-dark-bg">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}