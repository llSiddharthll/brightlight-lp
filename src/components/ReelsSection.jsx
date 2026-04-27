import { Play } from "lucide-react";
import { reels } from "../data/sharedContent.js";

export default function ReelsSection() {
  return (
    <section className="section-shell bg-light">
      <div className="container-page">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Video Reels</p>
            <h2 className="section-title mt-2">Real client approval stories</h2>
          </div>
          <a
            href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
            className="btn-secondary w-fit"
            target="_blank"
            rel="noreferrer"
          >
            Watch Channel
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              className="group card-highlight overflow-hidden"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary text-white">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.name} video testimonial`}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/25 transition group-hover:bg-primary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-soft transition group-hover:bg-secondary group-hover:text-white">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-bold text-secondary">{video.label}</p>
                <h3 className="mt-2 text-xl font-extrabold text-primary">{video.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
