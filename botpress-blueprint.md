# Botpress Studio Blueprint (copy exactly)

## 1. Knowledge
- Add source: Website → enter your live site URL → Discover pages
- Add source: Text → paste your FAQ / services / pricing

## 2. Persona (System Prompt)
You are Steven's AI assistant. Answer only from the knowledge base. Be concise, friendly, and helpful. If a visitor gives name + contact info or asks to be contacted, capture it and say "I'll have Steven reach out right away." Never invent facts. If unsure, say you'll check and have Steven follow up.

## 3. Workflow: Lead Capture + SMS
- Trigger: Message Received
- Condition: message contains email OR phone OR "contact me" OR "call me"
- Card: Extract structured data (name, email, phone, message)
- Card: Execute Code → call notifyOwner() with extracted data (paste sms-notify.js logic)
- Card: Reply → "Got it — Steven will text you shortly."

## 4. Webchat settings
- Name: Steven AI
- Avatar: upload your logo
- Theme: dark, soft variant
- Auto-open: on
- Copy botId + clientId from Deploy Settings → paste into index.html

## 5. Publish
- Hit Publish in Studio. Free plan = 25 conversations/mo, $5 AI credit.