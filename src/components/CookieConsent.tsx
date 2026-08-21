import { useState } from 'react';

const STORAGE_KEY = 'hha-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY));

  function save(value: 'accepted' | 'essential') {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <section className="cookie-consent" aria-label="Cookie and tracking preferences">
      <div><strong>Your privacy choices</strong><p>HHA uses essential technologies to operate this website. With your permission, it may also use analytics and advertising technologies to measure campaign performance and improve advertising.</p><a href="/privacy-policy">Read the Privacy Policy</a></div>
      <div className="cookie-consent-actions"><button className="cookie-essential" onClick={() => save('essential')}>Essential only</button><button className="cookie-accept" onClick={() => save('accepted')}>Accept analytics & advertising</button></div>
    </section>
  );
}
