import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const useTyped = (strings: string[], options = {}) => {
  const elementRef = useRef(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current!, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      ...options,
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
  }, [strings, options]);

  return elementRef;
};

export default useTyped;