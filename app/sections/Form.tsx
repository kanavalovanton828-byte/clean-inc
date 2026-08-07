'use client';

import { useState } from 'react';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

const contacts = [
  {
    icon: '/assets/Телеграм.png',
    label: 'Телеграм',
    value: 'Clean.inc',
    href: 'https://t.me/cleaninc_perm',
  },
  {
    icon: '/assets/Телефон.png',
    label: 'Телефон',
    value: '+7 (908) 240-25-25',
    href: 'tel:+79082402525',
  },
  {
    icon: '/assets/инстаграм.png',
    label: 'Инстаграм',
    value: 'clean.inc.perm',
    href: 'https://instagram.com/clean.inc.perm',
  },
];

export function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    const nameLetters = name.replace(/[^a-zA-Zа-яА-ЯёЁ]/g, '');
    if (nameLetters.length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 буквы';
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length !== 11) {
      newErrors.phone = 'Телефон должен содержать 11 цифр';
    }
    if (!service) {
      newErrors.service = 'Выберите тип услуги';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    (e.target as HTMLFormElement).submit();
  };

  return (
    <section
      id="form"
      className="rounded-t-[40px] bg-white px-4 py-8 sm:rounded-t-[50px] sm:py-10 lg:rounded-t-[100px] lg:py-16 xl:py-20 2xl:py-24"
    >
      <Container>
        <div className="mx-auto max-w-[450px] space-y-6 sm:max-w-[500px] sm:space-y-7 lg:max-w-[550px] lg:space-y-8">
          <div className="text-center">
            <h2 className="mb-2 text-[22px] text-black sm:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
              Заказать клининг в Перми
            </h2>
            <p className="text-sm text-gray sm:text-base lg:text-base">
              Оставьте заявку — рассчитаем стоимость уборки и свяжемся с вами в течение дня
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[24px] bg-light-bg p-5 sm:space-y-6 sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-10"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium text-dark-gray sm:text-lg">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Петров"
                  className={`w-full rounded-2xl bg-white px-4 py-4 text-sm text-[#3A3A3A] placeholder:text-[#808080] outline-none sm:px-5 sm:text-base lg:px-6 lg:py-5 ${
                    errors.name ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-base font-medium text-dark-gray sm:text-lg">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (900) 000-00-00"
                  className={`w-full rounded-2xl bg-white px-4 py-4 text-sm text-[#3A3A3A] placeholder:text-[#808080] outline-none sm:px-5 sm:text-base lg:px-6 lg:py-5 ${
                    errors.phone ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-base font-medium text-dark-gray sm:text-lg">
                Тип услуги
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={`w-full appearance-none rounded-2xl bg-white px-4 py-4 text-sm text-[#3A3A3A] outline-none sm:px-5 sm:text-base lg:px-6 lg:py-5 ${
                    errors.service ? 'ring-2 ring-red-500' : ''
                  }`}
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  <option value="general">Генеральная уборка</option>
                  <option value="support">Поддерживающая уборка</option>
                  <option value="space">Организация пространства</option>
                  <option value="repair">Уборка после ремонта</option>
                  <option value="chemical">Химчистка</option>
                  <option value="windows">Мойка окон</option>
                </select>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service}</p>
                )}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-6 top-1/2 h-2 w-3 -translate-y-1/2 text-[#808080]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#7f7f7f]">
                Отправляя форму, вы соглашаетесь с{' '}
                <a href="/legal/privacy-policy/" className="underline">
                  Политикой конфиденциальности
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full rounded-[28px] bg-brand transition-colors hover:bg-[#3100de] px-5 py-4 text-base font-medium text-white sm:rounded-[32px] sm:py-5 sm:text-lg lg:rounded-[36px] lg:py-5"
              >
                Отправить заявку
              </button>
            </div>
          </form>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-7">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-2 text-center sm:gap-3"
              >
                <img
                  src={c.icon}
                  alt={c.label}
                  width={28}
                  height={28}
                  className="rounded-2xl sm:h-9 sm:w-9 lg:h-9 lg:w-9"
                />
                <div>
                  <p className="text-xs text-gray sm:text-sm lg:text-sm">{c.label}</p>
                  <p className="text-sm font-medium text-dark-gray sm:text-base lg:text-base">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
