const brands = [
  { name: 'Nike', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
  { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  { name: 'Converse', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg' },
  { name: 'Vans', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Vans-logo.svg' },
  { name: 'Puma', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Puma_complete_logo.svg' },
  { name: 'New Balance', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg' },
  { name: 'Reebok', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Reebok_2019_logo.svg' },
  { name: 'Asics', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Asics_Logo.svg' },
];

const BrandsCarousel = () => {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="overflow-hidden py-12">
      <div className="container-custom mb-8">
        <h3 className="text-center text-lg font-semibold text-muted-foreground">
          Trusted to Clean All Major Brands
        </h3>
      </div>

      <div className="relative">
        <div className="animate-marquee flex w-max items-center gap-16">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-12 w-32 items-center justify-center opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
