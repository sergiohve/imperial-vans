import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Configuración de metadatos del sitio
  metadataBase: new URL('https://www.imperialvans.com.mx/'), // URL base para metadatos, importante para el SEO
  alternates: {
    canonical: './', // URL canónica para evitar contenido duplicado
    languages: {
      'es-MX': 'https://www.imperialvans.com.mx/',
    },
  },
  title: {
    default: "Imperial Vans | Conversiones de lujo personalizadas.",
    template: "%s | Imperial Vans",
  },
  description: "Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.",
  generator: "Next.js",
  applicationName: "Imperial Vans",
  keywords: [
    "Imperial Vans",
    "conversiones de lujo",
    "personalización de vans",
    "venta de camionetas de lujo",
    "blindaje de lujo",
    "camionetas grandes y lujosas",
    "vehículos de lujo",
    "conversiones de camionetas",
    "vans personalizadas",
    "suburban de lujo",
    "escalade de lujo",
    "sprinter van"
  ],
  authors: [{ name: "Goplek", url: "https://www.imperialvans.com.mx/" }], // Utiliza el autor del HTML
  creator: 'Goplek',
  publisher: 'Goplek',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/fragment/themes/imperial/favicons/favicon.ico' },
      { url: '/fragment/themes/imperial/favicons/apple-touch-icon-72x72.png', sizes: '72x72', rel: 'apple-touch-icon' },
      { url: '/fragment/themes/imperial/favicons/apple-touch-icon-114x114.png', sizes: '114x114', rel: 'apple-touch-icon' },
    ],
  },
  // Configuración de Open Graph (para redes sociales como Facebook)
  openGraph: {
    title: "Imperial Vans | Conversiones de lujo personalizadas.",
    description: "Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.",
    url: "https://www.imperialvans.com.mx/",
    siteName: "Imperial Vans",
    images: [
      {
        url: "https://www.imperialvans.com.mx/fragment/themes/imperial/design/imgs/logo-imperial.png",
        width: 800,
        height: 600,
        alt: "Logo de Imperial Vans",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Imperial Vans | Conversiones de lujo personalizadas.",
    description: "Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.",
    images: ["https://www.imperialvans.com.mx/fragment/themes/imperial/design/imgs/logo-imperial.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}