"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const StoryText0 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-xl font-medium leading-relaxed text-center">
    <p>BNRE 브랜드 스토리</p>
  </div>
);

const StoryText1 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>첫 아이를 임신했을 때, 저는 갑상선 암 진단을 받았습니다.</p>
  </div>
);

const StoryText2 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      아기에게 오랫동안 모유 수유를 하고 싶었기에 수술은 선택할 수 없었고,
      <br /> 대신 종양이 커지지 않도록 몸을 지킬 방법을 찾기 시작했습니다.
    </p>
    <p className="mt-6">
      그 과정에서 알게 된 건,
      <br />{" "}
      <strong className="text-red-400 underline">
        우리가 매일 바르는 것들이 건강에 깊은 영향을 준다는 사실이었습니다.
      </strong>
    </p>
  </div>
);

const StoryText3 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      겉으로는 <span className="font-bold">'클린'</span>하고{" "}
      <span className="font-bold">'안전하다'</span>는 이름으로 팔리던
      제품들조차,
      <br /> 실제로는 제조 과정에서 유해 성분이 남을 수 있었고, <br /> 단순한{" "}
      <span className="font-bold">'향료'</span> 하나만으로도 몸과 환경에 큰
      부담을 줄 수 있다는 걸 깨달았습니다.
    </p>
    <p className="mt-6">
      무엇보다 힘들었던 건, <br /> 제가 모르는 사이에 쌓여온 화학 성분들이
      <br /> 제 몸을 거쳐{" "}
      <strong>결국 뱃속의 아이에게까지 전달된다는 사실이었습니다.</strong>
    </p>
  </div>
);

const StoryText4 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>그때 저는 부모님을 원망하기도 했습니다.</p>
  </div>
);

const StoryText5 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      "조금만 더 건강한 생활습관을 알려주셨더라면,
      <br /> 해로운 성분들을 멀리할 수 있었더라면…" 하는 아쉬움이 컸습니다.
    </p>
    <p className="mt-6">하지만 동시에 저는 깨달았습니다.</p>
  </div>
);

const StoryText6 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>아이들이야말로 저에게 삶을 바꿀 용기를 준 축복이라는 것을요.</p>
    <p className="mt-6">
      <strong>BNRE는 바로 그 축복에서 시작되었습니다.</strong>
    </p>
  </div>
);

const StoryText7 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      저와 제 가족이 안심할 수 있는 제품,
      <br />
      BNRE는 바로 그 축복에서 시작되었습니다. 그리고 또 다른 가족들이 믿고
      사용할 수 있는
      <br /> 피부와 지구 모두에 순한 제품을 만들고자 합니다.
    </p>
    <p className="mt-6">
      <strong>BNRE는 단순한 뷰티 브랜드가 아닙니다.</strong>
    </p>
  </div>
);

const StoryText8 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      가족의 건강을 지키고, 지구의 미래를 생각하는 생활 방식이자 약속입니다.
    </p>
  </div>
);

const StoryText9 = () => (
  <div className="text-white text-2xl md:text-3xl lg:text-2xl font-medium leading-relaxed text-center">
    <p>
      저희가 드리고 싶은 가장 큰 가치는{" "}
      <strong className="underline">"마음 놓을 수 있는 선택"</strong>입니다.
    </p>
    <p className="mt-6">
      BNRE가 여러분의 매일 속에서 작은 평안이 되고, 건강한 내일을 지켜드릴 수
      있기를 바랍니다.
    </p>
  </div>
);

const storyComponents = [
  StoryText0,
  StoryText1,
  StoryText2,
  StoryText3,
  StoryText4,
  StoryText5,
  StoryText6,
  StoryText7,
  StoryText8,
  StoryText9,
];

export default function StoryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let accumulatedScroll = 0;
    let isTransitioning = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // 전환 중에는 추가 스크롤 무시
      if (isTransitioning) return;

      accumulatedScroll += e.deltaY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        accumulatedScroll = 0;
      }, 150);

      // 스크롤 임계값
      const scrollThreshold = 100;

      if (accumulatedScroll > scrollThreshold) {
        isTransitioning = true;
        setCurrentIndex((prev) => {
          const nextIndex = Math.min(prev + 1, storyComponents.length - 1);
          console.log(
            `Moving from ${prev} to ${nextIndex}, total: ${storyComponents.length}`
          );
          return nextIndex;
        });
        accumulatedScroll = 0;

        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      } else if (accumulatedScroll < -scrollThreshold) {
        isTransitioning = true;
        setCurrentIndex((prev) => {
          const nextIndex = Math.max(prev - 1, 0);
          console.log(
            `Moving from ${prev} to ${nextIndex}, total: ${storyComponents.length}`
          );
          return nextIndex;
        });
        accumulatedScroll = 0;

        setTimeout(() => {
          isTransitioning = false;
        }, 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full px-12 py-4 flex items-center justify-between border-b border-gray-200">
        <div className="text-2xl font-bold text-black">
          <Link href="/">BNARE</Link>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/story"
            className="text-lg font-bold text-black hover:text-gray-600 transition-colors"
          >
            Story
          </Link>
          <Link
            href="/detail"
            className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
          >
            Detail
          </Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 영역 */}
      <main className="container mx-auto px-6 py-10 h-screen flex flex-col overflow-hidden">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          Brand Story
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-500 ease-out"
            style={{
              width: `${((currentIndex + 1) / storyComponents.length) * 100}%`,
            }}
          />
        </div>

        {/* 배경 이미지 영역 */}
        <div
          className="relative flex-1 rounded-lg bg-cover bg-center mb-20"
          style={{
            backgroundImage: "url('/image-5.jpg')",
          }}
        >
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/30 rounded-lg" />

          {/* 텍스트 컨테이너 */}
          <div className="relative h-full flex items-center justify-center px-8">
            <div className="max-w-4xl mx-auto">
              {storyComponents.map((StoryComponent, index) => (
                <div
                  key={index}
                  className="absolute inset-x-8 top-1/2 -translate-y-1/2 transition-opacity duration-1000"
                  style={{
                    opacity: currentIndex === index ? 1 : 0,
                  }}
                >
                  <StoryComponent />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
