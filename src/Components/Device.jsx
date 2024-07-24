/* eslint-disable react/prop-types */

const Device = ({ image, deviceName, paragraphText }) => {
  return (
    <div className="device">
      <div className="device-head-small">
        <img src={image} alt="" />
        <h1 className="text-[20px] ">{deviceName}</h1>
      </div>
      <p className="paragraph-text">{paragraphText}</p>
    </div>
  );
};

export default Device;
