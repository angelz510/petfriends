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
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <p>
                <span>Jose Perez</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <p>
                <span>Jose Perez</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <p>
                <span>Jose Perez</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <p>
                <span>Jose Perez</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
              <div className="online" />
              <span>Jose Perez</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
