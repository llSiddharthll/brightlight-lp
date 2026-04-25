import { useState } from "react";
import { Play, X, Youtube, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { reels } from "../data/sharedContent.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReelsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="section-shell bg-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow inline-flex items-center gap-2">
              <span className="h-1 w-8 bg-secondary rounded-full" />
              Success Stories
            </p>
            <h2 className="section-title mt-2">Real client approval stories</h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Watch how we\'ve helped hundreds of families and professionals navigate the Canadian immigration process with confidence.
            </p>
          </motion.div>
          
          <div className="flex items-center gap-4">
            {/* Custom Navigation Buttons */}
            <div className="flex gap-2">
              <button className="swiper-prev-reels h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                <ChevronLeft size={24} />
              </button>
              <button className="swiper-next-reels h-12 w-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-primary hover:bg-secondary hover:text-white transition-all shadow-sm">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
              className="btn-secondary w-fit flex items-center gap-2 group"
              target="_blank"
              rel="noreferrer"
            >
              Explore Channel
              <Youtube size={18} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev-reels",
              nextEl: ".swiper-next-reels",
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 !overflow-visible"
          >
            {reels.map((video) => (
              <SwiperSlide key={video.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-slate-900 shadow-xl border border-slate-200/50">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={`${video.name} video testimonial`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-2xl transition-all duration-300 group-hover:bg-secondary group-hover:border-secondary"
                      >
                        <Play size={28} fill="currentColor" className="ml-1" />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                        {video.label}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors leading-tight">
                        {video.name}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Watch Story</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div 
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative z-10 w-full max-w-4xl aspect-[9/16] max-h-[90vh] md:aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.name}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
