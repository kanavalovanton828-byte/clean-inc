'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [services, setServices] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; service?: string }>({});

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const serviceOptions = [
    { value: 'general', label: 'Генеральная уборка' },
    { value: 'support', label: 'Поддерживающая уборка' },
    { value: 'space', label: 'Организация пространства' },
    { value: 'repair', label: 'Уборка после ремонта' },
    { value: 'chemical', label: 'Химчистка' },
    { value: 'windows', label: 'Мойка окон' },
  ];

  const toggleService = (value: string) => {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const selectedLabels = services
    .map((v) => serviceOptions.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(', ');

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
    if (services.length === 0) {
      newErrors.service = 'Выберите хотя бы одну услугу';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      const token = '8797959717:AAFAgb8wt0PtbKmB6JZC1w5B1IcHRKzkoYw';
      const chatId = '1752423900';
      const message = [
        '<b>Новая заявка с сайта Clean Inc</b>',
        '',
        `<b>Имя:</b> ${name}`,
        `<b>Телефон:</b> ${phone}`,
        `<b>Услуги:</b> ${selectedLabels}`,
      ].join('\n');

      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName('');
        setPhone('');
        setServices([]);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
    setSubmitting(false);
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
            onSubmit={handleSubmit}
            className="space-y-5 rounded-[24px] bg-light-bg p-5 sm:space-y-6 sm:rounded-[28px] sm:p-6 lg:rounded-[32px] lg:p-10"
          >

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
              <label className="text-base font-medium text-dark-gray sm:text-lg">
                Тип услуги
              </label>
              <input type="hidden" name="service" value={selectedLabels} />
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex w-full items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm text-[#3A3A3A] outline-none sm:px-5 sm:text-base lg:px-6 lg:py-5 ${
                    errors.service ? 'ring-2 ring-red-500' : ''
                  }`}
                >
                  <span className={selectedLabels ? '' : 'text-[#808080]'}>
                    {selectedLabels || 'Выберите услугу'}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-2 w-3 shrink-0 text-[#808080] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {errors.service && (
                  <p className="text-sm text-red-500">{errors.service}</p>
                )}
                {dropdownOpen && (
                  <div className="absolute z-30 mt-2 w-full rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                    {serviceOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#3A3A3A] transition-colors hover:bg-light-bg sm:text-base"
                      >
                        <input
                          type="checkbox"
                          checked={services.includes(option.value)}
                          onChange={() => toggleService(option.value)}
                          className="h-4 w-4 shrink-0 accent-brand"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
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
              {submitted ? (
                <div className="w-full rounded-[28px] bg-green-50 px-5 py-4 text-center text-base font-medium text-green-600 whitespace-nowrap sm:rounded-[32px] sm:py-5 sm:text-lg lg:rounded-[36px]">
                  Свяжемся с вами в течение дня
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-[28px] bg-brand transition-colors hover:bg-[#3100de] px-5 py-4 text-base font-medium text-white disabled:opacity-60 sm:rounded-[32px] sm:py-5 sm:text-lg lg:rounded-[36px] lg:py-5"
                >
                  {submitting ? 'Отправка...' : 'Отправить заявку'}
                </button>
              )}
              {submitError && (
                <p className="text-center text-sm text-red-500">
                  Ошибка отправки. Попробуйте позже или позвоните нам.
                </p>
              )}
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
