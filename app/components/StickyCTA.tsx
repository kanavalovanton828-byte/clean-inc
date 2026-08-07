'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('form');
      if (!form) {
        setVisible(window.scrollY > 400);
        return;
      }
      const rect = form.getBoundingClientRect();
      const formInView = rect.top < window.innerHeight && rect.bottom > 0;
      setVisible(!formInView && window.scrollY > 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleOrder = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 pb-3 transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-[18px] px-14">
        <a
          href="tel:+79082402525"
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center transition-transform active:scale-95"
          aria-label="Позвонить"
        >
          <Image
            src="/assets/Телефон.png"
            alt="Позвонить"
            width={46}
            height={46}
            className="rounded-full object-contain"
          />
        </a>
        <button
          onClick={handleOrder}
          className="h-[46px] flex-1 rounded-[23px] bg-brand text-[18px] font-medium text-white transition-colors active:scale-95"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
}
