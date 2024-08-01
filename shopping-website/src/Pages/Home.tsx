// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import logo from '../assets/logo.png'; // Update the path according to your folder structure
// import women from '../assets/black.jpg';
// import jewellery from '../assets/jewellery.jpg';
// import hill from '../assets/women-on-hill.jpg';

// const Home: React.FC = () => {
//   const navigate = useNavigate();

//   const handleNavigateToStore = () => {
//     navigate('/Store');
//   };

//   return (
//     <div classNameName="min-h-screen flex flex-col justify-between bg-white">
//       <div classNameName="w-full">
//         <Carousel
//           autoPlay
//           interval={3000}
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           showArrows={false}
//           classNameName='h-full'
//         >
//           <div>
//             <img src={women} alt="Image 1" classNameName="object-cover w-full h-full" />
//           </div>
//           <div>
//             <img src={jewellery} alt="Image 2" classNameName="object-cover w-full h-full" />
//           </div>
//           <div>
//             <img src={hill} alt="Image 3" classNameName="object-cover w-full h-full" />
//           </div>
//         </Carousel>
//       </div>
//       <div classNameName="text-center p-6">
//         <img
//           src={logo}
//           alt="Company Logo"
//           classNameName="w-32 h-32 md:w-48 md:h-48 mb-6 mx-auto object-contain"
//         />
//         <h1 classNameName="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
//           Welcome to YMART
//         </h1>
//         <p classNameName="text-lg md:text-1xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
//           At YMART, we are committed to bringing you a diverse selection of top-notch products,
//           ranging from the latest electronics and fashionable clothing to essential home goods and
//           more. Our goal is to offer a seamless shopping experience with competitive prices and
//           exceptional customer service. Discover a world of quality and convenience as you explore
//           our store, tailored to meet your needs and preferences. Shop with confidence and enjoy
//           the ultimate online shopping journey.
//         </p>
//         <button
//           onClick={handleNavigateToStore}
//           classNameName="bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
//         >
//           Explore Our Store
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update the path according to your folder structure
import women from '../assets/black.jpg';
import a from '../assets/pexels-chloekalaartist-1043474.jpg';
import b from '../assets/pexels-olly-839011.jpg';
import c from '../assets/pexels-pixabay-415829.jpg';
import d from '../assets/pexels-rfera-432059.jpg';
import e from '../assets/pexels-samad-ismayilov-231721-735552.jpg'

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToStore = () => {
    navigate('/Store');
  };

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mb-10 pt-8 md:mb-16 text-center">
          

        <div className="text-center mb-6">
          <img src={logo} alt="Logo" className="mx-auto h-24 w-24" />
          <h1 className="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">Y-Mart</h1>
          <p className="mx-auto sm:block mt-4 max-w-5xl text-center text-black sm:mt-8 text-xl">Your one-stop shop for the best products!</p>
        </div>

        <button
            onClick={handleNavigateToStore}
            className="bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
          >
            Explore Our Store
          </button>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16">
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Amazing products and fast delivery. Highly recommend Y-Mart!"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={women} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Simon Lewis</strong>
                  <span className="text-xs text-white"> Founder of 2 Startups </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Y-Mart has everything I need, and their prices are unbeatable!"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={c} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Laveda</strong>
                  <span className="text-xs text-white"> Enrepreneur</span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Fantastic customer service and a wide variety of items. Happy to be part of it."</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={b} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">John samuel</strong>
                  <span className="text-xs text-white"> Entrepreneur </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Quality products at great prices. Y-Mart never disappoints."</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={a} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">George bush</strong>
                  <span className="text-xs text-white"> Politician </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-green-500 via-green-400 to-teal-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Love shopping at Y-Mart! The website is so easy to navigate and is user-friendly"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={d} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Scott levis</strong>
                  <span className="text-xs text-white"> Reporter </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-red-500 via-red-400 to-orange-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Quick delivery and excellent products. customer service is top-notch. Y-Mart is my go-to!"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={e} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Natasha williams</strong>
                  <span className="text-xs text-white"> Influencer </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-teal-500 via-teal-400 to-blue-400 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Impressed with Y-Mart's variety and fast shipping. Highly recommend!"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={women} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Luies</strong>
                  <span className="text-xs text-white"> Athlete </span>
                </p>
              </div>
            </a>
          </article>
          <article className="transition transform hover:scale-105">
            <a className="block rounded-lg bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-200 p-4" href="#">
              <h2 className="mx-4 mt-4 mb-6 font-serif text-2xl font-semibold text-white">"Best online shopping experience. Y-Mart has top-notch customer service!"</h2>
              <div className="flex items-center rounded-md px-4 py-3">
                <img className="h-12 w-12 rounded-full object-cover" src={c} alt="Simon Lewis" />
                <p className="ml-4">
                  <strong className="block text-lg font-medium text-white">Dhivesh</strong>
                  <span className="text-xs text-white"> Loyal customer </span>
                </p>
              </div>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;

