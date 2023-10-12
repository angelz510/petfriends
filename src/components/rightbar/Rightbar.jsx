import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <span>Jose Perez</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>unfollow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
