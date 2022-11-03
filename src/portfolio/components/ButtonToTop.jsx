import { useEffect } from 'react';
import { useRef } from 'react';

export const ButtonToTop = () => {
  const buttonScrollTop = useRef(null);

  const scrollTop = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollTop.current.style.display = 'block';
    } else {
      buttonScrollTop.current.style.display = 'none';
    }
  };

  useEffect(() => {
    window.onscroll = () => scrollTop();
  });

  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      ref={buttonScrollTop}
    >
      <img src={'./icons/arrow-up.svg'} alt="Arrow Up Icon" className="btn-scroll-top"/>
    </button>
  );
};
