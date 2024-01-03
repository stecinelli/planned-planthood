import button from "../assets/button-tips.png";
import vetor from "../assets/Vetor.png";

const TipsSection = () => {
  return (
    <div className="ssong-att-s">
      <div className="rectangle-6">
        <div className="plant-wrapper">
          <img className="plant" alt="Logo" src={vetor} />
        </div>
      </div>
      <div className="text-wrapper-18">Säsong att så</div>
      <p className="p">
        Våren är äntligen här i kollektivet! <br />
        Lorem ipsum dolor sit amet consectetur. Sit venenatis arcu nunc
        consectetur neque. Vel amet netus amet eu elit.
      </p>
      <img className="button" alt="Button" src={button} />
    </div>
  );
};
export default TipsSection;
