import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to Keep Your White Sneakers Clean',
    excerpt: 'Learn the best techniques to maintain your white sneakers and keep them looking fresh.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    category: 'Tips',
    date: 'Jan 10, 2024',
  },
  {
    id: 2,
    title: 'The Complete Guide to Leather Shoe Care',
    excerpt: 'Everything you need to know about maintaining and protecting your leather footwear.',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80',
    category: 'Guide',
    date: 'Jan 5, 2024',
  },
  {
    id: 3,
    title: '5 Common Shoe Cleaning Mistakes to Avoid',
    excerpt: 'Avoid these common mistakes that can damage your shoes during cleaning.',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&q=80',
    category: 'Tips',
    date: 'Dec 28, 2023',
  },
  {
    id: 4,
    title: 'How Often Should You Clean Your Shoes?',
    excerpt: 'A guide to shoe cleaning frequency based on usage and material type.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    category: 'FAQ',
    date: 'Dec 20, 2023',
  },
];

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, posts.length - itemsPerView)));
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">Shoe Care Tips & News</h2>
          <p className="body-text mx-auto max-w-2xl">
            Stay updated with the latest shoe care tips, trends, and expert advice.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {posts.map((post) => (
                <div key={post.id} className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3">
                  <article className="card-hover group overflow-hidden rounded-2xl bg-card shadow-md">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <time className="text-xs text-muted-foreground">{post.date}</time>
                      <h3 className="mb-2 mt-2 text-lg font-bold text-card-foreground line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link
                        to="#"
                        className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white disabled:opacity-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex >= posts.length - itemsPerView}
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-primary hover:text-white disabled:opacity-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: Math.max(1, posts.length - itemsPerView + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
