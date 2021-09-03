import './contact.scss';

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__wrapper">
        <h1 className="title text-center">Contact me</h1>
        <div className="nes-field">
          <input
            type="text"
            id="name"
            className="nes-input"
            placeholder="Name"
          />
        </div>
        <div className="nes-field">
          <input
            type="email"
            id="email"
            className="nes-input"
            placeholder="Email"
          />
        </div>
        <div className="nes-field">
          <input
            type="text"
            id="subject"
            className="nes-input"
            placeholder="Subject"
          />
        </div>
        <div className="nes-field">
          <textarea
            id="message"
            className="nes-textarea"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="nes-field text-center">
          <button className="nes-btn is-primary">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
