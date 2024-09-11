import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const ResumeSection = ({ title, children, className }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: sectionRef.current,
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutQuad',
            duration: 600,
            delay: 200
          });
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`mb-12 opacity-0 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default ResumeSection;