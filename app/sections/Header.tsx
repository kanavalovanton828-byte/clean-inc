'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

const nav = [
  { label: 'Уборка', href: '#cleaning' },
  { label: 'Химчистка', href: '#chemical' },
  { label: 'Мойка окон', href: '#windows' },
  { label: 'Контакты', href: '#form' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (open) return;
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (intersecting[0]) setActive(intersecting[0].target.id);
      },
      { rootMargin: '-69px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    nav.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white rounded-b-[40px] sm:rounded-b-[50px] lg:rounded-b-[100px] transition-transform duration-300 lg:translate-y-0 ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <Container>
        <div className="flex h-[60px] items-center justify-between py-3 sm:h-[69px]">
          <a
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="relative h-7 w-[70px] transition-transform duration-300 active:scale-95 sm:h-8 sm:w-[80px] lg:h-[45px] lg:w-[110px]"
          >
            <Image
              src="/assets/Logo.png"
              alt="Clean Inc"
              fill
              className="object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`rounded-[24px] px-3 py-2 text-xs font-medium transition-all duration-300 hover:bg-light-bg active:scale-95 sm:text-sm lg:rounded-[32px] lg:px-4 lg:py-3 ${
                  active === item.href.slice(1) ? 'text-brand' : 'text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+79082402525"
              className="flex items-center gap-1 text-xs text-black transition-transform duration-300 active:scale-95 sm:text-sm"
            >
              <img
                src={assets.imgTracedImage1}
                alt=""
                width={24}
                height={24}
              />
              +7 (908) 240-25-25
            </a>
            <a
              href="#form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="rounded-[28px] bg-brand transition-all duration-300 hover:bg-[#3100de] active:scale-95 px-4 py-3 text-xs font-medium text-white sm:rounded-[32px] sm:px-5 sm:py-4 sm:text-sm lg:rounded-[36px] lg:px-5 lg:py-4 lg:text-sm"
            >
              Оставить заявку
            </a>
          </div>

          <button
            onClick={() => {
              setOpen(!open);
              setHidden(false);
            }}
            className="p-2 transition-transform duration-300 active:scale-95 lg:hidden"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
              <span className="block h-0.5 w-6 bg-black" />
            </div>
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 active:scale-95 ${
                    active === item.href.slice(1) ? 'text-brand' : 'text-black'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(() => {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 px-4">
              <a
                href="tel:+79082402525"
                className="flex items-center gap-1 text-sm text-black transition-transform duration-300 active:scale-95"
              >
                <img
                  src={assets.imgTracedImage1}
                alt=""
                width={24}
                height={24}
              />
                +7 (908) 240-25-25
              </a>
              <a
                href="#form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
                  setOpen(false);
                }}
                className="rounded-[36px] bg-brand transition-all duration-300 hover:bg-[#3100de] active:scale-95 px-5 py-3 text-center text-sm font-medium text-white"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
