import { Metadata } from 'next';
import { Suspense } from 'react';
import ConversionesLujoClient from './ConversionesLujoClient';

export const metadata: Metadata = {
    // Basic Meta Tags
    title: {
        default: 'Conversiones de Lujo | Imperial Vans',
        template: '%s | Imperial Vans',
    },
    description: 'Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.',

    // Canonical and Language Alternates
    alternates: {
        canonical: 'https://www.imperialvans.com.mx/conversiones-de-lujo',
        languages: {
            'es-MX': 'https://www.imperialvans.com.mx/conversiones-de-lujo',
        },
    },

    // Keywords
    keywords: [
        'conversiones de lujo', 'Imperial Vans', 'camionetas de lujo', 'vehículos personalizados',
        'diseño interior', 'suburban de lujo', 'escalade de lujo', 'sprinter van',
        'camionetas tuneadas', 'coches blindados', 'venta de camionetas de lujo',
    ],

    // Authorship and Generator
    authors: [{ name: 'Goplek' }],
    creator: 'Goplek',
    applicationName: 'Imperial Vans',
    generator: 'Next.js',

    // Robots and Caching
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    
    // Favicons
    icons: {
        icon: '/fragment/themes/imperial/favicons/favicon.ico',
        apple: [
            { url: '/fragment/themes/imperial/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
            { url: '/fragment/themes/imperial/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
        ],
    },

    // Open Graph (for social media)
    openGraph: {
        title: 'Conversiones de Lujo | Imperial Vans',
        description: 'Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.',
        url: 'https://www.imperialvans.com.mx/conversiones-de-lujo',
        siteName: 'Imperial Vans',
        images: [
            {
                url: 'https://www.imperialvans.com.mx/fragment/themes/imperial/design/imgs/logo-imperial.png',
                alt: 'Logo de Imperial Vans',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },


    twitter: {
        card: 'summary',
        title: 'Conversiones de Lujo | Imperial Vans',
        description: 'Especialistas en conversiones de unidades de lujo, incorporando tecnología, calidad y diseño con resultados únicos.',
        images: ['https://www.imperialvans.com.mx/fragment/themes/imperial/design/imgs/logo-imperial.png'],
    },
};

export default function ConversionesLujoPage() {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        }>
            <ConversionesLujoClient />
        </Suspense>
    );
}