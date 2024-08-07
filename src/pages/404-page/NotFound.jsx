import Image404 from "../../../public/images/404.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="in">
        <img src={Image404} alt="" />
        <h1>404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
