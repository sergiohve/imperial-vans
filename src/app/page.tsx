"use client";
import { Suspense } from 'react';
import Image from "next/image";
import { ContactForm } from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonWhatsApp from "./components/ButtonWhatsApp";

function HomeContent() {
  return (
       <div className="font-sans bg-white text-gray-900">
      <Header />

      <section className="relative pt-25">
        <div className="w-full h-96 md:h-screen overflow-hidden bg-gray-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          >
            <source
              src="/Sprinter Premier Toilet/Sprinter 517 Jet Van Limo Merida.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Redefine tu experiencia de viaje
            </h1>
            <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl">
              Tu oficina de ultra lujo o tu espacio de relajación personal.
              Experimenta el viaje, no solo el destino.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto">
        <section className="flex flex-col md:flex-row items-center gap-8 h-68 justify-center mt-30">
          <div className="flex-1 max-w-xl">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
              Somos expertos en crear jets sobre ruedas
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Más que un simple vehículo, ofrecemos una experiencia curada.
              Nuestros clientes de alto perfil, desde turistas internacionales
              hasta ejecutivos corporativos, eligen Imperial Rental Vans por su
              combinación única de privacidad, tecnología y lujo inigualable.
              Cada detalle ha sido diseñado para tu máximo confort y
              productividad en el camino.
            </p>
          </div>

          <div className="items-center">
            <Image
              src="/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-23.jpg"
              alt="Imperial Vans"
              width={500}
              height={333}
              className="h-100 w-auto rounded"
              priority
            />
          </div>
        </section>
      </main>

      <section className=" md:mt-32 sm:mt-60 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 z-0 backdrop-blur-sm">
          <Image
            src="/Express Premier Limo 4 seats/Imperial (R6)-2.jpg"
            alt="Fondo de lujo"
            fill
            sizes="100vw"
            quality={100}
            className="backdrop-blur-sm"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            CONVERSIONES
          </h2>

          <div>
            <div className="bg-opacity-20 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center justify-center h-64">
              <Image
                src="/icon-conversiones-de-lujo.svg"
                alt="Conversiones de lujo"
                width={80}
                height={80}
                className="h-20 w-auto rounded"
                priority
              />
              <h3 className="text-2xl font-bold text-white mb-4">
                Conversiones de lujo
              </h3>
              <a
                href="/conversiones-lujo"
                className="mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-opacity-90 transition"
              >
                VER MÁS
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              UNA EXPERIENCIA INOLVIDABLE
            </h2>
            <p className="text-xl text-gray-700">
              La experiencia de viaje que ofrece Imperial Vans es funcional,
              segura y elegante, es por eso que cada unidad se siente como una
              escapada.
            </p>
          </div>

          <div className="flex flex-col items-center text-left">
            <div className="space-y-6 max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800">
                Están equipadas con:
              </h3>
              <ul className="space-y-4">
                {[
                  "Wi-Fi (internet)",
                  "Apple TV",
                  "Netflix, Disney+, Amazon",
                  "Consola de videojuegos",
                  "Pantallas 4K",
                  "Sillones con sistema de masaje",
                  "Cámaras de seguridad",
                  "Y mucho más",
                ].map((item, index) => (
                  <li key={index} className="flex justify-left items-center">
                    <svg
                      className="h-6 w-6 text-blue-600 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mt-16">
            <p className="text-xl text-gray-700 mb-8">
              Que harán que te olvides del tráfico y solo disfrutes del camino
              en tu propia conversión de lujo.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMPERIAL (23 julio) Vers2/IMPERIAL (23 julio) Vers2-2.jpg"
            alt="Fondo de contacto"
            fill
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-yellow-800 opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Queremos ayudarte a obtener el auto de tus sueños
            </h2>
            <p className="text-xl text-gray-300">
              Sabemos la importancia de la discreción: envíanos un mensaje y con
              gusto te atenderemos de inmediato.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <ContactForm />

            <div className="w-full lg:w-1/2 flex flex-col justify-center text-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Teléfonos
                </h3>
                <p className="text-lg mb-2">
                  <span className="font-medium">Ventas:</span> (222) 590 37 74 |
                  (55) 6697 9905
                </p>
                <p className="text-lg">
                  <span className="font-medium">Planta:</span> (222) 210 37 06 |
                  (222) 431 35 28
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Horario
                </h3>
                <p className="text-lg mb-2">
                  Lunes a Viernes de 09:00 a 19:00 h
                </p>
                <p className="text-lg">Sábado de 09:00 a 13:00 h</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
                  Dirección
                </h3>
                <p className="text-lg mb-2">
                  Camino Real a Santa Clara Ocoyucan n.º 50
                </p>
                <p className="text-lg mb-2">
                  Bodega 2 col. Emiliano Zapata, San Andrés Cholula, Pue.
                </p>
                <p className="text-lg">C.P. 72810</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ButtonWhatsApp texto="*Hola Imperial Vans, me gustaría más información sobre sus servicios de viajes de lujo.*" />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}