import { WHATSAPP_URL } from "../data/vehicles";

export const FloatingCTA = () => (
  <div className="fixed bottom-6 right-6 z-40 group">
    <span className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
      Chat Kami
    </span>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp"
      className="flex h-14 w-14 items-center justify-center rounded-full shadow-2xl hover:scale-110 transition-transform"
    >
      <img
        src="/img/chatus_icon.png"
        alt="Chat Kami"
        className="h-14 w-14 object-contain"
      />
    </a>
  </div>
);