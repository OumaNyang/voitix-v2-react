import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'glightbox/dist/css/glightbox.min.css';

const withScriptInit = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        const handleLoad = () => {
          preloader.remove();
        };
        window.addEventListener('load', handleLoad);
    
        return () => {
          window.removeEventListener('load', handleLoad);
        };
      }
      
      const selectHeader = document.querySelector('#header');
      if (selectHeader) {
        document.addEventListener('scroll', () => {
          window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
        });
      }

      const scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        const togglescrollTop = () => {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        };
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }


      new Swiper('.slides-1', {
        speed: 600,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });

      const displayAlert = () => {
        const alertBox = document.getElementById("copyWarning");
        if (alertBox) {
          alertBox.style.display = "block";
          setTimeout(() => {
            alertBox.style.display = "none";
          }, 3000);
        }
      };

      // document.addEventListener("contextmenu", (e) => {
      //   e.preventDefault();
      //   displayAlert();
      // });

      // document.addEventListener("keydown", (e) => {
      //   if ((e.ctrlKey && e.keyCode === 86) || (e.ctrlKey && e.keyCode === 67)) {
      //     e.preventDefault();
      //     displayAlert();
      //   }
      // });

      document.addEventListener("paste", (e) => {
        e.preventDefault();
        displayAlert();
      });

      return () => {
        document.removeEventListener('scroll', () => {});
        window.removeEventListener('load', () => {});
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withScriptInit;

// import React, { useEffect } from 'react';
// import Swiper from 'swiper/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'glightbox/dist/css/glightbox.min.css';
// import { useLocation } from 'react-router-dom';

// const withScriptInit = (WrappedComponent) => {
//   return (props) => {
//     const location = useLocation();

//     useEffect(() => {
//       // Preloader handling
//       const preloader = document.querySelector('#preloader');
//       const handleLoad = () => {
//         if (preloader) {
//           preloader.remove();
//         }
//       };

//       window.addEventListener('load', handleLoad);

//       // Sticky header on scroll
//       const selectHeader = document.querySelector('#header');
//       const handleScroll = () => {
//         if (selectHeader) {
//           window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
//         }
//       };

//       document.addEventListener('scroll', handleScroll);

//       // Scroll to top button
//       const scrollTop = document.querySelector('.scroll-top');
//       const togglescrollTop = () => {
//         if (scrollTop) {
//           window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//         }
//       };

//       window.addEventListener('load', togglescrollTop);
//       document.addEventListener('scroll', togglescrollTop);

//       if (scrollTop) {
//         scrollTop.addEventListener('click', () => {
//           window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//           });
//         });
//       }

//       // Swiper initialization
//       new Swiper('.slides-1', {
//         speed: 600,
//         loop: true,
//         autoplay: {
//           delay: 5000,
//           disableOnInteraction: false
//         },
//         slidesPerView: 'auto',
//         pagination: {
//           el: '.swiper-pagination',
//           type: 'bullets',
//           clickable: true
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }
//       });

//       // AOS initialization
//       AOS.init({
//         duration: 1000,
//         easing: 'ease-in-out',
//         once: true,
//         mirror: false
//       });

//       // Display copy warning alert
//       const displayAlert = () => {
//         const alertBox = document.getElementById("copyWarning");
//         if (alertBox) {
//           alertBox.style.display = "block";
//           setTimeout(() => {
//             alertBox.style.display = "none";
//           }, 3000);
//         }
//       };

//       // Prevent pasting and show warning
//       const handlePaste = (e) => {
//         e.preventDefault();
//         displayAlert();
//       };

//       document.addEventListener("paste", handlePaste);

//       // Cleanup function
//       return () => {
//         window.removeEventListener('load', handleLoad);
//         document.removeEventListener('scroll', handleScroll);
//         window.removeEventListener('load', togglescrollTop);
//         document.removeEventListener('scroll', togglescrollTop);
//         document.removeEventListener("paste", handlePaste);
//       };
//     }, [location]);

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withScriptInit;
