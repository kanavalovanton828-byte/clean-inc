'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

const tabs = ['По подписке', 'Разовая'];

const cards = [
  {
    icon: assets.imgFrame96,
    title: 'Генеральная',
    desc: 'Приведём квартиру в идеальный порядок',
    features: [
      'Убираем загрязнения любой степени',
      'Моем окна и убираем по всей высоте',
    ],
    time: 'Работа от 4 часов',
    price: '3500',
  },
  {
    icon: assets.imgFrame97,
    title: 'Поддерживающая',
    desc: 'Очистим квартиру от видимой грязи',
    features: ['Удаляем легкие загрязнения', 'Клининг до 170 см'],
    time: 'Работа от 2 часов',
    price: '1200',
    oldPrice: '1600',
    popular: true,
  },
  {
    icon: assets.imgFrame99,
    title: 'После ремонта',
    desc: 'Уберём хлам и пыль в квартире от ремонта',
    features: ['Убираем пыль и грязь от ремонта', 'Удаляем легкие загрязнения'],
    time: 'Работа от 4 часов',
    price: '3500',
  },
  {
    icon: assets.imgFrame98,
    title: 'Организация пространства',
    desc: 'Сделаем комнату удобной в использовании',
    features: [
      'Расставим предметы чтобы было удобно',
      'Научим как распоряжаться пространством',
    ],
    time: 'Работа от 2 часов',
    price: '1000',
  },
];

