'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TroscanGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !imagesWrapperRef.current) return;

    // Clean up any existing animations first
    if (animationRef.current) {
      animationRef.current.revert();
    }

    const ctx = gsap.context(() => {
      // Initial stacked state - make them smaller initially
      gsap.set('.gallery-img', {
        x: 0,
        y: 0,
        scale: 0.7, // Reduced from 0.8 to 0.7 for more expansion
        opacity: 1,
        rotation: 0,
      });

      gsap.set('.gallery-text', { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: imagesWrapperRef.current,
          anticipatePin: 1,
          pinSpacing: false,
          invalidateOnRefresh: true,
        },
      });

      // Increased the expansion (x and y values increased, scale increased)
      tl.to('.img-1', { x: -500, y: -220, scale: 1.1, rotation: 0 }, 0) // Increased from -380, -180
        .to('.img-2', { x: 0, y: -280, scale: 1.1, rotation: 0 }, 0)   // Increased from 0, -240
        .to('.img-3', { x: 500, y: -200, scale: 1.1, rotation: 0 }, 0) // Increased from 380, -160
        .to('.img-4', { x: -520, y: 220, scale: 1.1, rotation: 0 }, 0) // Increased from -400, 180
        .to('.img-5', { x: 0, y: 270, scale: 1.1, rotation: 0 }, 0)    // Increased from 0, 230
        .to('.img-6', { x: 520, y: 220, scale: 1.1, rotation: 0 }, 0)  // Increased from 400, 180
        .to('.gallery-text', { opacity: 1 }, 0.3);

    }, sectionRef);

    animationRef.current = ctx;

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  const images = [
    { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', class: 'img-1', size: 'w-[280px] h-[380px]' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', class: 'img-2', size: 'w-[360px] h-[240px]' },
    { src: 'https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg?scale-down-to=1024', class: 'img-3', size: 'w-[300px] h-[360px]' },
    { src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80', class: 'img-4', size: 'w-[320px] h-[240px]' },
    { src: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80', class: 'img-5', size: 'w-[280px] h-[200px]' },
    { src: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80', class: 'img-6', size: 'w-[340px] h-[220px]' },
  ];

  return (
    <div className="bg-[#faf5f0]">

      {/* Header - KEPT */}
   

      {/* Gallery */}
      <section ref={sectionRef} className="relative h-[200vh] bg-[#faf5f0]">
        <div 
          ref={imagesWrapperRef} 
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full max-w-[1400px] h-[800px] mx-auto flex items-center justify-center"> {/* Increased container size */}

            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                className={`gallery-img ${img.class} ${img.size} absolute rounded-2xl shadow-2xl object-cover border-4 border-white`}
                alt=""
              />
            ))}

            {/* Text with <br/> after "exquisite" */}
            <div className="gallery-text absolute inset-0 flex items-center justify-center pointer-events-none p-[100px]">
              <h2 className="text-center text-4xl max-w-4xl font-light text-[#8b4b32]">
                Transforming spaces with style,<br />
                
                through Troscán&apos;s exquisite<br /> {/* <br/> after "exquisite" */}
                design expertise.
              </h2>
            </div>

          </div>
        </div>
      </section>

      {/* Spacer section */}
      <div className="bg-[#faf5f0] min-h-[50vh]"></div>

    </div>
  );
}