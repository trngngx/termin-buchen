import {CHECK_INTERVAL} from './const';

export const config = {
  telegramToken: process.env.TELEGRAM_TOKEN || '',
  telegramChatID: parseInt(process.env.TELEGRAM_CHATID || '0', 10),
  mainCitizenship: process.env.MAIN_CITIZENSHIP || 'Vietnam',
  numberOfPeople: process.env.NUMBER_OF_PEOPLE || 'one person',
  liveWith: process.env.LIVE_WITH || 'no',
//  partnerCitizenship: process.env.PARTNER_CITIZENSHIP || 'Russian Federation',
  reason: process.env.REASON || 'extend',
  checkInterval: parseInt(
    process.env.CHECK_INTERVAL || CHECK_INTERVAL.toString(),
    10
  ),
};
