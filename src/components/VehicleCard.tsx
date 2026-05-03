import { Vehicle, WHATSAPP_URL } from "../data/vehicles";

interface Props {
  vehicle: Vehicle;
  onClick: () => void;
}

export const VehicleCard = ({ vehicle, onClick }: Props) => {
  const cat = vehicle.categories.find((c) => c !== "BEST CHOICE") ?? vehicle.categories[0];
  return (
    <article className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 overflow-hidden animate-fade-in">
      <div className="bg-[#F8F8F8] p-4 flex items-center justify-center h-[180px]">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="inline-flex w-fit items-center rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {cat}
        </span>
        <h3 className="mt-2 text-base font-semibold text-ink leading-snug">{vehicle.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">
          Mulai Rp {vehicle.price24h} <span className="font-normal text-muted-foreground">/ hari</span>
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={onClick}
            className="rounded-lg border border-primary px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            Detail
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
          >
            Booking
          </a>
        </div>
      </div>
    </article>
  );
};
