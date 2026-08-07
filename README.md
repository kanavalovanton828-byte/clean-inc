# Clean Inc — landing

Лендинг клининговой компании Clean Inc (Пермь). Вёрстка по макету из Figma.

## Стек

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Netlify Static

## SEO

- `metadata` в `app/layout.tsx`
- `sitemap.ts`
- `robots.ts`
- `viewport` и Open Graph

## Ассеты

Все растровые изображения выгружены из Figma и сконвертированы в WebP для скорости загрузки.

## Форма

Форма настроена через `data-netlify="true"` и будет обрабатываться Netlify Forms после деплоя. Ссылка на Telegram в шапке и подвале.

## Деплой на Netlify

1. Импортируйте репозиторий в Netlify.
2. Команда сборки: `npm run build`.
3. Папка публикации: `dist`.

## Примечание про Telegram

Для автоматической отправки сообщений из формы напрямую в Telegram нужен токен бота и `chat_id` получателя. Сейчас форма отправляет заявку через Netlify Forms, а Telegram используется как контакт для связи.
