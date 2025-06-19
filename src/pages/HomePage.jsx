import { React, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import '../App.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplashScreen from '../Component/SplashScreen';
import Navbar from '../Component/Navbar';

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="min-h-screen bg-amber-50 scroll-smooth">
      <Navbar />

      <AnimatedSection>
        <div className="mx-auto max-w-7xl flex flex-col text-shadow-2xl  
         md:flex-row items-center justify-between mt-24 md:mt-44 px-4 gap-10">
          <motion.div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold text-shadow-xs
             text-black leading-tight tracking-tight">
              An Indian-based <span className="text-yellow-700">Innovative</span> Computer Engineer
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Building creative and efficient solutions with modern web and AI technologies. Whether it's designing beautiful interfaces or exploring intelligent automation, I love turning ideas into impactful solutions. Currently exploring AI, Full Stack, and cloud-native apps. Also a photographer and a passionate traveler capturing the world through my lens.
            </p>
            <motion.a
  href="/Leonard_kb.pdf"
  download
  className="bg-black text-white px-6 py-3 mt-8 rounded-lg hover:bg-gray-800 transition-all duration-200 text-base md:text-lg shadow-md inline-block"
  whileHover={{ scale: 1.05 }}
>
  Download CV
</motion.a>
          </motion.div>

          <motion.div
  className="w-full md:w-1/2 rounded-full justify-center hidden md:flex"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4, type: 'spring' }}
>
  <img
    src="Profile.jpeg"
    alt="Profile"
    className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-tl-2xl rounded-b-3xl shadow-amber-200 shadow-xl"
  />
</motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-black mt-10 md:mt-24 py-16 relative overflow-hidden">
          <div className="absolute -top-48 -left-48 w-[600px] h-[600px]
           bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl
            opacity-30 animate-blob animation-delay-2000 z-0"></div>
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px]
           bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl
            opacity-30 animate-blob z-0"></div>

          <h1 className="text-4xl md:text-5xl 
          font-semibold text-white tracking-wide text-center mb-5 relative z-10">
            Experience
          </h1>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="px-4 md:px-12 max-w-6xl mx-auto pb-10 relative z-10"
          >
            <SwiperSlide>
              <AnimatedSection>
                <div className="rounded-xl p-10 shadow-lg 
                flex flex-col md:flex-row items-center md:items-start 
                gap-6 md:gap-24 bg-[#111]">
                  <div className="w-32 h-32 mt-22 flex justify-center items-center">
                    <img src="tcs.png" alt="TCS LOGO" className="object-contain w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">TCS</h2>
                    <p className="text-gray-100 text-base md:text-lg">
                      BFSI Strategic Advisory & Research Intern<br />
                      Trivandrum, Kerala <br />
                      <ul className="list-disc list-inside text-gray-100 space-y-2 mt-2">
                        <li>Developed AI-driven loan eligibility automation using Gen AI, reducing approval time by 40% and increasing loan approvals by 25% for a US bank.</li>
                        <li>Created an interactive financial learning game adopted by children, improving financial literacy engagement by 60%.</li>
                        <li>Engineered Tale App, an AI-powered storytelling platform with 95% accuracy in voice synthesis, increasing accessibility for the visually impaired by 90%.</li>
                        <li>Integrated an automation tool for prototype uploads, reducing admin workload by 35%. Deployed an NLP chatbot, boosting customer engagement by 15% per quarter.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </SwiperSlide>

            <SwiperSlide>
              <AnimatedSection>
                <div className="rounded-xl p-10 shadow-lg flex flex-col md:flex-row
                 items-center md:items-start gap-6 md:gap-24 bg-[#111]">
                  <div className="w-32 h-32 flex justify-center items-center">
                    <img src="Atos.png" alt="Eviden Logo" className="object-contain w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">Eviden / Atos Syntel</h2>
                    <p className="text-white text-base md:text-lg">
                      DAF TEAM INTERN <br />
                      Bangalore, India<br />
                      <ul className="list-disc list-inside text-gray-100 space-y-2 mt-2">
                              <li>Optimized Apache NiFi data pipelines in Cloud IaaS,
                                 improving real-time freight visibility and predictive maintenance for 5,000+ trucks,
                                 reducing downtime by 15% and boosting efficiency by 20%.
                              </li>
                              <li> Collaborated with Siemens teams to monitor and optimize the health of edge devices
                                 deployed at Procter & Gamble (P&G) , resulting in improved operational efficiency and 
                                 proactive issue resolution.</li>

                              
                      </ul>
                      
                    </p>
                  </div>
                </div>
              </AnimatedSection>

            </SwiperSlide>
          </Swiper>
         {/* projects section*/}
         <div className="mt-20 px-4 md:px-12 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 text-white text-3xl md:text-5xl 
          font-semibold tracking-wider">
            <h1>
              Projects
            </h1>
          </div>
  <AnimatedSection>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Project 1 */}
      <div className="bg-black border-2 border-blue-400
       rounded-xl shadow-md shadow-blue-500
       p-6 transition-transform hover:scale-105 duration-300">
        
        <h2 className="text-2xl font-bold text-blue-100 mb-2">ST Verse</h2>
        <p className="text-gray-500 text-base">
          A virtual simulation of my college using Unity and ARCore.
           Provides students with immersive navigation of the campus through VR and AR.
            Assets designed in Blender and Sketchfab with real-world textures from AmbientCG.
        </p>
        <a
          href="https://stverse.vercel.app/"
          className="mt-4 inline-block text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>

      {/* Project 2 */}
      <div className="bg-black border-2 border-blue-400
       rounded-xl shadow-md shadow-blue-500
       p-6 transition-transform hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-blue-100 mb-2">MarkSnap</h2>
        <p className="text-gray-500 text-base">
          MarkSnap is a business-grade application powered by LLaMA OCR that transforms physical or digital documents, 
          handwritten notes, invoices, or printed pages into clean, well-structured Markdown. 
          Ideal for startups, writers, researchers, consultants, 
          and finance professionals who want to digitize and organize content instantly with AI.
        </p>
        <a
          href="https://ocr-coral.vercel.app/"
          className="mt-4 inline-block text-green-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>

    
    </div>
  </AnimatedSection>
</div>
        </div>
      </AnimatedSection>
      
    </div>
  );
}