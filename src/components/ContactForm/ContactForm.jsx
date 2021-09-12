import axios from 'axios';
import { useState } from 'react';
import './contact-form.scss';

export default function ContactForm() {
  const [alert, setAlert] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    axios
      .post('https://submit-form.com/IOoFk48y', {
        name,
        email,
        subject,
        message,
      })
      .then(() => {
        setAlert('success');
        setStatus('Your message was sent successfully. Thanks.');
      })
      .catch(() => {
        setAlert('error');
        setStatus('Failed to send your message. Please try later.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="nes-field">
        <input
          type="text"
          id="name"
          name="name"
          className="nes-input light"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="nes-field">
        <input
          type="email"
          id="email"
          name="email"
          className="nes-input light"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="nes-field">
        <input
          type="text"
          id="subject"
          name="subject"
          className="nes-input light"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>
      <div className="nes-field">
        <textarea
          id="message"
          className="nes-textarea light"
          name="message"
          rows="4"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button className="nes-btn is-primary" type="submit">
          Send
        </button>
      </div>

      <p className={`nes-text is-${alert}`}>{status}</p>
    </form>
  );
}
