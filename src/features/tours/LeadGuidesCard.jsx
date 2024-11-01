
/* eslint-disable react/prop-types */
const LeadGuidesCard = ({guide}) => {
    const { name, photo, role } = guide;
    
  return (
    <div className="overview-box__detail">
      <img
        src={`/img/users/${photo}`}
        alt={name}
        className="overview-box__img"
      />
      <span className="overview-box__label">{role}</span>
      <span className="overview-box__text">{name}</span>
    </div>
  );
};

export default LeadGuidesCard;
