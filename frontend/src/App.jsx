/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { FaRocket, FaBolt, FaSmile, FaArrowRight } from 'react-icons/fa';
import './index.css'
const AnimatedIcon = ({ icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const spring = useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    color: isHovered ? '#FCD34D' : '#FFFFFF',
    config: config.wobbly,
  });

  return (
    <animated.div
      style={spring}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={48} />
    </animated.div>
  );
};

const FeatureCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(0deg)',
    boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
    config: config.wobbly,
  });

  return (
    <animated.div
      style={cardSpring}
      className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedIcon icon={Icon} />
      <h4 className="text-xl font-bold mb-2 mt-4">{title}</h4>
      <p>{description}</p>
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
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: config.molasses,
  });

  const bounce = useSpring({
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(0px)' });
        await next({ transform: 'translateY(-10px)' });
      }
    },
    from: { transform: 'translateY(0px)' },
    config: config.wobbly,
  });

  const parallaxBg = useSpring({
    from: { backgroundPositionY: '0%' },
    to: { backgroundPositionY: '100%' },
    config: { duration: 20000 },
    loop: true,
  });

  return (
    <animated.div 
      className="min-h-screen bg-gradient-to-b from-purple-600 via-blue-500 to-purple-600 text-white font-sans"
      style={{
        ...parallaxBg,
        backgroundSize: '400% 400%',
      }}
    >
      <header className="p-6 flex justify-between items-center backdrop-blur-sm bg-white bg-opacity-10">
        <animated.h1 style={fadeIn} className="text-4xl font-bold">
         Jaan Pehchan
        </animated.h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-yellow-300 transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <animated.h2 style={fadeIn} className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            Discover Faces with Ease
          </animated.h2>
          <animated.p style={fadeIn} className="text-xl mb-8">
            Mukh Pehchaan: Your AI-powered face recognition solution
          </animated.p>
          <animated.button
            style={bounce}
            className="bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900 font-bold py-3 px-6 rounded-full hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 text-lg flex items-center"
            onClick={() => alert('Navigating to image selection page')}
          >
            Start Recognizing
            <FaArrowRight className="ml-2" />
          </animated.button>
        </section>

        <section id="features" className="py-20">
          <h3 className="text-4xl font-bold mb-12 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Accurate Recognition"
              description="State-of-the-art AI algorithms for precise face recognition"
              icon={FaRocket}
            />
            <FeatureCard
              title="Fast Processing"
              description="Lightning-fast results for both single and batch images"
              icon={FaBolt}
            />
            <FeatureCard
              title="User-Friendly"
              description="Intuitive interface for seamless user experience"
              icon={FaSmile}
            />
          </div>
        </section>

        <section id="about" className="py-20">
          <animated.div style={fadeIn} className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md">
            <h3 className="text-3xl font-bold mb-4">About Mukh Pehchaan</h3>
            <p className="text-lg">
              Mukh Pehchaan is a cutting-edge face recognition tool that combines the power of artificial intelligence with user-friendly design. Our mission is to make face recognition technology accessible and efficient for everyone, from individuals to large enterprises.
            </p>
          </animated.div>
        </section>

        <section id="contact" className="py-20">
          <h3 className="text-4xl font-bold mb-12 text-center">Contact Us</h3>
          <form className="max-w-lg mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md">
            <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <textarea placeholder="Message" rows="4" className="w-full mb-4 p-2 rounded bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            <button type="submit" className="bg-gradient-to-r from-yellow-400 to-pink-500 text-purple-900 font-bold py-2 px-4 rounded hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-purple-800 text-center py-4 backdrop-blur-sm bg-opacity-70">
        <p>&copy; 2023 Mukh Pehchaan. All rights reserved.</p>
      </footer>
    </animated.div>
  );
};

export default MukhPehchaanLanding;

