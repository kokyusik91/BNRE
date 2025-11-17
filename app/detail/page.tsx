import Link from "next/link";
import Image from "next/image";

const sectionTitleClass =
  "text-black text-3xl md:text-4xl font-mono font-bold text-center tracking-tight text-extra";

const sectionWrapperClass = "w-full px-6 md:px-20 py-16 md:py-20";

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-700">
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

      {/* 1 Sections */}

      <main className="">
        <section className={`${sectionWrapperClass} bg-mude`}>
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 w-full justify-center items-center">
            <Image
              src="/section-3.png"
              alt="Detail Image"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <div className="h-full max-w-xl space-y-4">
              <h1 className={`${sectionTitleClass} text-left`}>
                체험해 보세요!
              </h1>
              <p className="leading-relaxed text-extra">
                React lets you build user interfaces out of individual pieces
                called components. Create your own React components like
                Thumbnail, LikeButton, and Video. Then combine them into entire
                screens, pages, and apps.
              </p>
              <button className="rounded-full bg-extra px-10 py-3 text-lg font-bold text-primary transition-transform hover:scale-[1.02] shadow-sm mt-2">
                구매하기
              </button>
            </div>
          </div>
        </section>

        {/* 2 Sections */}

        <section className={`${sectionWrapperClass} bg-white`}>
          <div className="">
            <h2 className={`${sectionTitleClass} mb-4`}>Our Ingredients</h2>
            <p className="text-center mb-16">
              5중 히알루론산의 강력한 수분 및 보습 효과
            </p>
          </div>{" "}
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-center justify-center">
            <div className="grid grid-cols-1 gap-14 w-full lg:w-auto">
              {[
                { title: "하이글로온산", image: "/powder.png" },
                { title: "보태니컬 오일", image: "/oil.png" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start space-y-4 max-w-sm"
                >
                  <div className="relative h-20 w-20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-extra">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-extra">
                    React lets you build user interfaces out of individual
                    pieces called components. Create your own React components
                    like Thumbnail, LikeButton, and Video.
                  </p>
                </div>
              ))}
            </div>
            <div className="shrink-0">
              <Image
                src="/section-2.png"
                alt="Detail Image"
                width={400}
                height={400}
                className="rounded-[32px]"
              />
            </div>
            <div className="grid grid-cols-1 gap-14 w-full lg:w-auto">
              {[
                { title: "비타민 콤플렉스", image: "/powder.png" },
                { title: "프루츠 블렌딩", image: "/oil.png" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start space-y-4 max-w-sm"
                >
                  <div className="relative h-20 w-20">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-extra">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-extra">
                    React lets you build user interfaces out of individual
                    pieces called components. Create your own React components
                    like Thumbnail, LikeButton, and Video.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Sections */}
        <section className={`${sectionWrapperClass} bg-mude`}>
          <div className="">
            <h2 className={`${sectionTitleClass} mb-4`}>Three Flavor</h2>
            <p className="text-center mb-16">
              세가지 향이 존재해요. 각각의 향에 따라 다른 무드를 느끼실수
              있습니다!
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-14 md:gap-40 justify-center">
            {["Rosemary", "AppleMint", "Chamomile"].map((name, idx) => (
              <div
                key={name}
                className="flex flex-col items-center text-center gap-4 max-w-xs "
              >
                {/* 이미지를 강제로 상위로부터 1/2 컷해서 사용 */}
                <div className="w-full mb-4">
                  <Image
                    src={`/product-${idx + 1}.png`}
                    alt="Detail Image"
                    width={200}
                    height={400}
                    className="mx-auto object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-extra">{name}</h3>
                <span className="text-sm text-zinc-500">
                  {
                    [
                      "React lets you build user interfaces out of individual pieces called components. Create your own React",
                      "React feels the same. It is designed to let you seamlessly combine components written by independent people",
                      "Displaying a list? Try array map(). Learning React is learning programming.",
                    ][idx]
                  }
                </span>
                <button className="mt-1 rounded-full border border-extra/50 px-6 py-2 text-xs font-medium text-extra hover:bg-extra/5 transition-colors">
                  More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4 Section */}
        <section className={`${sectionWrapperClass} bg-white`}>
          <h2 className={`${sectionTitleClass} mb-4`}>
            Coconut Oil 기반 리퀴드솝 비교
          </h2>
          <p className="mb-12 text-center text-sm text-extra">
            시중 합성 계면활성제·지방산 베이스 세정제와 네이쳐인 코코넛오일 Hcp
            리퀴드솝의 본질적인 차이를 한눈에 비교해 보세요.
          </p>
          <div className="mx-auto flex max-w-5xl flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* 타사 제품 */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-5 h-[180px] w-[400px] md:h-[200px] md:w-[440px]">
                  <Image
                    src="/desc.png"
                    alt="타사 세정제 설명 아이콘"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-extra text-center">
                  타사 세정제
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="space-y-4">
                  {[
                    {
                      title: "세정력 중심 포뮬러",
                      desc: "정제 지방산·합성 계면활성제를 사용해 강한 세정력에 초점을 맞춘 베이스입니다.",
                    },
                    {
                      title: "낮은 보습력",
                      desc: "제조 과정에서 자연 글리세린을 분리하여 세정 후 피부가 건조하고 당기기 쉽습니다.",
                    },
                    {
                      title: "피부 자극 가능성",
                      desc: "합성 계면활성제가 민감성·건성 피부에는 자극이 될 수 있습니다.",
                    },
                    {
                      title: "저가·대량생산 지향",
                      desc: "대량 생산과 원가 절감을 위해 설계된 베이스로, 성분·공정의 깊이는 제한적입니다.",
                    },
                    {
                      title: "환경 부담",
                      desc: "생분해성이 낮을 수 있어 사용 후 하천·토양에 잔류하며 환경 부담을 남길 수 있습니다.",
                    },
                    {
                      title: "평범한 브랜드 인식",
                      desc: "‘그냥 일반 세정제’로 인식되기 쉬워, 프리미엄·클린뷰티 이미지는 약합니다.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="space-y-1">
                      <p className="text-sm font-semibold text-zinc-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 가운데 구분선 */}
            <div className="hidden w-[0.5px] bg-extra self-stretch md:block" />

            {/* 우리 제품 */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-5 h-[180px] w-[400px] md:h-[200px] md:w-[440px]">
                  <Image
                    src="/desc.png"
                    alt="네이쳐인 리퀴드솝 설명 아이콘"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-extrabold text-extra text-center">
                  네이쳐인 코코넛오일 Hcp 리퀴드솝
                </h3>
              </div>
              <div className="flex justify-center">
                <div className="space-y-4">
                  {[
                    {
                      title: "세정과 보습의 동시 실현",
                      desc: "코코넛·올리브·포도씨 등 100% 식물성 오일을 그대로 비누화하여 세정과 보습을 함께 잡았습니다.",
                    },
                    {
                      title: "천연 글리세린 그대로",
                      desc: "비누화 과정에서 자연 생성되는 글리세린을 분리하지 않고 남겨 세정 후에도 촉촉함을 유지합니다.",
                    },
                    {
                      title: "피부 친화·저자극",
                      desc: "화학 계면활성제·추출 지방산을 사용하지 않아 민감한 피부에도 부드럽게 작용합니다.",
                    },
                    {
                      title: "프리미엄 스킨케어 비누",
                      desc: "단순 세정제가 아니라, 세안과 동시에 피부 컨디션을 케어하는 ‘스킨케어 비누’로 포지셔닝됩니다.",
                    },
                    {
                      title: "100% 생분해 친환경 베이스",
                      desc: "자연에서 분해되는 성분만으로 구성되어 사용 후 하천·토양에 부담을 남기지 않습니다.",
                    },
                    {
                      title: "전문성과 희소성이 있는 공정",
                      desc: "천연 오일을 직접 비누화하는 공정과 설비가 필요해, 대량·저가 생산이 어려운 프리미엄 베이스입니다.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="space-y-1">
                      <p className="text-sm font-semibold text-extra">
                        {item.title}
                      </p>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5 Section 영상 .mp4 */}
        <section className={`${sectionWrapperClass} bg-white`}>
          <div className="relative mx-auto w-full max-w-5xl aspect-video overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/section-6.jpg"
              alt="Video placeholder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <button className="absolute inset-0 m-auto h-20 w-20 rounded-full border border-white/40 bg-white/80 text-black shadow-lg flex items-center justify-center text-3xl">
              ▶
            </button>
          </div>
        </section>

        {/* 6 Section 구매하러가기 Sections */}
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="relative flex w-full items-center justify-center overflow-hidden py-24 md:py-32">
            {/* Background Image with Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
              style={{ backgroundImage: "url(/section-6.jpg)" }}
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
        </section>
      </main>

      {/* Footer */}
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
  );
}
