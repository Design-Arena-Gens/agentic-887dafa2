import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-887dafa2.vercel.app"),
  title: "All Results ? 07/11/2025",
  description: "Day and Night games results for 07/11/2025 (Friday)",
  openGraph: {
    title: "All Results ? 07/11/2025",
    description: "Day and Night games results for 07/11/2025 (Friday)",
    url: "/",
    siteName: "All Results",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <div style={{ display: "grid", gap: 6 }}>
              <div className="badge" aria-label="All results">
                <span>?</span>
                <span>All Results</span>
              </div>
              <div className="subtitle">07/11/2025 ? Friday</div>
            </div>
            <div className="badge" aria-label="Infinity">
              ????????????
            </div>
          </header>
          {children}
          <footer className="footer">? 2025 All Results</footer>
        </div>
      </body>
    </html>
  );
}
