import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [formInvalid, setFormInvalid] = useState(false); 

  const validateForm = (event) => {
    event.persist();
    event.preventDefault();
    let allValid = true;
    
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
    requiredInputs.forEach(input => {
      const inputId = input.getAttribute('id');
      const label = document.querySelector(`label[for="${inputId}"]`);

      if (!input.value) {
        input.classList.add('error');
        label.classList.add('error');
        allValid = false;
      } else {
        input.classList.remove('error');
        label.classList.remove('error');
      }
    });

    setFormInvalid(!allValid);

    if (allValid) {
      sendEmail(event);
    }
  };

  const sendEmail = async (event) => {
    event.persist();
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "f6a27903-14c0-4e8e-8472-49b33588d27f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setStateMessage(t('contact.success_message'));
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    } else {
      setStateMessage(t('contact.error_message'));
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={validateForm} className="contact" noValidate>
      {formInvalid && <p className="invalid-form">{t('contact.invalid_form')}</p>}
      <div className="form-group">
        <label for="name">{t('contact.name')}</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-group">
        <label for="company">{t('contact.company')}</label>
        <input type="text" name="company" id="company" />
      </div>
      <div className="form-group">
        <label for="email">{t('contact.email')}</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-group">
        <label for="website">{t('contact.website')}</label>
        <input type="text" name="website" id="website" />
      </div>
      <div className="form-group">
        <label for="phone">{t('contact.phone')}</label>
        <input type="number" name="phone" id="phone" />
      </div>
      <div className="form-group">
        <label for="message">{t('contact.message')}</label>
        <textarea name="message" id="message" rows="3" required></textarea>
      </div>
      <div className="form-group form-group-submit">
        <label for="submit"></label>
        <button type="submit" id="submit" disabled={isSubmitting}>{t('contact.submit')}</button>
      </div>
      <div className="form-group">
        <label></label>
        {stateMessage && <p>{stateMessage}</p>}
      </div>
    </form>
  );
};

export default Contact;
