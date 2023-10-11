import "./leftbar.scss";
import Calendar from "../../assets/calendar.png";
import Friends from "../../assets/friends.png";
import Mail from "../../assets/mail.png";
import Groups from "../../assets/group.png";
import Market from "../../assets/market.png";
import Memories from "../../assets/memories.png";
import Gallery from "../../assets/gallery.png";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://i.imgur.com/hUPONVM.jpg" alt="" />
            <span>Jose Perez</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={Calendar} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Mail} alt="" />
            <span>Messages</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
