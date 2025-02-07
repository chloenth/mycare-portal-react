import { useEffect, useState, useRef } from 'react';

const useScrollNavigation = () => {
  const containerRef = useRef(null); // Hook manages the ref
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.clientWidth;
        const activeDot = Math.ceil(scrollLeft / width);
        setActiveDot(activeDot);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return { containerRef, activeDot }; // Return both ref & activeDot
};

export default useScrollNavigation;