function PriceBlock({
  price,
  oldPrice,
  popular,
}: {
  price: string;
  oldPrice?: string;
  popular?: boolean;
}) {
  if (popular) {
    return (
      <div
        onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex cursor-pointer items-center justify-center gap-[10px] rounded-2xl bg-brand px-5 py-4 text-white transition-colors hover:bg-[#3100de]"
      >
        {oldPrice && (
          <span className="invisible text-[10px] text-[#e3e3e3] md:text-sm">
            От {oldPrice} ₽
          </span>
        )}
        <span>
          <span className="text-[12px] md:text-[18px]">От</span>
          <span className="mx-1 text-[12px] md:text-[22px]">{price}</span>
          <span className="text-[12px] md:text-[22px]">₽</span>
        </span>
        {oldPrice && (
          <span className="text-[10px] text-[#e3e3e3] line-through decoration-[#ff7c7c] md:text-sm">
            От {oldPrice} ₽
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
      className="flex cursor-pointer items-center justify-center rounded-2xl bg-brand-blue px-5 py-4 text-white transition-colors hover:bg-[#5a30f0]"
    >
      <span className="text-[12px] md:text-[18px]">От</span>
      <span className="mx-1 text-[12px] md:text-[22px]">{price}</span>
      <span className="text-[12px] md:text-[22px]">₽</span>
    </div>
  );
}

export function Cleaning() {
  const [active, setActive] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [subWidth, setSubWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const subChipRef = useRef<HTMLSpanElement>(null);
  const isSub = active === 0;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const threshold = (el.children[1] as HTMLElement | undefined)?.offsetLeft ?? 0;
    setActiveDot(el.scrollLeft > threshold / 2 ? 1 : 0);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [active]);

  useEffect(() => {
    if (subChipRef.current) {
      setSubWidth(subChipRef.current.offsetWidth);
    }
  }, []);

  useLayoutEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0 });
    }
  }, [isMobile]);

  const orderedCards = isMobile
    ? [cards[1], cards[0], cards[2], cards[3]]
    : cards;

  const displayedCards = orderedCards.map((card) =>
    card.title === 'Поддерживающая'
      ? { ...card, popular: true, price: isSub ? '1200' : '1600', oldPrice: isSub ? '1600' : undefined }
      : { ...card }
  );

  const scrollByCard = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const step = (el.children[1] as HTMLElement | undefined)?.offsetLeft ?? 0;
    const start = el.scrollLeft;
    const target = start + (dir === 'right' ? step : -step);
    const startTime = performance.now();
    const duration = 500;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      el.scrollLeft = start + (target - start) * easeOutQuart(t);
      if (t < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <section id="cleaning" className="bg-white rounded-[24px] py-8 sm:rounded-[32px] sm:py-10 lg:rounded-[100px] lg:py-16 xl:py-20 2xl:py-24">
      <Container>
        <div className="mb-6 flex flex-col gap-4 lg:mb-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[22px] font-normal text-black sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">Уборка квартир в Перми</h2>
          <div className="flex w-full rounded-[24px] bg-light-bg p-[5px] sm:rounded-[28px] sm:p-[6px] lg:w-[400px] xl:w-[440px] 2xl:w-[467px]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActive(i)}
                className={`flex-1 rounded-[24px] px-[14px] py-[7px] text-[16px] font-medium transition-colors sm:text-[18px] lg:rounded-[32px] lg:px-[18px] lg:py-[8px] lg:text-[20px] ${
                  active === i
                    ? 'bg-black text-white'
                    : 'text-gray'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-[calc(50%_+_50vw)]">
          <div className="absolute top-[calc(100%_+_16px)] right-4 z-10 hidden gap-4 sm:top-[calc(100%_+_20px)] sm:right-6 sm:gap-5 lg:flex lg:top-[calc(100%_+_24px)] lg:right-8 lg:gap-6 xl:right-16 2xl:right-[300px]">
            <button
              type="button"
              onClick={() => scrollByCard('left')}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_0_16px_rgba(184,184,184,0.15)] transition-colors hover:bg-[#141414]"
            >
              <svg
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
              onClick={() => scrollByCard('right')}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_0_16px_rgba(184,184,184,0.15)] transition-colors hover:bg-[#141414]"
            >
              <svg
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
            className="scroll-smooth flex h-[440px] w-full min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto py-4 pl-9 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[500px]:gap-6 md:pl-4 sm:gap-7 sm:h-[460px] md:pr-4 lg:h-[492px] lg:gap-8 lg:pr-[600px] xl:pr-[680px] 2xl:pr-[741px]">
            {displayedCards.map((card) => (
              <div
                key={card.title}
                className="relative w-full shrink-0 snap-start rounded-[24px] border border-[#F6F4FF] bg-white p-5 shadow-[0_0_16px_rgba(184,184,184,0.1)] transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(203,189,255,0.25)] md:border-0 min-[500px]:w-[260px] sm:w-[280px] sm:rounded-[28px] sm:p-6 md:w-[calc((100vw-32px-32px-24px)/2)] lg:w-[360px] lg:rounded-[32px] xl:w-[380px] 2xl:w-[409px]"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="relative h-12 w-12 overflow-hidden">
                        <Image
                          src={card.icon}
                          alt={`${card.title} — уборка в Перми`}
                          fill
                          loading="lazy"
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>

                      {card.popular && (
                        <div className="flex gap-1.5 sm:gap-2">
                          <motion.span
                            animate={{ x: isSub ? 0 : subWidth + 8 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#017ad4] to-[#00a5fe] px-1.5 py-1 text-[10px] font-semibold text-white sm:px-2 sm:py-1.5 sm:text-xs"
                          >
                            Популярная
                          </motion.span>
                          <motion.span
                            ref={subChipRef}
                            animate={{
                              x: isSub ? 0 : subWidth + 8 + 100,
                              opacity: isSub ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#017ad4] to-[#00a5fe] px-1.5 py-1 text-[10px] font-semibold text-white sm:px-2 sm:py-1.5 sm:text-xs"
                          >
                            По подписке
                          </motion.span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl text-black sm:text-2xl">{card.title}</h3>
                      <p className="text-sm text-gray sm:text-base md:text-[14px] md:text-[#5E5E5E] lg:text-base lg:text-gray">{card.desc}</p>
                    </div>

                    <ul className="space-y-2 sm:space-y-3">
                      {card.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-xs text-dark-gray md:text-[14px] lg:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-1.5 text-sm text-gray">
                      <img
                        src={assets.imgFrame}
                        alt=""
                        width={12}
                        height={12}
                      />
                      {card.time}
                    </div>
                    <PriceBlock
                      price={card.price}
                      oldPrice={card.oldPrice}
                      popular={card.popular}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-[460px] w-[254px] bg-gradient-to-l from-white to-transparent opacity-100 lg:block"
          />
        </div>

        <p className="mt-4 text-sm text-gray sm:mt-6 sm:text-base">
          При покупке нескольких уборок вы получите скидку
        </p>
      </Container>
    </section>
  );
}
