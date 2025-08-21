"use client";
import { Suspense } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ConversionesLujoContent() {
  const CategoriaBackgrounds = {
    EXPRESSVANXLEDICIONJETVANLIMO:
      "/EXPRESS VAN XL EDICION JET VAN LIMO/Imperial (25 de Junio)-26.jpg",
    CadillacEscaladeJetVan: "/Cadillac Escalade Jet Van/Cadillac-2.jpg",
    ExpressPremierLimo4Seats:
      "/Express Premier Limo 4 seats/Imperial (GoPro)-3.jpg",
    EXPRESSVANXLEDICIONPREMIERLIMO:
      "/EXPRESS VAN XL EDICION PREMIER LIMO/Imperial Vans (Color 1)-3.jpg",
    AUTOBUSES: "/Autobus Imperial Vans/IMPERIAL (Camion Volvo).jpg",
    ImperialExpress:
      "/IMPERIAL 19 julio (Express)/IMPERIAL 19 julio (Express).jpg",
    ImperialVan: "/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-2.jpg",
    Sprinter517XLJetVan:
      "/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.21 (1).jpeg",
    SprinterPremierToilet:
      "/Sprinter Premier Toilet/WhatsApp Image 2025-04-15 at 10.13.22 AM.jpeg",
  };
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <section className="relative py-20 bg-gray-900 overflow-hidden mt-35">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Sprinter 517 XL Jet Van/WhatsApp Image 2023-03-02 at 18.42.25 (11).jpeg"
            alt="Interior de lujo"
            fill
            sizes="100vw"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-90"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-justify mb-12 mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4 mx-auto">
              CONVERSIONES DE LUJO
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Creemos que debes ser transportado con la máxima comodidad y
              sentirte en un viaje de primera clase. Es por eso que nuestras
              conversiones son hechas con la más alta calidad, tecnología de
              punta, seguridad y elegancia sin igual además de ofrecer distintas
              conversiones que se adaptan a tus necesidades.
            </p>
          </div>
          <div className="flex flex-wrap md:flex-row gap-8 justify-center items-stretch mt-12 min-h-[400px]">
            <a href="/detail-cars?id=1" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["AUTOBUSES"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">AUTOBUSES</h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=2" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["CadillacEscaladeJetVan"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    Cadillac Escalade Jet Van
                  </h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=3" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["ExpressPremierLimo4Seats"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    Express Premier Limo 4 Seats
                  </h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=4" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["EXPRESSVANXLEDICIONJETVANLIMO"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    Express Van XL Edicion Jet Van Limo
                  </h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=5" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["EXPRESSVANXLEDICIONPREMIERLIMO"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    EXPRESS VAN XL EDICION PREMIER LIMO
                  </h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=6" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["ImperialVan"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">Imperial Van</h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=9" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["ImperialExpress"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">Imperial Express</h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=7" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["Sprinter517XLJetVan"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    Sprinter 517 XL Jet Van
                  </h4>
                </div>
              </div>
            </a>

            <a href="/detail-cars?id=8" className="w-full md:w-1/4">
              <div
                className={`relative p-6 rounded-lg text-white h-full backdrop-filter backdrop-blur-sm bg-cover bg-center flex items-center justify-center group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
                style={{
                  backgroundImage: `url('${CategoriaBackgrounds["SprinterPremierToilet"]}')`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 rounded-lg transition-all duration-300"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl font-semibold">
                    Sprinter Premier Toilet
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default function ConversionesLujo() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <ConversionesLujoContent />
    </Suspense>
  );
}
