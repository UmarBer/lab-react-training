const BoxColor = (props) => {
  const color = `rgb(${props.r},${props.g},${props.b})`;
  return (
    <div className="box-color" style={{ backgroundColor: color }}>
      rgb({props.r},{props.g},{props.b})
    </div>
  );
};

export default BoxColor;
