import './InfoCard.scss';

const InfoCard = () => {
  return (
    <div className="info-card-container">
      <div className="info-card-top">
        <h3>Systemutvecklare</h3>
        <div className="info-card-top-button">
          <i class="bi bi-info-circle"></i>
          <p>Läs mer</p>
        </div>
      </div>
      <div className="info-card-pills">
        <p className="info-card-pill">HTML</p>
        <p className="info-card-pill">CSS</p>
        <p className="info-card-pill">JS</p>
        <p className="info-card-pill">NODE</p>
        <p className="info-card-pill">REACT</p>
      </div>
      <div className="info-card-info-container">
        <div className="info-card-info">
          <i class="bi bi-calendar"></i>
          <p>2022-11 to 2023-06</p>
        </div>
        <div className="info-card-info">
          <i class="bi bi-check2-circle"></i>
          <p>Remote</p>
        </div>
        <div className="info-card-info">
          <i class="bi bi-geo-alt"></i>
          <p>Gävleborgs län</p>
        </div>
      </div>
      <div className="info-card-buttons">
        <div class="info-card-button ">
          <p>Neka</p>
          <i class="bi bi-x-lg decline-button"></i>
        </div>
        <div class="info-card-button ">
          <p>Acceptera</p>
          <i class="bi bi-check-lg accept-button"></i>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
