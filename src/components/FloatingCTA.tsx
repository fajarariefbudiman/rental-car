import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export const FloatingCTA = () => (
  <Link
    to='/contact'
    aria-label='Buka halaman kontak demo'
    title='Kontak Demo'
    className='fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl transition-transform hover:scale-110'
  >
    <MessageCircle size={26} />
  </Link>
);
