import { X } from "lucide-react";
import { Vehicle, WHATSAPP_URL } from "../data/vehicles";
import { useEffect } from "react";

interface Props {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleModal = ({ vehicle, onClose }: Props) => {
  useEffect(() => {
    if (!vehicle) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const rows = [
    { duration: "24 Jam", price: vehicle.price24h },
    { duration: "Mingguan", price: "Discount Up To 16% Hub.Admin" },
    { duration: "Bulanan", price: "Discount Up To 50% Hub.Admin" },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-lg font-bold uppercase text-ink pr-6">{vehicle.name}</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-muted" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="my-5 flex items-center justify-center">
          <img src={vehicle.image} alt={vehicle.name} className="max-h-48 object-contain" />
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="py-2.5 px-4 text-left font-semibold">Duration</th>
                <th className="py-2.5 px-4 text-left font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.duration} className="border-t border-border">
                  <td className="py-3 px-4 font-medium">{r.duration}</td>
                  <td className="py-3 px-4">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      {r.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 block w-full rounded-full bg-primary py-3 text-center text-sm font-medium lowercase text-primary-foreground hover:bg-primary-dark transition"
        >
          booking sekarang
        </a>
      </div>
    </div>
  );
};
