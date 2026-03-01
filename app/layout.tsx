import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.hexaloop.in";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5EBEEB",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hexaloop | Best IT Company in Indore - Web Development, Mobile Apps, SEO & AI Solutions",
    template: "%s | Hexaloop - IT Company Indore",
  },
  description:
    "Hexaloop is a leading IT company in Indore with 9+ years of experience. We offer website design, mobile app development, SEO & digital marketing, custom software, cloud solutions, agentic AI, and IT consulting for startups & enterprises. 100+ projects delivered.",
  keywords: [
    "IT company Indore",
    "best web development company in Indore",
    "website design company in Indore",
    "mobile app development company Indore",
    "SEO company in Indore",
    "digital marketing agency in Indore",
    "custom software development Indore",
    "cloud solutions provider Indore",
    "AI solutions company Indore",
    "IT consulting company in Indore",
    "web developers in Indore",
    "ecommerce website developer Indore",
    "affordable website design in Indore",
    "best digital marketing company Indore",
    "Android app developer Indore",
    "software development company in Indore",
  ],
  authors: [{ name: "Hexaloop", url: SITE_URL }],
  creator: "Hexaloop",
  publisher: "Hexaloop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Hexaloop",
    title: "Hexaloop | Best IT Company in Indore - Web Development, Mobile Apps, SEO & AI Solutions",
    description:
      "Hexaloop is a leading IT company in Indore with 9+ years of experience. Website design, mobile app development, SEO, custom software, cloud & AI solutions. 100+ projects delivered for startups & enterprises worldwide.",
    images: [
      {
        url: "/icons/logo.png",
        width: 1200,
        height: 630,
        alt: "Hexaloop - IT Company in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexaloop | Best IT Company in Indore",
    description:
      "Leading IT company in Indore. Web development, mobile apps, SEO, digital marketing, AI solutions & IT consulting. 9+ years experience, 100+ projects.",
    images: ["/icons/logo.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/icons/logo.png" },
      { url: "/icons/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Technology",
};

// JSON-LD Structured Data for Organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hexaloop",
  url: SITE_URL,
  logo: `${SITE_URL}/icons/logo.png`,
  description:
    "Hexaloop is a leading IT company in Indore with 9+ years of experience delivering website design, mobile app development, SEO & digital marketing, custom software, cloud solutions, agentic AI, and IT consulting services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "309, Bansiwala Tower, Agrasen Square",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-887-117-1445",
    contactType: "sales",
    areaServed: ["IN", "US", "GB", "AU", "CA"],
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/hexaloop",
    "https://www.instagram.com/hexaloop",
    "https://twitter.com/hexaloop",
    "https://www.linkedin.com/company/hexaloop",
    "https://www.youtube.com/@hexaloop",
  ],
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

// JSON-LD for LocalBusiness
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Hexaloop",
  image: `${SITE_URL}/icons/logo.png`,
  url: SITE_URL,
  telephone: "+91-887-117-1445",
  priceRange: "₹₹-₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "309, Bansiwala Tower, Agrasen Square",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "100",
  },
  areaServed: [
    { "@type": "City", name: "Indore" },
    { "@type": "State", name: "Madhya Pradesh" },
    { "@type": "Country", name: "India" },
  ],
};

// JSON-LD for WebSite with SearchAction
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hexaloop",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/services?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="geo.position" content="22.7196;75.8577" />
        <meta name="ICBM" content="22.7196, 75.8577" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollProgress />
      </body>
    </html>
  );
}
