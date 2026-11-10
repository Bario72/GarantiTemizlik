import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { SITE } from '../config/site.js';
import { SERVICES } from '../data/services.js';
import { trackEvent } from '../utils/tracking.js';

/**
 * İletişim formu.
 *
 * Backend olmadığı için gönderim, doldurulan bilgilerle hazırlanmış bir
 * WhatsApp mesajı olarak iletilir (küçük işletmeler için en hızlı ve
 * ücretsiz çözüm). İleride bir form servisi (ör. kendi backend'iniz,
 * Formspree vb.) bağlamak isterseniz handleSubmit içindeki yönlendirmeyi
 * fetch çağrısıyla değiştirmeniz yeterlidir.
 */
export default function ContactForm() {
  const [values, setValues] = useState({ name: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = 'Lütfen adınızı yazın.';
    if (!values.phone.trim()) {
      er.phone = 'Lütfen telefon numaranızı yazın.';
    } else if (!/^[0-9+() \-]{10,16}$/.test(values.phone.trim())) {
      er.phone = 'Telefon numarası geçerli görünmüyor.';
    }
    if (!values.message.trim()) er.message = 'Kısaca ihtiyacınızı yazın.';
    return er;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    const lines = [
      'Merhaba, web sitenizden yazıyorum.',
      `Ad: ${values.name.trim()}`,
      `Telefon: ${values.phone.trim()}`,
      values.service ? `Hizmet: ${values.service}` : null,
      `Mesaj: ${values.message.trim()}`,
    ].filter(Boolean);

    trackEvent('form_submit', { form: 'contact', service: values.service || 'genel' });

    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={28} aria-hidden="true" />
        <h3>Mesajınız WhatsApp'ta hazırlandı</h3>
        <p>
          Açılan WhatsApp penceresinden mesajı göndermeniz yeterli. Pencere
          açılmadıysa bizi {SITE.phoneDisplay} numarasından arayabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="cf-name">Adınız Soyadınız</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'cf-name-err' : undefined}
        />
        {errors.name && (
          <p className="form-error" id="cf-name-err">{errors.name}</p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="cf-phone">Telefon Numaranız</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="05xx xxx xx xx"
          value={values.phone}
          onChange={onChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'cf-phone-err' : undefined}
        />
        {errors.phone && (
          <p className="form-error" id="cf-phone-err">{errors.phone}</p>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="cf-service">
          İlgilendiğiniz Hizmet <span className="form-optional">(isteğe bağlı)</span>
        </label>
        <select id="cf-service" name="service" value={values.service} onChange={onChange}>
          <option value="">Seçiniz</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="cf-message">Mesajınız</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder="Örn. 2 adet büyük halı ve bir köşe koltuk için fiyat almak istiyorum."
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
        />
        {errors.message && (
          <p className="form-error" id="cf-message-err">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-solid btn-lg form-submit">
        <Send size={18} aria-hidden="true" />
        <span>WhatsApp ile Gönder</span>
      </button>
      <p className="form-note">
        Form, mesajınızı WhatsApp üzerinden bize iletir. Dilerseniz doğrudan{' '}
        <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a> numarasını arayabilirsiniz.
      </p>
    </form>
  );
}
