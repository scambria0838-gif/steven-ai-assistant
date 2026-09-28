// SMS notification sender — Textbelt free tier (1 SMS/day, no signup)
// Upgrade key at textbelt.com for more volume.
async function notifyOwner(lead) {
  const phone = "4802989319"; // owner number
  const msg = `New lead: ${lead.name || 'visitor'} | ${lead.email || 'no email'} | ${lead.phone || 'no phone'} | msg: ${(lead.message || '').slice(0,120)}`;
  try {
    const res = await fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ phone, message: msg, key: "textbelt" })
    });
    const data = await res.json();
    console.log("SMS sent:", data);
    return data.success;
  } catch (e) {
    console.error("SMS failed", e);
    return false;
  }
}
// Example: window.notifyOwner = notifyOwner;