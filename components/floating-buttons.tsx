"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { ContactModal } from "./contact-modal";

export function FloatingButtons() {
  const [modalOpen, setModalOpen] = useState(false);

  const whatsappNumber = "56937761679";
  const whatsappMessage = encodeURIComponent(
    "Hola Cesar! Vi tu portafolio y me gustaria contactarte.",
  );

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/30 hover:shadow-xl"
        >
          <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* Email modal */}
        <button
          onClick={() => setModalOpen(true)}
          aria-label="Enviar email"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/30 hover:shadow-xl"
        >
          <Mail className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
