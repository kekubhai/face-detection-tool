/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaRocket, FaBolt, FaSmile, FaArrowRight } from "react-icons/fa";
import "./App.css"; // Ensure App.css includes Tailwind and custom animations

const AnimatedIcon = ({ icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const spring = useSpring({
    transform: isHovered ? "scale(1.3)" : "scale(1)",
    color: isHovered ? "#34D399" : "#F9FAFB",
    config: config.gentle,
  });

  return (
    <animated.div
      style={spring}
      className="transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={56} />
    </animated.div>
  );
};

const FeatureCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? "scale(1.08) rotate(1deg)" : "scale(1) rotate(0deg)",
    boxShadow: isHovered
      ? "0 20px 40px rgba(50, 115, 220, 0.4)"
      : "0 10px 20px rgba(0, 0, 0, 0.15)",
    config: config.gentle,
  });

  return (
    <animated.div
      style={cardSpring}
      className="bg-opacity-10 rounded-lg p-6 text-center shadow-md hover:bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 hover:text-white backdrop-blur-lg transition-transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedIcon icon={Icon} />
      <h4 className="text-2xl font-extrabold mt-5 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
        {title}
      </h4>
      <p className="text-gray-300">{description}</p>
    </animated.div>
  );
};

const MukhPehchaanLanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    config: config.slow,
  });

  const bounce = useSpring({
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-8px)" });
        await next({ transform: "translateY(0)" });
      }
    },
    from: { transform: "translateY(0)" },
    config: config.wobbly,
  });

  const parallaxBg = useSpring({
    from: { backgroundPositionY: "0%" },
    to: { backgroundPositionY: "200%" },
    config: { duration: 25000 },
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...parallaxBg,
        backgroundSize: "cover",
        backgroundImage: "url('/background-image.jpg')", // Add an engaging, professional background
      }}
      className="text-white min-h-screen"
    >
      {/* Header */}
      <header className="p-6 flex justify-between items-center backdrop-blur-lg bg-opacity-20">
        <animated.h1
          style={fadeIn}
          className="text-5xl font-extrabold tracking-wide text-gradient bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-700"
        >
          Jaan Pehchaan
        </animated.h1>
        <nav>
          <ul className="flex space-x-8">
            {["Features", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-lg hover:text-gray-300 transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto text-center py-20">
        <animated.h2
          style={fadeIn}
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-teal-200 to-indigo-400 bg-clip-text text-transparent"
        >
          Discover Faces with AI
        </animated.h2>
        <p className="text-xl md:text-2xl mt-6 text-gray-300">
          Bringing precise and efficient recognition to your fingertips.
        </p>
        <animated.button
          style={bounce}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white text-xl font-semibold rounded-full hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-teal-400 hover:scale-105"
        >
          Start Now <FaArrowRight className="inline ml-2" />
        </animated.button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <h3 className="text-center text-5xl font-bold mb-16 text-gray-100">
          Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard
            title="Accurate Recognition"
            description="Precise results with cutting-edge algorithms."
            icon={FaRocket}
          />
          <FeatureCard
            title="Lightning-Fast Speed"
            description="Handles large-scale operations with ease."
            icon={FaBolt}
          />
          <FeatureCard
            title="User Experience"
            description="Crafted for simplicity and reliability."
            icon={FaSmile}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 mt-12">
        <p className="text-center text-gray-500">
          &copy; 2023 Mukh Pehchaan. All rights reserved.
        </p>
      </footer>
    </animated.div>
  );
};

export default MukhPehchaanLanding;
