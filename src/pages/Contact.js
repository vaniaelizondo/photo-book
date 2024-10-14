import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

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
    <form onSubmit={sendEmail} className="contact">
      <p className="invalid-form">Please fill out the required fields.</p>
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" name="name" required />
      </div>
      <div class="form-group">
        <label for="company">Société</label>
        <input type="text" name="company" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="website">Site web</label>
        <input type="text" name="website" />
      </div>
      <div class="form-group">
        <label for="phone">Téléphone</label>
        <input type="number" name="phone" />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="message" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="submit"></label>
        <button type="submit" disabled={isSubmitting}>Envoyer</button>
      </div>
      <div class="form-group">
        <label for="status"></label>
        {stateMessage && <p>{stateMessage}</p>}
      </div>
    </form>
  );
};

export default Contact;
