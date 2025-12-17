"use client"

import Image from "next/image"

// Sample client logos - replace with actual logos when provided
const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: "/company-1.webp",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "/company-02.webp",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "/company-04.webp",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "/company-05.webp",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "/company-06.webp",
  },
  {
    id: 6,
    name: "Client 6",
    logo: "/company-07.webp",
  },
  {
    id: 7,
    name: "Client 7",
    logo: "/company-08.webp",
  },
  {
    id: 8,
    name: "Client 8",
    logo: "/company-1.webp",
  },
  {
    id: 9,
    name: "Client 9",
    logo: "/company-02.webp",
  },
  {
    id: 10,
    name: "Client 10",
    logo: "/company-04.webp",
  },
]

export function ClientsSection() {
  // Duplicate clients array for seamless loop
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Mobile and Tablet Scrolling View */}
      <div className="lg:hidden relative">
        <div className="flex items-center gap-6 md:gap-8 animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center justify-center w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 rounded-lg p-2 bg-transparent"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Scrolling View */}
      <div className="hidden lg:block relative">
        <div className="flex items-center gap-8 md:gap-12 animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center justify-center w-auto flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 hover:grayscale-0 rounded-lg p-2 bg-transparent"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

