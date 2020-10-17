import links from "constants/links";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "utils/checkPermission";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header id="header">
      <nav className="navbar navbar-default navbar-fixed-top menu">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right main-menu">
              {/* <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home{" "}
              <span>
                <img src="images/down-arrow.png" alt="" />
              </span>
            </a>
            <ul className="dropdown-menu newsfeed-home">
              <li>
                <a href="#">Landing Page 1</a>
              </li>
              <li>
                <a href="#">Landing Page 2</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Newsfeed{" "}
              <span>
                <img src="images/down-arrow.png" alt="" />
              </span>
            </a>
            <ul className="dropdown-menu newsfeed-home">
              <li>
                <a href="#">Newsfeed</a>
              </li>
              <li>
                <a href="#">Poeple Nearly</a>
              </li>
              <li>
                <a href="#">My friends</a>
              </li>
              <li>
                <a href="#">Chatroom</a>
              </li>
              <li>
                <a href="#">Images</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Timeline{" "}
              <span>
                <img src="images/down-arrow.png" alt="" />
              </span>
            </a>
            <ul className="dropdown-menu login">
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="timeline-about">Timeline About</a>
              </li>
              <li>
                <a href="timeline-album">Timeline Album</a>
              </li>
              <li>
                <a href="timeline-friends">Timeline Friends</a>
              </li>
              <li>
                <a href="edit-profile-basic">Edit: Basic Info</a>
              </li>
              <li>
                <a href="edit-profile-work-edu">Edit: Work</a>
              </li>
              <li>
                <a href="edit-profile-interests">Edit: Interests</a>
              </li>
              <li>
                <a href="edit-profile-settings">Account Settings</a>
              </li>
              <li>
                <a href="edit-profile-password">Change Password</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a
              href="#"
              className="dropdown-toggle pages"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              All Pages{" "}
              <span>
                <img src="images/down-arrow.png" alt="" />
              </span>
            </a>
            <ul className="dropdown-menu page-list">
              <li>
                <a href="#">Landing Page 1</a>
              </li>
              <li>
                <a href="#">Landing Page 2</a>
              </li>
              <li>
                <a href="#">Newsfeed</a>
              </li>
              <li>
                <a href="#">Poeple Nearly</a>
              </li>
              <li>
                <a href="#">My friends</a>
              </li>
              <li>
                <a href="#">Chatroom</a>
              </li>
              <li>
                <a href="#">Images</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Timeline</a>
              </li>
              <li>
                <a href="timeline-about">Timeline About</a>
              </li>
              <li>
                <a href="timeline-album">Timeline Album</a>
              </li>
              <li>
                <a href="timeline-friends">Timeline Friends</a>
              </li>
              <li>
                <a href="edit-profile-basic">Edit Profile</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
              <li>
                <a href="faq">FAQ Page</a>
              </li>
              <li>
                <a href="404">404 Not Found</a>
              </li>
            </ul>
          </li>
           */}
              <li className="dropdown">
                {/* <Link href="/"> */}
                <a onClick={() => logout(dispatch)}>Logout</a>
                {/* </Link> */}
              </li>
            </ul>
            {/* <form className="navbar-form navbar-right hidden-sm">
          <div className="form-group">
            <i className="icon ion-android-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search friends, photos, videos"
            />
          </div>
        </form> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
