import Image404 from "../../assets/images/404.jpg";

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
