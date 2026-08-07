import { Header } from '../../sections/Header';
import { Footer } from '../../sections/Footer';
import { Container } from '../../components/Container';

export const metadata = {
  title: 'Пользовательское соглашение — Clean Inc',
  description: 'Пользовательское соглашение ООО «Стандарт Групп»',
};

export default function UserAgreement() {
  return (
    <>
      <Header />
      <main className="bg-light-bg py-12 lg:py-24">
        <Container>
          <div className="mx-auto max-w-[800px] space-y-6 rounded-[32px] bg-white p-6 lg:p-10">
            <h1 className="text-[28px] font-medium text-black lg:text-[32px]">
              Пользовательское соглашение
            </h1>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-transform duration-300 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Назад
            </a>
            <p className="text-sm text-gray">Дата последнего обновления: 01.01.2026</p>

            <div className="space-y-4 text-base leading-relaxed text-dark-gray">
              <h2 className="text-lg font-medium text-black">1. Предмет соглашения</h2>
              <p>
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения
                между ООО «Ваша компания тут» (ИНН: Ваш ИНН тут, ОГРН: Ваш ОГРН тут), далее — «Исполнитель»,
                и физическим лицом, использующим сайт clean-inc-perm.netlify.app (далее — «Пользователь»),
                в связи с оказанием клининговых услуг.
              </p>

              <h2 className="text-lg font-medium text-black">2. Услуги Исполнителя</h2>
              <p>
                Исполнитель оказывает следующие виды услуг: генеральная уборка, поддерживающая уборка,
                уборка после ремонта, организация пространства, химчистка мебели, мойка окон.
                Перечень и стоимость услуг определяются в момент оформления заявки.
              </p>

              <h2 className="text-lg font-medium text-black">3. Оформление заявки</h2>
              <p>
                Пользователь оформляет заявку путём заполнения формы на Сайте или по телефону.
                При оформлении заявки Пользователь обязуется предоставлять достоверную информацию
                о своём имени, контактном телефоне и объекте, подлежащем уборке.
              </p>

              <h2 className="text-lg font-medium text-black">4. Стоимость и оплата</h2>
              <p>
                Стоимость услуг определяется Исполнителем на основании информации об объекте и
                согласовывается с Пользователем до начала оказания услуг. Оплата производится
                наличным или безналичным расчётом после оказания услуг, если иное не согласовано
                сторонами.
              </p>

              <h2 className="text-lg font-medium text-black">5. Права и обязанности сторон</h2>
              <p>
                Исполнитель обязуется оказать услуги качественно и в согласованный срок.
                Пользователь обязуется обеспечить доступ к объекту и оплатить оказанные услуги
                в соответствии с согласованной стоимостью.
              </p>

              <h2 className="text-lg font-medium text-black">6. Ответственность сторон</h2>
              <p>
                За неисполнение или ненадлежащее исполнение обязательств стороны несут
                ответственность в соответствии с законодательством РФ. Исполнитель не несёт
                ответственность за повреждение имущества Пользователя, если такое повреждение
                произошло не по вине Исполнителя.
              </p>

              <h2 className="text-lg font-medium text-black">7. Разрешение споров</h2>
              <p>
                Все споры и разногласия стороны стремятся решить путём переговоров. При
                недостижении согласия спор передаётся на рассмотрение в суд в соответствии
                с законодательством РФ.
              </p>

              <h2 className="text-lg font-medium text-black">8. Реквизиты Исполнителя</h2>
              <p>
                ООО «Ваша компания тут»<br />
                ИНН: Ваш ИНН тут<br />
                ОГРН: Ваш ОГРН тут<br />
                Адрес: Ваш адрес тут<br />
                Телефон: Ваш телефон тут<br />
                Email: Ваш email тут
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
