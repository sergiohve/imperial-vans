import { Metadata } from 'next';

import { Suspense } from 'react';
import ConversionesLujoClient from './ConversionesLujoClient';


export const metadata: Metadata = {
    title: 'Conversiones de Lujo | Imperial Vans',
    description: 'Descubre nuestros servicios de conversiones de lujo. Personalizamos tu vehículo con la más alta tecnología y diseño.',
    keywords: ['conversiones de lujo', 'Imperial Vans', 'camionetas de lujo', 'vehículos personalizados', 'diseño interior'],
    openGraph: {
        title: 'Conversiones de Lujo | Imperial Vans',
        description: 'Descubre nuestros servicios de conversiones de lujo. Personalizamos tu vehículo con la más alta tecnología y diseño.',
        url: 'https://www.imperialvans.com.mx/conversiones-lujo',
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