import { useState } from "react";
import { CalendarIcon, Search, Car, MapPin, ChevronDown, Check } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { Calendar } from "../components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

const SERVICES = [
  { value: "driver", label: "Dengan Pengemudi" },
  { value: "self", label: "Lepas Kunci" },
  { value: "monthly", label: "Sewa Bulanan" },
];

const LOCATIONS = [
  { value: "jakarta", label: "Jakarta" },
  { value: "surabaya", label: "Surabaya" },
  { value: "bali", label: "Bali" },
  { value: "bandung", label: "Bandung" },
  { value: "medan", label: "Medan" },
  { value: "yogyakarta", label: "Yogyakarta" },
  { value: "semarang", label: "Semarang" },
  { value: "makassar", label: "Makassar" },
];

export const BookingWidget = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/vehicle");
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl bg-white p-4 md:p-5 shadow-xl ring-1 ring-black/5 grid gap-3 md:grid-cols-[1.1fr_1.3fr_1fr_1fr_auto] md:items-end"
    >
      {/* Jenis Layanan */}
      <FieldWrapper label="Jenis Layanan" icon={<Car size={14} />}>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="w-full border-0 p-0 h-auto shadow-none focus:ring-0 text-sm font-medium text-ink data-[placeholder]:text-muted-foreground">
            <SelectValue placeholder="Pilih layanan" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border border-border shadow-xl bg-white p-1">
            {SERVICES.map((s) => (
              <SelectItem
                key={s.value}
                value={s.value}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink cursor-pointer data-[state=checked]:text-primary data-[state=checked]:font-semibold"
              >
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      {/* Lokasi Pengambilan */}
      <FieldWrapper label="Lokasi Pengambilan" icon={<MapPin size={14} />}>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full border-0 p-0 h-auto shadow-none focus:ring-0 text-sm font-medium text-ink data-[placeholder]:text-muted-foreground">
            <SelectValue placeholder="Pilih kota / lokasi" />
          </SelectTrigger>
          <SelectContent className="rounded-xl border border-border shadow-xl bg-white p-1 max-h-64 overflow-y-auto">
            {LOCATIONS.map((l) => (
              <SelectItem
                key={l.value}
                value={l.value}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink cursor-pointer data-[state=checked]:text-primary data-[state=checked]:font-semibold"
              >
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      <DatePickerField label="Tanggal Mulai" date={start} onSelect={setStart} />
      <DatePickerField label="Tanggal Selesai" date={end} onSelect={setEnd} />

      <button
        type="submit"
        className="h-12 rounded-xl bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 md:h-[58px]"
      >
        <Search size={16} /> Cari Armada
      </button>
    </form>
  );
};

const FieldWrapper = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="block rounded-xl border border-border px-3.5 py-2.5 hover:border-primary/50 transition-colors">
    <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
      {icon} {label}
    </span>
    {children}
  </div>
);

const DatePickerField = ({
  label,
  date,
  onSelect,
}: {
  label: string;
  date?: Date;
  onSelect: (d?: Date) => void;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        type="button"
        className="block text-left w-full rounded-xl border border-border px-3.5 py-2.5 hover:border-primary/50 transition-colors"
      >
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          <CalendarIcon size={14} /> {label}
        </span>
        <span className={cn("mt-1 block text-sm font-medium", date ? "text-ink" : "text-muted-foreground")}>
          {date ? format(date, "dd MMM yyyy") : "Pilih tanggal"}
        </span>
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0" align="start">
      <Calendar
        mode="single"
        selected={date}
        onSelect={onSelect}
        initialFocus
        className={cn("p-3 pointer-events-auto")}
      />
    </PopoverContent>
  </Popover>
);