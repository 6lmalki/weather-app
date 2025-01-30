import "../css/MainData.css";

const MainData = ({ temperature, location }) => {
  return (
    <div className="main-data">
      <h2>{temperature}</h2>
      <p>{location}</p>
    </div>
  );
};

export default MainData;
