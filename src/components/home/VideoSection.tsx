import { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById('process-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const video = document.getElementById('process-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = document.getElementById('process-video') as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="heading-2 mb-4">See Our Cleaning Process</h2>
          <p className="body-text mx-auto max-w-2xl">
            Watch how our experts transform dirty, worn shoes into fresh, like-new footwear.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
          <video
            id="process-video"
            className="aspect-video w-full object-cover"
            poster="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=1920&q=80"
            muted={isMuted}
            loop
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-cleaning-a-shoe-3831/1080p.mp4"
              type="video/mp4"
            />
          </video>

          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 bg-gradient-to-t from-black/70 to-transparent p-4">
            <button
              onClick={handlePlayPause}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-1" />}
            </button>

            <div className="h-1 flex-1 rounded-full bg-white/30">
              <div className="h-full w-0 rounded-full bg-primary" />
            </div>

            <button
              onClick={handleMute}
              className="text-white transition-colors hover:text-primary"
            >
              {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </button>

            <button
              onClick={handleFullscreen}
              className="text-white transition-colors hover:text-primary"
            >
              <Maximize className="h-6 w-6" />
            </button>
          </div>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <button
              onClick={handlePlayPause}
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform hover:scale-110"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-muted-foreground">
          From inspection to final polish, every step is performed with precision and care.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
