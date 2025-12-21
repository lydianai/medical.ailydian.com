import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Expert — 24/7 AI Medical Assistant | Ailydian",
  description: "AI-powered health consultation. Multi-model diagnostic support, medical analysis, emergency triage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
