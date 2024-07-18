const NavbarTitle = () => {
  return (
    <div className="navbar_title text-white align-middle text-center ">
      <h1 className="text-xxl">The Best Streaming Experience</h1>
      <p className=" navbar-para">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With StreamVibe, you can
        enjoy a wide variety of content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists, so you can easily find the content you want to watch.
      </p>

      <button>
        {" "}
        <img src="../assets/images/small-play-button.png" alt="" /> Start
        Watching Now
      </button>
    </div>
  );
};

export default NavbarTitle;
