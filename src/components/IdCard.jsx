const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.users.picture} alt="profile" />
      <ul className="user-data">
        <li className="data">
          <strong>Last name:</strong>
        </li>
        {props.users.lastName}
        <li className="data">
          <strong>First name:</strong>
        </li>
        {props.users.firstName}
        <li className="data">
          <strong>Gender:</strong>
        </li>
        {props.users.gender}
        <li className="data">
          <strong>Height:</strong>
        </li>
        {props.users.height / 100}m
        <li className="data">
          <strong>Birth:</strong>
        </li>
        {props.users.birth.toDateString()}
      </ul>
    </div>
  );
};

export default IdCard;
