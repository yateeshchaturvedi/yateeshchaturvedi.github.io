import "./globals.css";
import { site } from "../data/portfolio";
import { IBM_Plex_Mono, Space_Grotesk, Syne } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-space-grotesk" });
const syne = Syne({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-syne" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-ibm-plex-mono" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description: "DevOps engineer portfolio with experience in Azure, AWS, Kubernetes, Terraform, and CI/CD automation.",
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: "Cloud infrastructure, CI/CD automation, security, and platform engineering portfolio.",
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} portfolio`
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: "Cloud infrastructure, CI/CD automation, security, and platform engineering portfolio.",
    images: ["/og-image.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable} ${ibmPlexMono.variable}`}>{children}</body>
    </html>
  );
}
