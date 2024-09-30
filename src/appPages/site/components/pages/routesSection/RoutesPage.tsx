import scss from "./RoutesPage.module.scss";
const RoutesPage = () => {
  return (
    <div className={scss.RoutesPage}>
      <div className={scss.content}>
        <div className={scss.Where}>
          <input type="text" />
          <input type="text" placeholder="Where?" />
          <button>Go</button>
        </div>
        <div>Regions</div>
        <div>Calendare</div>
      </div>
    </div>
  );
};

export default RoutesPage;
