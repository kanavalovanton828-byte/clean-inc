const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });
  return res.ok;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, phone, service } = data;

    const message = [
      '<b>Новая заявка с сайта Clean Inc</b>',
      '',
      `<b>Имя:</b> ${name || 'не указано'}`,
      `<b>Телефон:</b> ${phone || 'не указан'}`,
      `<b>Услуги:</b> ${service || 'не выбраны'}`,
    ].join('\n');

    const sent = await sendTelegramMessage(message);

    if (!sent) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send message' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};
