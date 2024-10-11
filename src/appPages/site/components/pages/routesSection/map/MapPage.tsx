import scss from "./MapPage.module.scss";
const MapPage = () => {
  return (
    <div className={scss.MapPage}>
      <h1>Google map</h1>
      <div className={scss.content}>
        <div className={scss.map}>
          <>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3026213.0086878403!2d76.1889875150329!3d42.448282954702805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1728558421908!5m2!1sru!2skg"
              width="600"
              height="450"
              //   allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
