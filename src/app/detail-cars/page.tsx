"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";

interface CarItem {
  id: number;
  type: string;
  url: string;
  alt: string;
}

// TODO: Define el objeto 'cars' con los datos reales de tus vehículos
const cars: { [key: string]: CarItem[] } = {
  autobus: [
    { id: 1, type: "video", url: "/videos/autobus.mp4", alt: "Video de autobús" },
    { id: 2, type: "image", url: "/images/autobus1.jpg", alt: "Imagen 1 del autobús" },
    { id: 3, type: "image", url: "/images/autobus2.jpg", alt: "Imagen 2 del autobús" },
  ],
  cadillacJetVan: [
    { id: 4, type: "video", url: "/videos/cadillac.mp4", alt: "Video de Cadillac" },
    { id: 5, type: "image", url: "/images/cadillac1.jpg", alt: "Imagen 1 del Cadillac" },
    { id: 6, type: "image", url: "/images/cadillac2.jpg", alt: "Imagen 2 del Cadillac" },
  ],
  expressPremierLimo4Seats: [
    // Add items for expressPremierLimo4Seats
  ],
  expressVan2024: [
    // Add items for expressVan2024
  ],
  expressVanPremierLimo: [
    // Add items for expressVanPremierLimo
  ],
  imperialVans: [
    // Add items for imperialVans
  ],
  Sprinter517XLJETVANLIMO: [
    // Add items for Sprinter517XLJETVANLIMO
  ],
  SprinterPremierToilet: [
    // Add items for SprinterPremierToilet
  ],
  imperialExpress: [
    // Add items for imperialExpress
  ],
};

// Componente principal que maneja la suspensión
function CarDetailsContent() {
  const searchParams = useSearchParams();
  const carId = searchParams.get("id");

  // Estados para controlar el modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mapeo para obtener los datos de forma más eficiente
  const carDataMapping: { [key: string]: string } = {
    "1": "autobus",
    "2": "cadillacJetVan",
    "3": "expressPremierLimo4Seats",
    "4": "expressVan2024",
    "5": "expressVanPremierLimo",
    "6": "imperialVans",
    "7": "Sprinter517XLJETVANLIMO",
    "8": "SprinterPremierToilet",
    "9": "imperialExpress",
  };

  const carKey = carDataMapping[carId as string];
  const carItems = carKey ? cars[carKey] : [];

  const videoItem = carItems.find((item) => item.type === "video");
  const galleryItems = carItems.filter((item) => item.type === "image");
  const galleryTitle = carKey ? `Galería de ${carKey}` : "Galería de Vehículos";

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

  return (
    <>
      <main className="mx-20 py-12 mt-40">
        <h2 className="text-3xl font-bold mb-8">{galleryTitle}</h2>
        {videoItem && (
          <div className="mb-16 rounded-lg overflow-hidden max-w-4xl mx-auto aspect-video">
            <video
              src={videoItem.url}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              controls
            />
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
                />
              </div>
            ))}
          </div>
        </section>
      </main>

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


            {/* Indicador de posición */}
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

export default function CarDetails() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <CarDetailsContent />
      </Suspense>
      <Footer />
    </>
  );
}
