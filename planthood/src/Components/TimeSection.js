import plant from "../assets/plant.svg";

const TimeSection = () => {
  return (
    <div className="tidigare-odlingar">
      <div className="div-wrapper">
        <div className="text-wrapper-5">Planterade plantor</div>
      </div>
      <div className="text-wrapper-6">Våra tidigare odlingar</div>
      <p className="v-ren-r-ntligen-h-r">
        Våren är äntligen här i kollektivet! <br />
        Lorem ipsum dolor sit amet consectetur. Sit venenatis arcu nunc
        consectetur neque. Vel amet netus amet eu elit.
      </p>
      <div className="plant-circle">
        <div className="plant-wrapper">
          <img className="plant" alt="Plant" src={plant} />
        </div>
      </div>
    </div>
  );
};
export default TimeSection;
