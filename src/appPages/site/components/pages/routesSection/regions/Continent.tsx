import scss from "./Continent.module.scss";
const Continent = () => {
  return (
    <div className={scss.Continent}>
      <div className={scss.content}>
        <div className={scss.from}>
          <input type="text" />
          <input type="text" placeholder="Where?" />
          <button>Go</button>
        </div>
        <nav></nav>
      </div>
    </div>
  );
};

export default Continent;
