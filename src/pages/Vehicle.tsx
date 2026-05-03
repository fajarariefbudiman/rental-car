import { Layout } from "../components/Layout";
import { VehicleGrid } from "../components/VehicleGrid";
import xpander from "../assets/car-xpander.png";

const Vehicle = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground overflow-hidden">
        <div className="container-px mx-auto max-w-7xl flex items-end pt-10 md:pt-14 min-h-[220px] md:min-h-[260px]">

          {/* Text */}
          <div className="shrink-0 w-full md:w-[380px] pb-10 md:pb-14">
            <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight">VEHICLE</h1>
            <p className="mt-3 italic text-white/90 text-xs md:text-base leading-relaxed">
              Pergi nyaman dan aman tanpa kendala digiatgroup selalu nemenin!
            </p>
            <p className="mt-2 font-semibold text-sm md:text-base">#TemanNyamanBepergianmu</p>
          </div>

          {/* 3 cars rapet ke kanan */}
          <div className="flex-1 hidden md:flex items-end justify-end">
            <img src={xpander} alt="" className="h-[120px] md:h-[150px] w-auto object-contain drop-shadow-xl -mr-8 md:-mr-28 z-0 brightness-75" />
            <img src={xpander} alt="" className="h-[120px] md:h-[150px] w-auto object-contain drop-shadow-2xl -mr-8 md:-mr-32" />
            <img src={xpander} alt="" className="h-[120px] md:h-[150px] w-auto object-contain drop-shadow-xl z-11 brightness-75" />
          </div>

        </div>
      </section>

      <VehicleGrid />
    </Layout>
  );
};

export default Vehicle;