/* eslint-disable react/prop-types */

const PlanCard = ({ title, description, price, button1Text, button2Text }) => {
  return (
    <div
      className="plan-card bg-black15"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="4000"
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="price">
        <h3>${price}</h3>
        <span className="text-grey60">/month</span>
      </div>
      <div className="price-button">
        <button className="button">{button1Text}</button>
        <button className="button">{button2Text}</button>
      </div>
    </div>
  );
};

export default PlanCard;
