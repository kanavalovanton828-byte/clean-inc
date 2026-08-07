import { Header } from '../../sections/Header';
import { Footer } from '../../sections/Footer';
import { Container } from '../../components/Container';

export const metadata = {
  title: 'Обработка персональных данных — Clean Inc',
  description: 'Согласие на обработку персональных данных ООО «Стандарт Групп»',
};

export default function DataProcessing() {
  return (
    <>
      <Header />
      <main className="bg-light-bg py-12 lg:py-24">
        <Container>
          <div className="mx-auto max-w-[800px] space-y-6 rounded-[32px] bg-white p-6 lg:p-10">
            <h1 className="text-[28px] font-medium text-black lg:text-[32px]">
              Согласие на обработку персональных данных
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
              <p>
                Пользователь, оставляя заявку на сайте clean-inc-perm.netlify.app, operated by
                ООО «Ваша компания тут» (ИНН: Ваш ИНН тут, ОГРН: Ваш ОГРН тут), далее — «Оператор»,
                даёт своё согласие на обработку своих персональных данных в соответствии с
                Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>

              <h2 className="text-lg font-medium text-black">1. Перечень персональных данных</h2>
              <p>Пользователь даёт согласие на обработку следующих персональных данных:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Фамилия, имя, отчество;</li>
                <li>Контактный телефон;</li>
                <li>Адрес электронной почты;</li>
                <li>Адрес объекта уборки;</li>
                <li>Иные данные, предоставленные при заполнении форм на Сайте.</li>
              </ul>

              <h2 className="text-lg font-medium text-black">2. Цели обработки</h2>
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Оказание клининговых услуг;</li>
                <li>Заключение и исполнение договоров;</li>
                <li>Информирование о статусе заявки;</li>
                <li>Связь с Пользователем по вопросам оказания услуг.</li>
              </ul>

              <h2 className="text-lg font-medium text-black">3. Перечень действий с персональными данными</h2>
              <p>
                Согласие даётся Оператору для совершения следующих действий с персональными
                данными: сбор, запись, систематизация, накопление, хранение, уточнение
                (обновление, изменение), извлечение, использование, передача (предоставление,
                доступ), блокирование, удаление, уничтожение.
              </p>
              <p>
                Обработка персональных данных осуществляется как с использованием средств
                автоматизации, так и без их использования.
              </p>

              <h2 className="text-lg font-medium text-black">4. Срок действия согласия</h2>
              <p>
                Согласие действует до момента его отзыва Пользователем. Пользователь может
                отозвать согласие путём направления письменного заявления Оператору по адресу: Ваш адрес тут,
                или по электронной почте Ваш email тут.
              </p>

              <h2 className="text-lg font-medium text-black">5. Передача данных третьим лицам</h2>
              <p>
                Оператор не передаёт персональные данные третьим лицам без согласия Пользователя,
                за исключением случаев, предусмотренных законодательством РФ.
              </p>

              <h2 className="text-lg font-medium text-black">6. Контактная информация</h2>
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
