import { Link } from "react-router-dom";
import SearchRounded from "../../icon/search-rounded";
import NotificationsOutline from "../../icon/notifications-outline";
import LoginDialog from "../login";

const Header = () => {
  return (
    <header className="container">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/">
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v9647/v2_2019/pc/graphics/logo_tagline.svg"
              alt="VnExpress - Bao tieng Viet nhieu nguoi xem nhat"
            />
          </Link>
          {/* TODO: Temperature */}
          <div className="pl-4 border-l-1 border-gray-300">
            TP HCM 27<sup>o</sup>
          </div>
          {/* TODO: Date */}
          <div className="pl-4 border-l-1 border-gray-300">
            Thứ năm, 17/7/2025
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="pl-4">
            <Link to="/tin-tuc-24h">Mới nhất</Link>
          </div>
          <div className="pl-4 border-l-1 border-gray-300">
            <Link to="/khu-vuc">Tin theo khu vực</Link>
          </div>
          <div className="pl-4 border-l-1 border-gray-300">
            <div className="flex gap-2 items-center">
              <div className="cursor-pointer">
                <SearchRounded />
              </div>

              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400">
                <LoginDialog />
              </div>
              <div className="cursor-pointer">
                <NotificationsOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
