import "../Style/TimeSection.css";

const TimeSection = () => {
  return (
    <div className="box-time">
      <div className="tidigare-odlingar">
        <div className="overlap">
          <div className="text-wrapper">Planterade plantor</div>
        </div>
        <div className="div">Våra tidigare odlingar</div>
        <p className="v-ren-r-ntligen-h-r">
          Våren är äntligen här i kollektivet! <br />
          Lorem ipsum dolor sit amet consectetur. Sit venenatis arcu nunc
          consectetur neque. Vel amet netus amet eu elit.
        </p>
        <div className="plant-circle">
          <div className="overlap-group">
            <img className="plant" alt="Plant" src="plant.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeSection;
