// api/unlock.js
// This runs on Vercel's server. Visitors can never see this file.

export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  // ====== CHANGE THESE TWO LINES ======
  const ACCESS_CODE = 'letmein123';
  const TELEGRAM_LINK = 'https://t.me/+-_veOIEOHOdkM2E9';
  // ====================================

  const code = (req.body && req.body.code) || '';

  if (code === ACCESS_CODE) {
    return res.status(200).json({ ok: true, url: TELEGRAM_LINK });
  } else {
    return res.status(401).json({ ok: false, error: 'Wrong code.' });
  }
                                }
