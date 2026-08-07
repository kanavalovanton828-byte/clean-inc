import Image from 'next/image';
import { Container } from '../components/Container';
import { assets } from '@/lib/assets';

const contacts = [
  { label: 'Телефон', value: '+7 (908) 240-25-25', href: 'tel:+79082402525' },
  { label: 'Инстаграм', value: 'clean.inc.perm', href: 'https://instagram.com/clean.inc.perm' },
  { label: 'Телеграм', value: 'Clean.inc', href: 'https://t.me/cleaninc_perm' },
  { label: 'Email', value: 'Ваш email', href: 'mailto:ваш-email@тут.ру' },
];

const docs = [
  { label: 'Политика конфиденциальности', href: '/legal/privacy-policy/' },
  { label: 'Пользовательское соглашение', href: '/legal/user-agreement/' },
  { label: 'Обработка персональных данных', href: '/legal/data-processing/' },
];

export function Footer() {
  return (
    <footer id="contacts" className="rounded-t-[40px] bg-black sm:rounded-t-[50px] lg:rounded-t-[100px]">
      <Container>
        <div className="flex flex-col gap-8 py-8 sm:gap-10 sm:py-10 lg:flex-row lg:items-start lg:justify-between lg:py-16 xl:py-20 2xl:py-24">
          <div className="max-w-[300px] space-y-3 sm:max-w-[340px] sm:space-y-4 lg:max-w-[383px]">
            <div className="relative h-9 w-20 sm:h-10 sm:w-24 lg:h-[45px] lg:w-[110px]">
              <Image
                src={assets.imgImage96}
                alt="Clean Inc"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white sm:text-base">
              Клининговая компания Clean Inc в Перми: уборка квартир, домов и коттеджей,
              генеральная уборка, уборка после ремонта, химчистка диванов и мебели, мойка окон
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm text-white sm:text-base">Контакты</h4>
            <div className="space-y-3 sm:space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block space-y-1.5"
                >
                  <p className="text-sm text-gray sm:text-base">{c.label}</p>
                  <p className="text-base font-medium text-white sm:text-lg">{c.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm text-white sm:text-base">Документы</h4>
            <div className="space-y-3 sm:space-y-4">
              {docs.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  className="block text-sm text-gray transition-colors hover:text-white sm:text-base"
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-footer-line" />

        <p className="py-6 text-sm text-white sm:py-8 sm:text-base">
          Ваш адрес тут © 2026 Ваша компания тут. ИНН: Ваш ИНН тут. ОГРН: Ваш ОГРН тут.
        </p>
      </Container>
    </footer>
  );
}
