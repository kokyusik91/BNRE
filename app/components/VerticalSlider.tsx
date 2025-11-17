"use client";

import { useEffect, useRef, useState } from "react";

interface Slide {
  id: number;
  backgroundColor: string;
  content: React.ReactNode;
}

interface VerticalSliderProps {
  slides: Slide[];
}

export default function VerticalSlider({ slides }: VerticalSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFooter, setShowFooter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Prevent multiple scroll events from firing too quickly
      if (isScrollingRef.current) return;

      // Only set scrolling flag if we're actually going to change something
      const delta = e.deltaY;
      const threshold = 10; // Minimum scroll delta to trigger navigation

      if (Math.abs(delta) < threshold) return;

      if (delta > 0) {
        // Scrolling down
        if (currentSlide < slides.length - 1) {
          isScrollingRef.current = true;
          setCurrentSlide((prev) => prev + 1);
          setShowFooter(false);
        } else if (currentSlide === slides.length - 1 && !showFooter) {
          // Show footer after last slide
          isScrollingRef.current = true;
          setShowFooter(true);
        } else {
          return; // Already at the end, don't set timeout
        }
      } else {
        // Scrolling up
        if (showFooter) {
          isScrollingRef.current = true;
          setShowFooter(false);
        } else if (currentSlide > 0) {
          isScrollingRef.current = true;
          setCurrentSlide((prev) => prev - 1);
        } else {
          return; // Already at the start, don't set timeout
        }
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // Debounce time
    };

    const container = containerRef.current;
    if (container) {
      // Use passive: false to allow preventDefault
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, showFooter, slides.length]);

  // Handle touch events for mobile
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isScrollingRef.current) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (deltaY > 50) {
      // Swipe up (next slide)
      if (currentSlide < slides.length - 1) {
        isScrollingRef.current = true;
        setCurrentSlide((prev) => prev + 1);
        setShowFooter(false);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      } else if (currentSlide === slides.length - 1 && !showFooter) {
        isScrollingRef.current = true;
        setShowFooter(true);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    } else if (deltaY < -50) {
      // Swipe down (previous slide)
      if (showFooter) {
        isScrollingRef.current = true;
        setShowFooter(false);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      } else if (currentSlide > 0) {
        isScrollingRef.current = true;
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header - Logo and Login */}
      <div
        className={`fixed left-0 top-[30px] z-20 w-full transition-opacity duration-700 ${
          showFooter ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className=" flex w-full items-center justify-between px-12">
          <div className="text-2xl font-bold text-white">BNARE</div>
          <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black transition-transform hover:scale-105">
            로그인
          </button>
        </div>
      </div>

      {/* Page Navigation */}
      <div
        className={`fixed left-[50px] top-[120px] z-20 transition-opacity duration-700 ${
          showFooter ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav className="flex flex-col gap-4">
          <a
            href="/story"
            className="text-lg font-bold text-white/90 hover:text-white"
          >
            Story
          </a>
          <a
            href="/detail"
            className="text-lg font-medium text-white/90 hover:text-white"
          >
            Detail
          </a>
        </nav>
      </div>

      {/* Slides Container - moves vertically */}
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: showFooter
            ? `translateY(-${currentSlide * 100}vh) translateY(-100vh)`
            : `translateY(-${currentSlide * 100}vh)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex h-screen w-screen flex-col items-center justify-center"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Footer - positioned below the slides */}
      <div
        className="fixed left-0 right-0 transition-transform duration-700 ease-in-out"
        style={{
          top: "100vh",
          height: "100vh",
          transform: showFooter ? "translateY(-100vh)" : "translateY(0)",
        }}
      >
        <div className="flex h-full flex-col bg-zinc-900 text-white">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden">
            {/* Background Image with Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
              style={{ backgroundImage: "url(/image-5.jpg)" }}
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold text-white md:text-4xl mb-5">
                직접 사용해보세요!
              </h2>
              <button className="rounded-full bg-white px-12 py-4 text-xl font-bold text-black transition-transform hover:scale-105">
                구매하러가기
              </button>
            </div>
          </div>
          {/* 나머지가 footer 차지 */}
          <div className="mx-auto w-full max-w-7xl px-8 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-semibold">About</h3>
                <p className="text-sm text-zinc-400">
                  Your company description goes here.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Links</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                <p className="text-sm text-zinc-400">email@example.com</p>
              </div>
            </div>
            <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
              © 2024 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div
        className={`fixed right-8 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 transition-opacity duration-700 ${
          showFooter ? "opacity-0" : "opacity-100"
        }`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setShowFooter(false);
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index
                ? "h-8 bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
