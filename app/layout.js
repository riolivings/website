import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsappIcon from "@/app/components/WhatsappIcon";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppinsNormal = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins-normal",
  weight: "100 200 300 400 500 600 700 800 900",
});

const mdata = {
  title: "Rio Livings | Premier House Construction in Kannur, Kerala",
  description: "Leading house construction company in Kannur, Kerala, specializing in custom homes and quality materials. Build your dream home with us!",
  keywords: "House construction, home builders, Kannur, Kerala, residential construction, architectural design, quality materials, affordable housing, custom homes, construction services",
  openGraph: {
    title: "Rio Livings | Premier House Construction in Kannur, Kerala",
    description: "Build your dream home with Rio Livings, the leading construction company in Kannur, Kerala. Expert design and quality materials.",
    url: "https://riolivings.com",  // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://riolanding.s3.ap-south-1.amazonaws.com/portfolio/anju.jpg", // Replace with your image URL
        alt: "Beautifully constructed home by Rio Livings",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{mdata.title}</title>
        <meta name="description" content={mdata.description} />
        <meta name="keywords" content={mdata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={mdata.openGraph.url} />

        {/* Icons and Theme Color */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f00000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={mdata.openGraph.title} />
        <meta property="og:description" content={mdata.openGraph.description} />
        <meta property="og:url" content={mdata.openGraph.url} />
        <meta property="og:type" content={mdata.openGraph.type} />
        <meta property="og:image" content={mdata.openGraph.images[0].url} />
        <meta property="og:image:alt" content={mdata.openGraph.images[0].alt} />
      </head>
      <body
        className={`${poppinsNormal.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsappIcon />
        <Footer />
      </body>
    </html>
  );
}
