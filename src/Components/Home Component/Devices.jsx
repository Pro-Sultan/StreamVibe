/* eslint-disable react/no-unescaped-entities */

import Device from "./Device";
import Types from "../../JS/Types";

const Devices = () => {
  return (
    <div className="devices bg-black10 text-white">
      <div className="device-head" data-aos="fade-right">
        <h1 className="text-xl">
          We Provide you streaming experience across various devices.
        </h1>
        <p className="device-para text-grey60">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices.
        </p>
      </div>

      <div className="box">
        {Types.map((device) => (
          <Device key={device.deviceName} {...device} />
        ))}
      </div>
    </div>
  );
};

export default Devices;
