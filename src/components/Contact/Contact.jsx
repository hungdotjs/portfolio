import ContactForm from '../ContactForm/ContactForm';
import Credit from '../Credit/Credit';

import './contact.scss';

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__mask">
        <div className="contact__wrapper" data-aos="fade-up">
          <h1 className="title text-center"> Contact me</h1>

          <ContactForm />
        </div>

        <Credit />
      </div>
    </div>
  );
}

export default Contact;
