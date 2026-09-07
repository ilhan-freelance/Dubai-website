import React from 'react';

export const WhatsAppWidget: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/971500000000?text=' +
    encodeURIComponent(
      'Hello Love Details Atelier, I am interested in discussing a luxury wedding or event in Dubai.'
    );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#944C5E] text-white p-3.5 shadow-xl rounded-full hover:bg-[#7A3B4A] hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-[#D4AF37] shadow-[0_4px_20px_rgba(148,76,94,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] group"
        aria-label="Contact Love Details on WhatsApp"
      >
        {/* Glowing Gold Ping Dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37] border border-white"></span>
        </span>

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-6 h-6 fill-current text-[#FFFDF7] transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.238-1.111zm12.39-5.112c-.282-.141-1.673-.826-1.931-.92-.258-.094-.446-.141-.634.141-.188.282-.728.92-.893 1.107-.165.188-.329.212-.611.071-.282-.141-1.191-.439-2.27-1.401-.84-.749-1.407-1.674-1.572-1.956-.165-.282-.018-.435.123-.575.127-.126.282-.329.423-.494.141-.165.188-.282.282-.47.094-.188.047-.353-.024-.494-.071-.141-.634-1.528-.869-2.091-.229-.548-.462-.473-.634-.482l-.541-.01c-.188 0-.494.071-.752.353-.258.282-.987.964-.987 2.351 0 1.387 1.011 2.727 1.152 2.915.141.188 1.99 3.039 4.821 4.262.673.291 1.199.465 1.609.595.676.215 1.291.185 1.776.112.541-.082 1.673-.683 1.908-1.342.235-.659.235-1.223.165-1.342-.07-.118-.258-.188-.54-.329z"/>
        </svg>
      </a>
    </div>
  );
};
