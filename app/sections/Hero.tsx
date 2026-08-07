'use client';

import Image from 'next/image';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

export function Hero() {
  return (
    <section className="py-6 sm:py-9 lg:py-16 xl:py-20 2xl:py-24">
      <Container>
        <div className="relative flex h-auto flex-col items-center gap-6 overflow-hidden rounded-[24px] bg-white p-5 sm:h-[460px] sm:rounded-[28px] sm:p-6 md:h-auto md:flex-row md:items-center md:justify-start md:py-[60px] md:rounded-[32px] lg:flex-row lg:h-[480px] lg:items-center lg:justify-start lg:gap-8 lg:p-8 xl:h-[500px] xl:gap-10 xl:p-10 xl:pr-[104px] 2xl:p-[60px]">
          <div className="order-2 flex w-full flex-col lg:order-1 lg:w-[440px] xl:w-[520px] 2xl:w-[580px]">
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-full border border-light-blue bg-light-bg px-3 py-1.5">
                <img
                  src={assets.imgVector}
                  alt=""
                  width={12}
                  height={12}
                />
                <span className="text-xs text-gray lg:text-sm">
                  Надежный персонал
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-light-blue bg-light-bg px-3 py-1.5">
                <img
                  src={assets.imgVector1}
                  alt=""
                  width={12}
                  height={12}
                />
                <span className="text-xs text-gray lg:text-sm">
                  Качественные материалы
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-5">
              <h1 className="text-[22px] font-medium leading-tight text-black sm:text-[26px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px] md:whitespace-nowrap">
                Клининг в Перми за 24 часа
              </h1>
              <p className="text-sm text-gray sm:text-base md:text-[15px] md:max-w-[320px] lg:text-base lg:max-w-none">
                Уборка квартир, домов и офисов. Химчистка диванов, мойка окон, уборка после ремонта. Выезд на следующий день после заявки.
              </p>
            </div>

            <a
              href="#form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-7 inline-flex w-fit items-center justify-center rounded-[28px] bg-brand transition-all duration-300 hover:bg-[#3100de] active:scale-95 px-5 py-3 text-sm font-medium text-white sm:rounded-[32px] sm:px-6 sm:py-4 lg:mt-9 lg:rounded-[36px] lg:px-7 lg:text-base xl:px-9 xl:text-lg 2xl:px-9 2xl:text-lg"
            >
              Выезд от 4000 ₽
            </a>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-2 top-[8px] hidden h-[calc(100%-8px)] sm:right-3 md:block md:right-[16px] lg:right-[16px] lg:top-[10px] lg:h-[calc(100%-10px)] xl:right-[60px] 2xl:right-[100px] lg:block">
            <Image
              src={assets.cleangirl}
              alt="Сотрудница клининговой компании Clean Inc в Перми"
              width={500}
              height={500}
              priority
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
