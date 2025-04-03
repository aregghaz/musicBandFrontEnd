import React, { useState, useEffect, useRef, FC } from 'react';
import { BASE_URL } from '../../../utils';

interface ILazyLoadSection {
  className?: string;
  id: string;
  endpoint: string;
  renderData: (e: any) => any;
}

const LazyLoadSection: FC<ILazyLoadSection> = ({
  id,
  endpoint,
  renderData,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

  useEffect(() => {
    if (isVisible) {
      fetch(`${BASE_URL}/${endpoint}`)
        .then((response: any) => response.json())

        
        .then((data) => {
            setData(data)
        })

        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }
  }, [isVisible, endpoint]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {renderData(data)}
    </section>
  );
};

export default LazyLoadSection;
