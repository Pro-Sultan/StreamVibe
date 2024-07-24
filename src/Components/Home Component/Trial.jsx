/* eslint-disable react/no-unescaped-entities */

const Trial = () => {
  return (
    <div className="trial">
      <div
        className="trailinner"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="4000"
      >
        <div className="faq-header">
          <div className="explore-head" data-aos="fade-right">
            <h1 className="text-xl">Start your free trial today!</h1>
            <p className="explore-para text-grey60">
              This is a clear call to action that encourages users to sign up
              for a free trial of StreamVibe.
            </p>
          </div>

          <div className="trial-button" data-aos="fade-right">
            <button className="bg-red45 font-bold">Start a Free Trial</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
