import React from "react";
import WhatsAppLogo from '../../assets/pngwing.com.png' // Ubah path sesuai dengan lokasi gambar

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/your-phonenumber" // Ganti dengan nomor WhatsApp Anda
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-50 w-12 h-12 bg-green-500 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <img src={WhatsAppLogo} alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}

export default WhatsappButton;