# Deploy (5 minutes)

## A. GitHub Pages (the site)
1. Repo is already created: scambria0838-gif/steven-ai-assistant
2. Settings → Pages → Branch: main, folder: / (root) → Save
3. Wait 1-2 min. Site live at https://scambria0838-gif.github.io/steven-ai-assistant/

## B. Botpress (the brain)
1. Sign up free at https://botpress.com
2. New bot → name it "Steven AI"
3. Follow botpress-blueprint.md exactly
4. Copy botId + clientId → replace PLACEHOLDER in index.html → commit & push
5. Site auto-updates with live chatbot

## C. SMS alerts
- Default: Textbelt free key = 1 SMS/day to 480-298-9319, no signup
- For more: textbee.dev free tier = 300 SMS/mo (needs Android phone + SIM)
- Or httpSMS free = 200 SMS/mo (Android)
- Paste your upgraded key into sms-notify.js when ready

## D. Test
1. Open the live site, chat with the bot
2. Give it a fake lead → you should get a text
3. Done.

Total cost: $0/mo software. SMS free up to daily cap.