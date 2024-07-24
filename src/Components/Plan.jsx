/* eslint-disable react/no-unescaped-entities */
import plans from "../JS/plans";
import PlanCard from "./PlanCard";

const Pricing = () => {
  return (
    <div className="faq bg-black10 text-white">
      <div className="faq-header">
        <div className="explore-head" data-aos="fade-right">
          <h1 className="text-xl">Choose the plan that's right for you</h1>
          <p className="explore-para text-grey60">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit yr preference.
          </p>
        </div>

        <div className="plan-button" data-aos="fade-right">
          <button className="font-bold active">Monthly</button>
          <button className="font-bold">Yearly</button>
        </div>
      </div>
      <div className="plans">
        {plans.map((device) => (
          <PlanCard key={device.deviceName} {...device} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
