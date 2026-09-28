# Steven AI Assistant

Automated website chatbot + SMS lead notifications. Built by Leo.

## What this is
- Static site with embedded Botpress AI chatbot (free tier)
- Blueprint for SMS alerts to 480-298-9319 on new leads
- Zero monthly software cost (Botpress free + Textbelt 1 SMS/day free)

## Quick start
1. Enable GitHub Pages: Settings → Pages → Source: main / root
2. Live URL: https://scambria0838-gif.github.io/steven-ai-assistant/
3. Create free Botpress account at https://botpress.com
4. In Studio: add your website as knowledge source, set persona
5. Copy your botId + clientId from Webchat → Deploy Settings
6. Paste into index.html (replace PLACEHOLDER_BOT_ID / PLACEHOLDER_CLIENT_ID)
7. Push — site updates automatically
8. For SMS: use Textbelt free key (1 SMS/day) or upgrade to textbee (300/mo) / httpSMS (200/mo)

## Files
- index.html — the live site + chatbot embed
- sms-notify.js — SMS sender (Textbelt)
- DEPLOY.md — full step-by-step
- botpress-blueprint.md — exact Studio config to copy

## Cost
$0/mo software. SMS: free up to 1/day, then ~$0.05 each.