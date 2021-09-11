import './contact.scss';

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__mask">
        <div className="contact__wrapper" data-aos="fade-up">
          <h1 className="title text-center"> Contact me</h1>
          <div className="nes-field">
            <input
              type="text"
              id="name"
              className="nes-input light"
              placeholder="Name"
            />
          </div>
          <div className="nes-field">
            <input
              type="email"
              id="email"
              className="nes-input light"
              placeholder="Email"
            />
          </div>
          <div className="nes-field">
            <input
              type="text"
              id="subject"
              className="nes-input light"
              placeholder="Subject"
            />
          </div>
          <div className="nes-field">
            <textarea
              id="message"
              className="nes-textarea light"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="nes-field text-center">
            <button className="nes-btn is-primary">Send</button>
          </div>
        </div>

        <footer className="footer">
          Made with <i className="nes-icon is-small heart"></i> by{' '}
          <a
            rel="noreferrer"
            href="https://github.com/hungteddy"
            target="_blank"
          >
            Hung
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
