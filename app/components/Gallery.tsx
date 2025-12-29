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
      // Get viewport dimensions for responsive positioning
      const vw = window.innerWidth;
      const isMobile = vw < 768;
      const isTablet = vw >= 768 && vw < 1024;
      
      // Responsive multipliers
      const xMultiplier = isMobile ? 0.25 : isTablet ? 0.6 : 1;
      const yMultiplier = isMobile ? 0.3 : isTablet ? 0.65 : 1;
      const scaleExpanded = isMobile ? 0.85 : isTablet ? 1.0 : 1.1;
      
      // Initial stacked state with visible spacing
      gsap.set('.gallery-img', {
        scale: 0.7,
        opacity: 1,
        rotation: 0,
      });

      // Add more spacing between stacked images for visibility
      gsap.set('.img-1', { x: -80, y: -60 });
      gsap.set('.img-2', { x: 60, y: -40 });
      gsap.set('.img-3', { x: -40, y: -20 });
      gsap.set('.img-4', { x: 70, y: 20 });
      gsap.set('.img-5', { x: -60, y: 40 });
      gsap.set('.img-6', { x: 50, y: 60 });

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

      // Different positioning for mobile vs desktop
      if (isMobile) {
        // Mobile: positioned like screenshot - staggered layout
        tl.to('.img-1', { x: -80, y: -240, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-2', { x: 70, y: -250, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-3', { x: 70, y: -135, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-4', { x: -70, y: 150, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-5', { x: 80, y: 130, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-6', { x: 0, y: 240, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.gallery-text', { opacity: 1 }, 0.3);
      } else {
        // Desktop: spread out design
        tl.to('.img-1', { x: -360 * xMultiplier, y: -158 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-2', { x: 0, y: -202 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-3', { x: 360 * xMultiplier, y: -144 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-4', { x: -374 * xMultiplier, y: 158 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-5', { x: 0, y: 194 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.img-6', { x: 374 * xMultiplier, y: 158 * yMultiplier, scale: scaleExpanded, rotation: 0 }, 0)
          .to('.gallery-text', { opacity: 1 }, 0.3);
      }

    }, sectionRef);

    animationRef.current = ctx;

    // Add resize handler
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  // Images with mobile sizes increased by another 5%
  const images = [
    { 
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', 
      class: 'img-1', 
      size: 'md:w-[196px] md:h-[266px] w-[122px] h-[166px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80', 
      class: 'img-2', 
      size: 'md:w-[252px] md:h-[168px] w-[154px] h-[105px]'
    },
    { 
      src: 'https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg?scale-down-to=1024', 
      class: 'img-3', 
      size: 'md:w-[210px] md:h-[252px] w-[132px] h-[154px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80', 
      class: 'img-4', 
      size: 'md:w-[224px] md:h-[168px] w-[138px] h-[105px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80', 
      class: 'img-5', 
      size: 'md:w-[196px] md:h-[140px] w-[122px] h-[88px]'
    },
    { 
      src: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80', 
      class: 'img-6', 
      size: 'md:w-[238px] md:h-[154px] w-[144px] h-[93px]'
    },
  ];

  return (
    <div className="bg-[#faf5f0]">

      {/* Gallery */}
      <section ref={sectionRef} className="relative h-[200vh] bg-[#faf5f0]">
        <div 
          ref={imagesWrapperRef} 
          className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full max-w-[1400px] h-[800px] mx-auto flex items-center justify-center">

            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                className={`gallery-img ${img.class} ${img.size} absolute object-cover rounded-[5px]`}
                alt=""
              />
            ))}

            {/* Text with <br/> after "exquisite" */}
            <div className="gallery-text absolute inset-0 flex items-center justify-center pointer-events-none p-4 md:p-[100px]">
              <h2 className="text-center text-xl md:text-4xl max-w-4xl font-bold md:font-light text-[#8b4b32] px-4">
                <span className="md:hidden">
                  Transforming spaces with<br />
                  style, through Troscán&apos;s<br />
                  exquisite design<br />
                  expertise.
                </span>
                <span className="hidden md:inline">
                  Transforming spaces with style,<br />
                  
                  through Troscán&apos;s exquisite<br />
                  design expertise.
                </span>
              </h2>
            </div>

          </div>
        </div>
      </section>

      {/* Spacer to prevent overlap */}
      <div className="bg-[#faf5f0] h-[60vh]"></div>

    </div>
  );
}