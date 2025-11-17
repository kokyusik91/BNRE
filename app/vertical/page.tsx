import VerticalSlider from "../components/VerticalSlider";

export default function VerticalPage() {
  const slides = [
    {
      id: 1,
      backgroundColor: "#3b82f6", // blue-500
      content: (
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
            Vertical Scroll
          </h1>
          <p className="text-xl text-white/90 md:text-2xl">
            Scroll down to explore
          </p>
        </div>
      ),
    },
    {
      id: 2,
      backgroundColor: "#8b5cf6", // violet-500
      content: (
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
            Our Mission
          </h1>
          <p className="max-w-2xl text-xl text-white/90 md:text-2xl">
            Building the future with innovative solutions
          </p>
        </div>
      ),
    },
    {
      id: 3,
      backgroundColor: "#ec4899", // pink-500
      content: (
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
            What We Offer
          </h1>
          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Innovation
              </h3>
              <p className="text-white/80">
                Cutting-edge technology solutions
              </p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Excellence
              </h3>
              <p className="text-white/80">Premium quality in every detail</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Growth
              </h3>
              <p className="text-white/80">Continuous improvement and scaling</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      backgroundColor: "#f59e0b", // amber-500
      content: (
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white md:text-8xl">
            Join Us
          </h1>
          <p className="mb-8 text-xl text-white/90 md:text-2xl">
            Let's build something amazing together
          </p>
          <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-amber-500 transition-transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      ),
    },
  ];

  return <VerticalSlider slides={slides} />;
}
