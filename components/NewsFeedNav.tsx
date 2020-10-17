import Link from "next/link";

const NewsFeedNav = () => (
  <ul className="nav-news-feed">
    <li>
      <i className="icon ion-ios-paper"></i>
      <div>
        <Link href="/404">My Newsfeed</Link>
      </div>
    </li>
    <li>
      <i className="icon ion-ios-people"></i>
      <div>
        <a href="newsfeed-people-nearby">People Nearby</a>
      </div>
    </li>
    <li>
      <i className="icon ion-ios-people-outline"></i>
      <div>
        <a href="newsfeed-friends">Friends</a>
      </div>
    </li>
    <li>
      <i className="icon ion-chatboxes"></i>
      <div>
        <a href="newsfeed-messages">Messages</a>
      </div>
    </li>
    <li>
      <i className="icon ion-images"></i>
      <div>
        <a href="newsfeed-images">Images</a>
      </div>
    </li>
    <li>
      <i className="icon ion-ios-videocam"></i>
      <div>
        <a href="#">Videos</a>
      </div>
    </li>
  </ul>
);

export default NewsFeedNav;
