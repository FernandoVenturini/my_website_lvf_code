import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '5511999999999';
  const message = 'Olá! Gostaria de saber mais sobre seus serviços de desenvolvimento web.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 p-4 rounded-full shadow-2xl
                     hover:bg-green-600 transition-all duration-300 transform
                     hover:scale-110 hover:shadow-green-500/50">
          <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
      </div>

      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap
                      shadow-xl border border-gray-700">
          <p className="text-sm font-semibold">Fale comigo no WhatsApp!</p>
        </div>
        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8
                      border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
}
