import "../css/SubData.css";

const SubData = ({ image, data, dataType }) => {
  return (
    <div className="sub-data">
      <img src={image} />
      <div className="details">
        <h3>{data}</h3>
        <p>{dataType}</p>
      </div>
    </div>
  );
};

export default SubData;
