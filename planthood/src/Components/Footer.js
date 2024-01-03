import { Envelope } from "./Envelope";

const Footer = () => {
  return (
    <div className="box-footer">
      <div className="footer-ish">
        <div className="overlap-group">
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/bBwqMwJS/img/rectangle-22.svg"
          />
          <img
            className="img"
            alt="Rectangle"
            src="https://c.animaapp.com/bBwqMwJS/img/rectangle-23.svg"
          />
          <div className="div" />
          <div className="text-wrapper">Vi hörs!</div>
          <div className="text-wrapper-2">mail@mail.se</div>
          <div className="text-wrapper-3">0701-234567</div>
          <Envelope className="envelope-instance" />
          <img
            className="path"
            alt="Path"
            src="https://c.animaapp.com/bBwqMwJS/img/path-16.svg"
          />
        </div>
        <div className="text-wrapper-4">Till toppen av sidan</div>
      </div>
    </div>
  );
};

export default Footer;
