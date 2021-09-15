import ContactForm from '../ContactForm/ContactForm';
import Credit from '../Credit/Credit';

import './contact.scss';

function Contact() {
  return (
    <div id="contact" className="contact" data-aos="fade-up">
      <div className="contact__wrapper">
        <h1 className="title text-center"> Contact me</h1>
        <ContactForm />
      </div>
      <Credit />
    </div>
  );
}

export default Contact;
