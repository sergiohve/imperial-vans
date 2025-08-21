"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";

interface CarItem {
  id: number;
  type: string;
  url: string;
  alt: string;
}

export const dynamic = 'force-dynamic';

function DetailCarsContent() {
  const searchParams = useSearchParams();
  const [carId, setCarId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Estados para controlar el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setCarId(searchParams?.get("id"));
  }, [searchParams]);

const cars = {
    autobus: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/k3ogP8r1weY?si=BWW04yGM7ARqKW7T",
        alt: "JET BUS",
      },
      {
        id: 26,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo).jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 2,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-2.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 3,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-3.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 4,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-4.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 5,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-5.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 6,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-6.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 7,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-7.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 8,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-8.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 9,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-9.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 10,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-10.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 11,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-11.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 12,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-12.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 13,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-13.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 14,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-14.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 15,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-15.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 16,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-16.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 17,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-17.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 18,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-18.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 19,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-19.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 20,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-20.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 21,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-21.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 22,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-22.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 23,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-23.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 24,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-24.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 25,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-25.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 27,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-26.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 28,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-27.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 29,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-28.jpg",
        alt: "Autobus Imperial",
      },
      {
        id: 30,
        type: "image",
        url: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo)-29.jpg",
        alt: "Autobus Imperial",
      },
    ],
    cadillacJetVan: [
      {
        id: 1,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac GoPro-2.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 2,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac GoPro-3.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 3,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac GoPro.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 4,
        type: "video",
        url: "https://www.youtube.com/embed/-T6F3jVJ1Hw",
        alt: "CADILLAC JET VAN",
      },
      {
        id: 5,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-2.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 6,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-3.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 7,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-4.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 8,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-5.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 9,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-6.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 10,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-7.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 11,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-8.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 12,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-9.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 13,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-10.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 14,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-11.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 15,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-12.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 16,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-13.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 17,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-14.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 18,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-15.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 19,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-16.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 20,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-17.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 21,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-18.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 22,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-19.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 23,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-20.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 24,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-21.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 25,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-22.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 26,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-23.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 27,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-24.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 28,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-25.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 29,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-26.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 30,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-27.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 31,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-28.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 32,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-29.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 33,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-30.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 34,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-31.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 35,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-32.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 36,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-33.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 37,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-34.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 38,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-35.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 39,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-36.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
      {
        id: 40,
        type: "image",
        url: "/Cadillac Escalade Jet Van/Cadillac-37.jpg",
        alt: "Cadillac Escalade Jet Van",
      },
    ],
    expressPremierLimo4Seats: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/dfF2Gt7H-2Q",
        alt: "EXPRESS PREMIER LIMO 4 VIP",
      },
      {
        id: 2,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (GoPro)-2.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 3,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (GoPro)-3.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 4,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (GoPro)-4.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 5,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (GoPro)-5.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 6,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (GoPro).jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 7,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-2.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 8,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-3.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 9,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-4.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 10,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-5.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 11,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-6.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 12,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-7.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 13,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-8.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 14,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-9.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 15,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-10.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 16,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-11.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 17,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-12.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 18,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-13.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 19,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-15.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 20,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-16.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 21,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-17.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 22,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-18.jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 23,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6).jpg",
        alt: "Express Premier Limo 4 seats",
      },
      {
        id: 24,
        type: "image",
        url: "/Express Premier Limo 4 seats/Imperial (R6)-14.jpg",
        alt: "Express Premier Limo 4 seats",
      },
    ],
    expressVan2024: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/PlmuGsEtiQ8",
        alt: "EXPRESS VAN JET VAN LIMO",
      },
      {
        id: 2,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-26.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 3,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-27.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 4,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-28.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 5,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-29.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 6,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-30.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 7,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-31.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 8,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-32.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 9,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-33.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 10,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-34.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 11,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-35.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 12,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-36.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 13,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-37.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 14,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-38.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 15,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-39.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 16,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-40.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 17,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-41.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 18,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-42.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 19,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-43.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 20,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-44.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 21,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-45.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 22,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-46.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
      {
        id: 23,
        type: "image",
        url: "/Express Van XL Edicion Jet Van Limo/Imperial (25 de Junio)-47.jpg",
        alt: "Express Van XL Edicion Jet Van Limo",
      },
    ],
    expressVanPremierLimo: [
      {
        id: 1,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 1)-5.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 2,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 1)-6.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 3,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 1)-7.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 4,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 2)-4.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 5,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 2)-5.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 6,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 2)-7.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 7,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 2)-9.jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 8,
        type: "image",
        url: "/Express Van XL Edicion Premier Limo/Imperial Vans (Color 2).jpg",
        alt: "Express Van XL Edicion Premier Limo",
      },
    ],
    imperialVans: [
      {
        id: 1,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-2.jpg",
        alt: "Imperial Van",
      },
      {
        id: 2,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-3.jpg",
        alt: "Imperial Van",
      },
      {
        id: 3,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-4.jpg",
        alt: "Imperial Van",
      },
      {
        id: 4,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-5.jpg",
        alt: "Imperial Van",
      },
      {
        id: 5,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-6.jpg",
        alt: "Imperial Van",
      },
      {
        id: 6,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-7.jpg",
        alt: "Imperial Van",
      },
      {
        id: 7,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-8.jpg",
        alt: "Imperial Van",
      },
      {
        id: 8,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-9.jpg",
        alt: "Imperial Van",
      },
      {
        id: 9,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-10.jpg",
        alt: "Imperial Van",
      },
      {
        id: 10,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-11.jpg",
        alt: "Imperial Van",
      },
      {
        id: 11,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-12.jpg",
        alt: "Imperial Van",
      },
      {
        id: 12,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-13.jpg",
        alt: "Imperial Van",
      },
      {
        id: 13,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-14.jpg",
        alt: "Imperial Van",
      },
      {
        id: 14,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-15.jpg",
        alt: "Imperial Van",
      },
      {
        id: 15,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-16.jpg",
        alt: "Imperial Van",
      },
      {
        id: 16,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-17.jpg",
        alt: "Imperial Van",
      },
      {
        id: 17,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-18.jpg",
        alt: "Imperial Van",
      },
      {
        id: 18,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-19.jpg",
        alt: "Imperial Van",
      },
      {
        id: 19,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-20.jpg",
        alt: "Imperial Van",
      },
      {
        id: 20,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-21.jpg",
        alt: "Imperial Van",
      },
      {
        id: 21,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-22.jpg",
        alt: "Imperial Van",
      },
      {
        id: 22,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-23.jpg",
        alt: "Imperial Van",
      },
      {
        id: 23,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-24.jpg",
        alt: "Imperial Van",
      },
      {
        id: 24,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-25.jpg",
        alt: "Imperial Van",
      },
      {
        id: 25,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-26.jpg",
        alt: "Imperial Van",
      },
      {
        id: 26,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-27.jpg",
        alt: "Imperial Van",
      },
      {
        id: 27,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-28.jpg",
        alt: "Imperial Van",
      },
      {
        id: 28,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-29.jpg",
        alt: "Imperial Van",
      },
      {
        id: 29,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-30.jpg",
        alt: "Imperial Van",
      },
      {
        id: 30,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2.jpg",
        alt: "Imperial Van",
      },
      {
        id: 31,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio)-31.jpg",
        alt: "Imperial Van",
      },
      {
        id: 32,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio)-32.jpg",
        alt: "Imperial Van",
      },
      {
        id: 33,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio)-33.jpg",
        alt: "Imperial Van",
      },
      {
        id: 34,
        type: "image",
        url: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio)-34.jpg",
        alt: "Imperial Van",
      },
      {
        id: 35,
        type: "video",
        url: "https://www.youtube.com/embed/agOr_uq3-Xw",
        alt: "SPRINTER JET VAN",
      },
    ],
    imperialExpress: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/hinbhO91vYc",
        alt: "EXPRESS VAN PREMIER",
      },
      {
        id: 2,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-2.jpg",
        alt: "IMPERIAL 19 julio (Express)",
      },
      {
        id: 3,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-3.jpg",
        alt: "IMPERIAL 19 julio (Express)",
      },
      {
        id: 4,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-4.jpg",
        alt: "imperialExpress",
      },
      {
        id: 5,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-5.jpg",
        alt: "imperialExpress",
      },
      {
        id: 6,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-6.jpg",
        alt: "imperialExpress",
      },
      {
        id: 7,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-7.jpg",
        alt: "imperialExpress",
      },
      {
        id: 8,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-8.jpg",
        alt: "imperialExpress",
      },
      {
        id: 9,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-9.jpg",
        alt: "imperialExpress",
      },
      {
        id: 10,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-10.jpg",
        alt: "imperialExpress",
      },
      {
        id: 11,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-11.jpg",
        alt: "imperialExpress",
      },
      {
        id: 12,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-12.jpg",
        alt: "imperialExpress",
      },
      {
        id: 13,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-13.jpg",
        alt: "imperialExpress",
      },
      {
        id: 14,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-14.jpg",
        alt: "imperialExpress",
      },
      {
        id: 15,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-15.jpg",
        alt: "imperialExpress",
      },
      {
        id: 16,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-16.jpg",
        alt: "imperialExpress",
      },
      {
        id: 17,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-17.jpg",
        alt: "imperialExpress",
      },
      {
        id: 18,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-18.jpg",
        alt: "imperialExpress",
      },
      {
        id: 19,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-19.jpg",
        alt: "imperialExpress",
      },
      {
        id: 20,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-20.jpg",
        alt: "imperialExpress",
      },
      {
        id: 21,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-21.jpg",
        alt: "imperialExpress",
      },
      {
        id: 22,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-22.jpg",
        alt: "imperialExpress",
      },
      {
        id: 23,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-23.jpg",
        alt: "imperialExpress",
      },
      {
        id: 24,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-24.jpg",
        alt: "imperialExpress",
      },
      {
        id: 25,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-25.jpg",
        alt: "imperialExpress",
      },
      {
        id: 26,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-26.jpg",
        alt: "imperialExpress",
      },
      {
        id: 27,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-27.jpg",
        alt: "imperialExpress",
      },
      {
        id: 28,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express)-28.jpg",
        alt: "imperialExpress",
      },
      {
        id: 29,
        type: "image",
        url: "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express).jpg",
        alt: "imperialExpress",
      },
    ],
    Sprinter517XLJETVANLIMO: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/27XUNRU01BE",
        alt: "SPRINTER JET VAN LIMO",
      },
      {
        id: 2,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.20 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 3,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.20 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 4,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.20 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 5,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.20.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 6,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 7,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 8,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 9,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (4).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 10,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (5).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 11,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 12,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 13,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 14,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 15,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (4).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 16,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (5).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 17,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (6).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 18,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22 (7).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 19,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.22.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 20,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.23.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 21,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.24 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 22,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.24 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 23,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.24 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 24,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.24.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 25,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 26,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 27,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 28,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (4).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 29,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (5).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 30,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (6).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 31,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (7).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 32,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (8).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 33,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (9).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 34,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (10).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 53,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (11).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 35,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (12).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 36,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (13).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 37,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (14).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 38,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (15).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 39,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (16).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 40,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (17).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 41,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (18).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 42,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 43,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (1).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 44,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (2).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 45,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (3).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 46,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (4).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 47,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (5).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 48,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (6).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 49,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (7).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 50,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (8).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 51,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26 (9).jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
      {
        id: 52,
        type: "image",
        url: "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.26.jpeg",
        alt: "Express Van XL Edicion Premier Limo",
      },
    ],
    SprinterPremierToilet: [
      {
        id: 1,
        type: "video",
        url: "https://www.youtube.com/embed/tUzLS_yC-iw",
        alt: "SPRINTER PREMIER TOILET",
      },
      {
        id: 2,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.21 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 3,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.22 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 4,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.23 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 5,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.24 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 6,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.24 AM (2).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 7,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.24 AM (3).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 8,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.24 AM (4).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 9,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.24 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 10,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.25 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 11,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.39 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 12,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.40 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 13,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.41 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 14,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.41 AM (2).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 15,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.41 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 16,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.42 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 17,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.42 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 18,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.43 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 19,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.57 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 20,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.57 AM (2).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 21,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.57 AM (3).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 22,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.57 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 23,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.58 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 24,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.59 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 25,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.59 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 26,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.01 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 27,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.11 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 28,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.12 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 29,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.13 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 30,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.13 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 31,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.14 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 32,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.15 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 33,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.16 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 34,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.16 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 35,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.30 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 36,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.32 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 37,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.32 AM (2).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 38,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.32 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 39,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.34 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 40,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.34 AM (2).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 41,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.34 AM (3).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 42,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.34 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 43,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.45 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 44,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.45 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 45,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.46 AM (1).jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 46,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.46 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
      {
        id: 47,
        type: "image",
        url: "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.14.47 AM.jpeg",
        alt: "Sprinter Premier Toilet",
      },
    ],
  };

  let videoItem: CarItem | undefined | null = null;
  let galleryItems: CarItem[] = [];
  let galleryTitle = "";

  if (carId === "1") {
    videoItem = cars.autobus.find((item) => item.type === "video");
    galleryItems = cars.autobus.filter((item) => item.type === "image");
    galleryTitle = "GALERÍA DE JET BUS";
  } else if (carId === "2") {
    videoItem = cars.cadillacJetVan.find((item) => item.type === "video");
    galleryItems = cars.cadillacJetVan.filter((item) => item.type === "image");
    galleryTitle = "GALERÍA DE CADILLAC JET VAN";
  } else if (carId === "3") {
    videoItem = cars.expressPremierLimo4Seats.find(
      (item) => item.type === "video"
    );
    galleryItems = cars.expressPremierLimo4Seats.filter(
      (item) => item.type === "image"
    );
    galleryTitle = "GALERÍA DE EXPRESS PREMIER LIMO 4 VIP";
  } else if (carId === "4") {
    videoItem = cars.expressVan2024.find((item) => item.type === "video");
    galleryItems = cars.expressVan2024.filter((item) => item.type === "image");
    galleryTitle = "GALERÍA DE EXPRESS VAN JET VAN LIMO";
  } else if (carId === "5") {
    videoItem = cars.expressVanPremierLimo.find(
      (item) => item.type === "video"
    );
    galleryItems = cars.expressVanPremierLimo.filter(
      (item) => item.type === "image"
    );
    galleryTitle = "GALERÍA DEEXPRESS VAN PREMIER LIMO";
  } else if (carId === "6") {
    videoItem = cars.imperialVans.find((item) => item.type === "video");
    galleryItems = cars.imperialVans.filter((item) => item.type === "image");
    galleryTitle = "GALERÍA DE SPRINTER JET VAN";
  } else if (carId === "7") {
    videoItem = cars.Sprinter517XLJETVANLIMO.find(
      (item) => item.type === "video"
    );
    galleryItems = cars.Sprinter517XLJETVANLIMO.filter(
      (item) => item.type === "image"
    );
    galleryTitle = "GALERÍA DE SPRINTER JET VAN LIMO";
  } else if (carId === "8") {
    videoItem = cars.SprinterPremierToilet.find(
      (item) => item.type === "video"
    );
    galleryItems = cars.SprinterPremierToilet.filter(
      (item) => item.type === "image"
    );
    galleryTitle = "GALERÍA DE SPRINTER PREMIER TOILET";
  } else if (carId === "9") {
    videoItem = cars.imperialExpress.find(
      (item) => item.type === "video"
    );
    galleryItems = cars.imperialExpress.filter(
      (item) => item.type === "image"
    );
    galleryTitle = "GALERÍA DE EXPRESS VAN PREMIER";
  }
  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage("");
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex].url);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[newIndex].url);
    setCurrentIndex(newIndex);
  };

  if (!isClient || !carId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-20 py-12 mt-40">
        <h2 className="text-3xl font-bold mb-8">{galleryTitle}</h2>
        
        {videoItem && (
          <div className="mb-16 rounded-lg overflow-hidden max-w-4xl mx-auto aspect-video">
            <iframe className="w-full h-full" src={videoItem.url} title={videoItem.alt} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        )}

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleImageClick(item.url, index)}
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-50"
            >
              &times;
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-50"
            >
              &larr;
            </button>
            
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Imagen ampliada"
                width={1000}
                height={700}
                className="max-w-full max-h-screen object-contain rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 top-[50%] transform -translate-y-1/2 text-white text-3xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-50"
            >
              &rarr;
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 bg-opacity-70 px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {galleryItems.length}
            </div>
          </div>
        </div>
      )}
      
      <ButtonWhatsApp
        texto={`*Hola Imperial Vans, me gustaría más información sobre sus servicios de viajes de lujo con ${galleryTitle}*`}
      />
    </>
  );
}

export default function DetailCars() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <DetailCarsContent />
    </Suspense>
  );
}