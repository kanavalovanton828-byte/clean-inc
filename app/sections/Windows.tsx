'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Container } from '../components/Container';

const CARD_WIDTH = 309;
const GAP = 28;
const STEP = CARD_WIDTH + GAP;
const DOT2 = STEP * 2;

function getCardWidth(el: HTMLElement) {
  const first = el.children[0] as HTMLElement | undefined;
  if (!first) return STEP;
  const style = window.getComputedStyle(el);
  const gap = parseFloat(style.columnGap || style.gap || '0') || GAP;
  return first.offsetWidth + gap;
}

const windows = [
  {
    image: '/assets/Одностворчатое.png',
    title: 'Одностворчатое',
    price: '300 ₽',
    subPrice: '400 ₽',
    imagePosition: 'center' as const,
  },
  {
    image: '/assets/Двустворчатое.png',
    title: 'Двустворчатое',
    price: '600 ₽',
    subPrice: '800 ₽',
    imagePosition: 'center' as const,
  },
  {
    image: '/assets/Трехстворчатое.png',
    title: 'Трехстворчатое',
    price: '800 ₽',
    subPrice: '1100 ₽',
    imagePosition: 'right' as const,
  },
  {
    image: '/assets/Входная%20групппа.png',
    title: 'Входная группа',
    price: '800 ₽',
    subPrice: '1000 ₽',
    imagePosition: 'right' as const,
  },
  {
    image: '/assets/Лоджия%20обычная.png',
    title: 'Лоджия обычная',
    price: '1500 ₽',
    subPrice: '2000 ₽',
    imagePosition: 'right' as const,
  },
  {
    image: '/assets/Лоджия%20обычная.png',
    title: 'Лоджия обычная',
    price: '400 ₽',
    subPrice: '/за створку',
    imagePosition: 'right' as const,
  },
];

type WindowItem = typeof windows[number];

function WindowCard({ item }: { item: WindowItem }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
      className="relative flex h-[280px] w-[240px] shrink-0 snap-start cursor-pointer flex-col gap-[14px] rounded-2xl bg-white p-5 transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(203,189,255,0.25)] sm:h-[300px] sm:w-[280px] sm:p-6 lg:h-[336px] lg:w-[309px] lg:gap-[18px]"
    >
      <div className="relative h-[180px] w-full overflow-hidden rounded-2xl sm:h-[200px] lg:h-[218px]">
        <Image
          src={item.image}
          alt={`${item.title} — мойка окон в Перми`}
          fill
          loading="lazy"
          className={`object-contain ${
            item.imagePosition === 'center' ? 'object-bottom' : 'object-right-bottom'
          }`}
          sizes="309px"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-base font-medium text-[#141414] sm:text-[18px]">{item.title}</h3>
        <div className="flex items-end gap-1.5">
          <span className="text-lg font-medium leading-none text-[#141414] sm:text-[20px] lg:text-[22px]">{item.price}</span>
          {item.subPrice && (
            <span className="flex items-center gap-1 text-[11px] leading-none text-[#5E5E5E] sm:text-[12px]">
              {item.subPrice}
              {item.subPrice.includes('₽') && (
                <div
                  className="relative -m-4 cursor-pointer p-4"
                  onMouseLeave={() => setShowInfo(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowInfo((v) => !v);
                    }}
                    className="fill-[#9CA3AF] transition-colors hover:fill-brand"
                  >
                    <path d="M11 17h2v-6h-2zm1.713-8.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                  </svg>
                  {showInfo && (
                    <div className="absolute left-[calc(100%_+_6px)] top-1/2 z-20 -translate-y-1/2 whitespace-nowrap rounded-lg bg-brand px-3 py-2 text-[12px] font-medium text-white shadow-lg">
                      С фрамугой
                    </div>
                  )}
                </div>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Windows() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft;
    const mid0 = STEP / 2;
    const mid1 = (STEP + DOT2) / 2;
    if (left < mid0) setActiveDot(0);
    else if (left < mid1) setActiveDot(1);
    else setActiveDot(2);
  }, []);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getCardWidth(el);
    const start = el.scrollLeft;
    const target = start + (dir === 'right' ? step : -step);
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [handleScroll]);

  return (
    <section id="windows" className="bg-light-bg pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-16 lg:pb-20 xl:pt-20 xl:pb-24 2xl:pt-10 2xl:pb-24">
      <Container>
        <h2 className="mb-6 text-[22px] font-normal text-black sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
          Мойка окон в Перми
        </h2>

        <div className="relative w-[calc(50%_+_50vw)]">
          <div className="absolute top-[calc(100%_+_16px)] right-4 z-10 hidden gap-4 sm:top-[calc(100%_+_20px)] sm:right-6 sm:gap-5 lg:flex lg:top-[calc(100%_+_24px)] lg:right-8 lg:gap-6 xl:right-16 2xl:right-[300px]">
            <button
              type="button"
              onClick={() => scrollBy('left')}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_0_16px_rgba(184,184,184,0.15)] transition-colors hover:bg-[#141414]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 scale-x-[-1] text-black transition-colors group-hover:text-white"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy('right')}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_0_16px_rgba(184,184,184,0.15)] transition-colors hover:bg-[#141414]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-black transition-colors group-hover:text-white"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scroll-smooth flex w-full gap-5 overflow-x-auto overflow-y-hidden pr-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:pr-6 lg:gap-7 lg:pr-[100px] xl:pr-[200px] 2xl:pr-[300px]"
          >
            {windows.map((w, i) => (
              <WindowCard key={w.title + i} item={w} />
            ))}
          </div>

          <div
            className={`pointer-events-none absolute right-0 top-0 hidden h-[336px] w-[400px] bg-gradient-to-l from-light-bg to-transparent transition-opacity duration-300 lg:block ${
              activeDot === 2 ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </Container>
    </section>
  );
}
