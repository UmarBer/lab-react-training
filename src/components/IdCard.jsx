const IdCard = (props) => {
  return (
    <div>
      <img src={props.users.picture} alt="profile" />
      <div className="user-data">
        <b className="data">Last name:</b>
        {props.users.lastName}
        <b className="data">First name:</b>
        {props.users.firstName}
        <b className="data">Gender:</b>
        {props.users.gender}
        <b className="data">Height:</b>
        {props.users.height}
        <b className="data">Birth:</b>
        {props.users.birth.toLocaleDateString()}
      </div>
    </div>
  );
};

export default IdCard;
