# Telegram Bot Sozlash

## 1. Telegram Bot Yaratish

1. Telegram da @BotFather ga yozing
2. `/newbot` buyrug'ini yuboring
3. Bot nomini kiriting (masalan: "Turk Global Center Bot")
4. Bot username ni kiriting (masalan: "turk_global_center_bot")
5. Bot tokenini oling (masalan: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

## 2. Chat ID ni Olish

### Guruh uchun:
1. Botni guruhga qo'shing
2. Guruhda `/start` yozing
3. Bu URL ga o'ting: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
4. `chat.id` ni toping (masalan: `-1001234567890`)

### Shaxsiy chat uchun:
1. Botga `/start` yozing
2. Bu URL ga o'ting: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
3. `chat.id` ni toping (masalan: `123456789`)

## 3. Kodda Sozlash

`src/pages/Appointment.js` faylida:

```javascript
const botToken = 'YOUR_BOT_TOKEN'; // Bot tokenini bu yerga qo'ying
const chatId = 'YOUR_CHAT_ID'; // Chat ID ni bu yerga qo'ying
```

## 4. Xavfsizlik

⚠️ **Muhim**: Bot token va chat ID ni public repository ga yubormang!

### Environment Variables ishlatish:

1. `.env` fayl yarating:
```
REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token_here
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id_here
```

2. Kodda ishlatish:
```javascript
const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
```

## 5. Test Qilish

1. Form to'ldiring
2. "Yuborish" tugmasini bosing
3. Telegram da xabar kelganini tekshiring

## 6. Xatoliklar

Agar xabar yuborilmasa:
- Bot token to'g'ri ekanligini tekshiring
- Chat ID to'g'ri ekanligini tekshiring
- Bot guruhda admin ekanligini tekshiring
- Internet aloqasini tekshiring
