'use client';

import Image from 'next/image';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

const items = [
  { image: '/assets/Диван.png', title: 'Диван', price: 'от 1500 ₽', time: '~2 часов' },
  { image: '/assets/Спальное%20место.png', title: 'Спальное место', price: 'от 500 ₽', time: '~2 часов' },
  { image: '/assets/Матрас.png', title: 'Матрас', price: 'от 700 ₽', time: '~2 часов' },
  { image: '/assets/Подушки.png', title: 'Подушки', price: 'от 100 ₽/шт', time: '~2 часов' },
  { image: '/assets/Избавимся%20от%20запахов.png', title: 'Избавимся от запахов', price: '50 ₽/м²', time: '~2 часов' },
  { image: '/assets/Сушка%20мебели.png', title: 'Сушка мебели', price: 'от 400 ₽', time: '~2 часов' },
  { image: '/assets/Кресло.png', title: 'Кресло, стул или пуфик', price: 'от 600 ₽', time: '~2 часов' },
];

type Item = typeof items[number];

function Card({ item, variant = 'bottom' }: { item: Item; variant?: 'top' | 'bottom' }) {
  return (
    <div
      onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
      className="relative flex h-[180px] cursor-pointer overflow-hidden rounded-2xl bg-white p-4 transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(203,189,255,0.25)] sm:h-[200px] sm:p-5"
    >
      <div className="z-10 flex h-full w-1/2 flex-col justify-between">
        <h3 className="text-base font-medium leading-tight text-black sm:text-lg">
          {item.title}
        </h3>
        <div className="space-y-0.5">
          <p className="text-base font-medium text-black sm:text-lg">{item.price}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray sm:text-sm">
            <img
              src={assets.imgFrame}
              alt=""
              width={12}
              height={12}
            />
            {item.time}
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2">
        <Image
          src={item.image}
          alt={`${item.title} — химчистка в Перми`}
          fill
          loading="lazy"
          className={`object-contain ${variant === 'top' ? 'object-center' : 'object-right-bottom'}`}
          sizes="(max-width: 1024px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}

export function Chemical() {
  return (
    <section id="chemical" className="bg-light-bg pt-8 pb-8 sm:pt-10 sm:pb-9 lg:pt-16 lg:pb-10 xl:pt-20 xl:pb-10 2xl:pt-24 2xl:pb-10">
      <Container>
        <h2 className="mb-6 text-[22px] font-normal text-black sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
          Химчистка диванов и мебели
        </h2>

        <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
            {items.slice(0, 4).map((item) => (
              <Card key={item.title} item={item} variant="top" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {items.slice(4).map((item) => (
              <Card key={item.title} item={item} variant="bottom" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
