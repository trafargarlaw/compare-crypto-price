const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="get-in-touch__title">
        <h1>Got feedback? We got you!</h1>
        <button className="btn-get-in-touch">GET IN TOUCH</button>
      </div>
      <div className="get-in-touch__ball-and-shadow">
        <div className="get-in-touch__ball-and-shadow_ball">
          <img src="/images/ball.png" alt="ball" />
        </div>
        <div className="get-in-touch__ball-and-shadow_shadow">
          <img src="/images/ball-shadow.png" alt="ball" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
