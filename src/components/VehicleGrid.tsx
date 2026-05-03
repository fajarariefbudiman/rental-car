import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, Category, VEHICLES, Vehicle } from "../data/vehicles";
import { VehicleCard } from "./VehicleCard";
import { VehicleModal } from "./VehicleModal";
import { useSearchParams } from "react-router-dom";

export const VehicleGrid = () => {
  const [params, setParams] = useSearchParams();
  const initial = (params.get("cat") as Category) || "BEST CHOICE";
  const [active, setActive] = useState<Category>(CATEGORIES.includes(initial) ? initial : "BEST CHOICE");
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const filtered = useMemo(() => VEHICLES.filter((v) => v.categories.includes(active)), [active]);

  const handleCategory = (c: Category) => {
    if (c === active) return;
    setLoading(true);
    setActive(c);
    setParams((prev) => { prev.set("cat", c); return prev; }, { replace: true });
    setTimeout(() => setLoading(false), 350);
  };

  useEffect(() => {
    const el = tabsRef.current?.querySelector<HTMLButtonElement>(`[data-cat="${active}"]`);
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active]);

  return (
    <>
      <div className="bg-black sticky top-20 z-30">
        <div className="container-px mx-auto max-w-7xl">
          <div ref={tabsRef} className="relative flex gap-7 overflow-x-auto no-scrollbar py-4">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                data-cat={c}
                onClick={() => handleCategory(c)}
                className={`shrink-0 text-xs md:text-sm font-semibold uppercase tracking-wide transition-colors pb-1 ${
                  active === c ? "text-primary" : "text-white/85 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
            <span
              className="absolute bottom-3 h-0.5 bg-primary transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          </div>
        </div>
      </div>

      <section className="container-px mx-auto max-w-7xl py-14 md:py-20">
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
                <div className="h-[180px] bg-muted animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="h-3 w-16 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-9 rounded-lg bg-muted animate-pulse" />
                    <div className="h-9 rounded-lg bg-muted animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">Belum ada kendaraan untuk kategori ini.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <VehicleCard key={v.id} vehicle={v} onClick={() => setSelected(v)} />
            ))}
          </div>
        )}
      </section>

      <VehicleModal vehicle={selected} onClose={() => setSelected(null)} />
    </>
  );
};
