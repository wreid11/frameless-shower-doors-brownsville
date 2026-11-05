export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, type } = req.body;

  // Validate email
  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!type || !['laredo_checklist', 'brownsville_template'].includes(type)) {
    return res.status(400).json({ error: 'Invalid download type' });
  }

  // Prepare payload for webhook
  const payload = {
    email,
    type,
    source: 'checklist_gate',
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || 'unknown',
  };

  // If LEAD_WEBHOOK_URL is set, forward to Google Sheet / email webhook
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        console.error('Webhook error:', webhookRes.status, await webhookRes.text());
      }
    } catch (err) {
      console.error('Webhook fetch error:', err.message);
      // Don't fail the user request if webhook fails
    }
  } else {
    // Fallback: just log that we would have sent it
    console.log('No webhook configured. Email capture:', payload);
  }

  res.status(200).json({ success: true, message: 'Email captured' });
};
