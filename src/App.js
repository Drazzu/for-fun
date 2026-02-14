import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const [activeSection, setActiveSection] = useState("menu");
  const audioRef = useRef(null);

  const triggerFlowerEffect = () => {
    setShowBurst(true);
    setTimeout(() => setShowBurst(false), 3000);
  };

  const enterSite = () => {
    setUnlocked(true);
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.4;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#4A4A4A] selection:bg-red-100 overflow-x-hidden">
      <audio ref={audioRef} loop src="/thinking-out-loud.mp3" />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.section
            key="landing"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            className="h-screen flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-[#FDFCF0]"
            onClick={enterSite}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-serif italic mb-4 text-[#7B2CBF]"
            >
              Happy Valentine's Day
            </motion.h1>
            <p className="text-gray-400 font-light tracking-[0.3em] uppercase text-xs">
              Tap to begin
            </p>
          </motion.section>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen relative"
          >
            {activeSection === "menu" && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-screen flex flex-col items-center justify-center p-6 bg-[#FFFDFB]"
              >
                <h2 className="text-3xl font-serif italic mb-12 text-[#D4A373]">
                  Explore my heart...
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                  <MenuIcon
                    icon="✨"
                    label="Belief"
                    onClick={() => setActiveSection("belief")}
                  />
                  <MenuIcon
                    icon="✍️"
                    label="Words"
                    onClick={() => setActiveSection("poem")}
                  />
                  <MenuIcon
                    icon="🌍"
                    label="Our Story"
                    onClick={() => setActiveSection("gallery")}
                  />
                </div>
              </motion.section>
            )}

            {activeSection === "belief" && (
              <motion.section className="min-h-screen flex flex-col items-center justify-center relative px-8 py-20 overflow-hidden bg-[#FFFDFB]">
                <BackButton onClick={() => setActiveSection("menu")} />
                {[...Array(20)].map((_, i) => (
                  <FallingFlower key={i} />
                ))}
                <div className="max-w-xl z-10 text-center">
                  <h2 className="text-5xl font-serif mb-12 text-[#7B2CBF]">
                    You can do it.
                  </h2>
                  <div className="space-y-6 text-xl font-light italic text-gray-700 leading-relaxed">
                    <p>
                      "The world can be loud, but your strength is quiet and
                      absolute."
                    </p>
                    <p>"Bloom at your own pace. I believe in you."</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={triggerFlowerEffect}
                    className="mt-16 cursor-pointer relative inline-block group"
                  >
                    <img
                      src="https://i.postimg.cc/xXsgPnXS/Whats-App-Image-2026-02-14-at-14-33-33-(1).jpg"
                      alt="Tulips"
                      className="w-64 h-auto rounded-2xl shadow-xl z-10"
                    />
                    <AnimatePresence>
                      {showBurst &&
                        [...Array(15)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 0, opacity: 1 }}
                            animate={{
                              y: -500,
                              x: (Math.random() - 0.5) * 400,
                              opacity: 0,
                              rotate: 720,
                            }}
                            className="absolute top-0 left-1/2 text-2xl z-50 pointer-events-none"
                          >
                            🌸
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.section>
            )}

            {activeSection === "poem" && (
              <motion.section className="min-h-screen flex flex-col items-center p-8 bg-[#FDFCF0] relative text-center overflow-y-auto pt-32 pb-32">
                <BackButton onClick={() => setActiveSection("menu")} />
                {[...Array(15)].map((_, i) => (
                  <FallingFlower key={i} />
                ))}

                <div className="max-w-2xl font-serif italic text-xl md:text-2xl leading-relaxed text-[#5E548E] z-10">
                  <p className="mb-6">
                    The stars were humbled by the sheen of her eyes,
                  </p>
                  <p className="mb-6">
                    The glow of the moon seemed to fade as she smiled.
                  </p>
                  <p className="mb-6">
                    Such was her influence that even the gloomy clouds
                  </p>
                  <p className="mb-12">
                    Had to make way for the beaming rays of the sun.
                  </p>

                  <p className="mb-6">
                    Glittering like diamonds, her eyes gazed at me,
                  </p>
                  <p className="mb-6">
                    Standing stone cold, my heart liked to flee.
                  </p>
                  <p className="mb-6">Never have I felt such joy;</p>
                  <p className="mb-12">
                    Still debating, still standing as a coy.
                  </p>

                  <p className="mb-6">She waved at me with a formal "hi,"</p>
                  <p className="mb-12">
                    Inwardly, a wave of happiness started surging too high.
                  </p>

                  <p className="mb-6">A simple greeting, a moment so brief,</p>
                  <p className="mb-12">
                    Yet it brought to my restless heart a silent relief.
                  </p>

                  <div className="text-[#D4A373] mt-12 border-t border-purple-100 pt-8">
                    <p className="mb-4">
                      Now as the city lights of Lyon start to glow,
                    </p>
                    <p className="mb-4">
                      There’s a belief in you I want you to know.
                    </p>
                    <p className="mb-4">
                      Beyond the studies, the plans, and the pace,
                    </p>
                    <p className="mb-4">
                      I see the strength and the light in your face.
                    </p>
                    <p className="mb-4">
                      Whatever the journey, wherever we go,
                    </p>
                    <p className="mb-8">
                      I’m in your corner—more than you know.
                    </p>
                  </div>
                </div>
              </motion.section>
            )}

            {activeSection === "gallery" && (
              <motion.section className="py-24 px-6 bg-white min-h-screen relative">
                <BackButton onClick={() => setActiveSection("menu")} />
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16 text-3xl font-serif italic text-[#D4A373]">
                    Our European Story
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <PhotoCard
                      src="https://i.postimg.cc/PCqhRYjN/Whats-App-Image-2026-02-14-at-20-11-59.jpg"
                      caption="The cute bombshell"
                    />
                    <PhotoCard
                      src="https://i.postimg.cc/rdS4ZBTP/Whats-App-Image-2026-02-14-at-19-47-28.jpg"
                      caption="The persistent one"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["Amsterdam", "Paris", "Prague"].map((city) => (
                      <div
                        key={city}
                        className="bg-gray-50 border-2 border-dashed border-gray-100 aspect-[3/4] flex items-center justify-center text-gray-300 italic text-sm p-4 text-center"
                      >
                        Waiting for {city}
                      </div>
                    ))}
                  </div>
                </div>
                <footer className="mt-20 flex flex-col items-center">
                  <a
                    href="https://wa.me/33000000000"
                    className="px-12 py-4 bg-[#7B2CBF] text-white rounded-full shadow-xl tracking-widest uppercase text-xs"
                  >
                    I'm ready
                  </a>
                </footer>
              </motion.section>
            )}
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

const FallingFlower = () => {
  const randomX = Math.random() * 100;
  const delay = Math.random() * 15;
  const duration = 12 + Math.random() * 12;
  const icon = ["🌷", "🌿", "🌹"][Math.floor(Math.random() * 3)];
  return (
    <motion.div
      initial={{ y: "-10vh", x: `${randomX}vw`, opacity: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 0.4, 0.4, 0],
        rotate: 360,
        x: `${randomX + (Math.random() * 15 - 7.5)}vw`,
      }}
      transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
      className="absolute text-2xl pointer-events-none z-0"
    >
      {icon}
    </motion.div>
  );
};

const MenuIcon = ({ icon, label, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
    className="flex flex-col items-center cursor-pointer"
  >
    <div className="w-24 h-24 bg-white shadow-xl rounded-3xl flex items-center justify-center text-4xl border border-purple-50 hover:border-purple-200 transition-colors">
      {icon}
    </div>
    <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
      {label}
    </span>
  </motion.div>
);

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-8 left-8 z-50 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 text-gray-400 hover:text-[#7B2CBF] transition-all uppercase text-[10px] tracking-[0.2em]"
  >
    ← Back
  </button>
);

const PhotoCard = ({ src, caption }) => (
  <div className="bg-white p-4 shadow-xl border border-gray-50 flex flex-col items-center justify-center">
    <div className="w-full aspect-square overflow-hidden rounded-lg">
      <img src={src} className="w-full h-full object-cover" alt={caption} />
    </div>
    <p className="mt-4 text-gray-400 text-sm font-serif italic">{caption}</p>
  </div>
);
