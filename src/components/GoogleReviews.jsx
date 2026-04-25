import { Star, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "../data/sharedContent.js";

const ReviewCard = ({ review }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="flex-none w-[350px] min-h-[220px] p-8 mx-3 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative group whitespace-normal"
  >
    <div className="absolute top-6 right-8 text-slate-50 group-hover:text-secondary/10 transition-colors">
      <MessageCircle size={40} fill="currentColor" />
    </div>
    
    <div className="flex items-center gap-4 mb-5">
      <img
        src={review.image}
        alt={review.name}
        className="h-12 w-12 rounded-2xl object-cover ring-2 ring-slate-100"
      />
      <div>
        <h3 className="font-bold text-primary tracking-tight">{review.name}</h3>
        <div className="flex gap-0.5 text-secondary">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
    
    <p className="text-slate-600 leading-relaxed text-sm italic line-clamp-4">
      "{review.text}"
    </p>
  </motion.div>
);

const MarqueeRow = ({ items, reverse = false }) => (
  <div className="flex overflow-hidden py-4 select-none">
    <motion.div 
      initial={{ x: reverse ? "-50%" : 0 }}
      animate={{ x: reverse ? 0 : "-50%" }}
      transition={{ 
        duration: 40, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="flex whitespace-nowrap"
    >
      {[...items, ...items].map((review, i) => (
        <ReviewCard key={`${review.name}-${i}`} review={review} />
      ))}
    </motion.div>
  </div>
);

export default function GoogleReviews() {
  const row1 = reviews.slice(0, 3);
  const row2 = reviews.slice(2, 5);

  return (
    <section className="section-shell bg-white overflow-hidden pt-24 pb-8" id="reviews">
      <div className="container-page mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
                Verified Feedback
              </p>
              <h2 className="section-title mt-4">Wall of Trust</h2>
              <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                Join 5,000+ applicants who found their Canadian pathway with our licensed expertise. 
                Real stories from real clients.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full" />
            <div className="relative flex items-center gap-8 bg-primary rounded-[40px] p-8 md:p-10 text-white shadow-2xl border border-white/10">
              <div className="text-center">
                <div className="text-6xl font-black mb-1">4.8</div>
                <div className="flex justify-center gap-1 text-accent mb-2">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Google Rating</p>
              </div>
              <div className="w-px h-16 bg-white/20 hidden md:block" />
              <div className="hidden md:block">
                <p className="text-sm font-medium text-blue-100 max-w-[150px]">
                  Based on genuine reviews from our global community.
                </p>
                <a 
                  href="https://www.google.com/search?q=Brightlight+Immigration+Surrey" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-3 flex items-center gap-2 text-sm font-bold text-accent hover:underline"
                >
                  Write a review <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative">
        {/* Fading Gradients for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
      
      <div className="container-page mt-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-sm font-medium"
        >
          <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" className="h-4 w-4 mr-2" alt="Google" />
          Average approval rate: <span className="text-primary font-bold">98%</span>
        </motion.div>
      </div>
    </section>
  );
}
