'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-3 rounded-2xl bg-black/95 p-4 shadow-lg sm:flex-row sm:items-center sm:gap-4 sm:p-5">
        <p className="text-center text-xs leading-relaxed text-white sm:text-left sm:text-sm">
          Мы используем cookie и обрабатываем персональные данные в соответствии с{' '}
          <Link href="/legal/privacy-policy/" className="underline text-white hover:text-gray-300">
            Политикой конфиденциальности
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-full bg-brand px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#3100de] sm:text-sm"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
