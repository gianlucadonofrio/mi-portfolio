import { useEffect } from 'react';
import { useRef } from 'react';

export const ButtonToTop = () => {
  const buttonScrollTop = useRef(null);

  const scrollTop = () => {
    if (document.documentElement.scrollTop < 400) {
      buttonScrollTop.current.style.display = 'none';
    } else {
      buttonScrollTop.current.style.display = 'block';
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollTop);
    return () => {
      window.removeEventListener('scroll', scrollTop);
    };
  });

  return (
    <button
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      ref={buttonScrollTop}
      className="btn-scroll-top"
      style={{
        display: 'none',
      }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};
