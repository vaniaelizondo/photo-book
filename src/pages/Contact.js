import { useState } from "react";

const Contact = () => {
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
    formData.append("access_key", "6aae9f71-6f40-4add-a282-1b6f07ad7066");

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
      setStateMessage("Message sent!");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    } else {
      setStateMessage("Something went wrong, please try again later");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={validateForm} className="contact" noValidate>
      {formInvalid && <p className="invalid-form">Please fill out the required fields.</p>}
      <div className="form-group">
        <label for="name">Nom</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-group">
        <label for="company">Société</label>
        <input type="text" name="company" id="company" />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-group">
        <label for="website">Site web</label>
        <input type="text" name="website" id="website" />
      </div>
      <div className="form-group">
        <label for="phone">Téléphone</label>
        <input type="number" name="phone" id="phone" />
      </div>
      <div className="form-group">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="3" required></textarea>
      </div>
      <div className="form-group">
        <label for="submit"></label>
        <button type="submit" disabled={isSubmitting}>Envoyer</button>
      </div>
      <div className="form-group">
        <label for="status"></label>
        {stateMessage && <p>{stateMessage}</p>}
      </div>
    </form>
  );
};

export default Contact;
