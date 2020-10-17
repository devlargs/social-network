const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="footer-wrapper">
          <div className="col-md-3 col-sm-3">
            <a href="">
              <img src="images/logo-black.png" alt="" className="footer-logo" />
            </a>
            <ul className="list-inline social-icons">
              <li>
                <a href="#">
                  <i className="icon ion-social-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ion-social-googleplus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ion-social-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon ion-social-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h5>For individuals</h5>
            <ul className="footer-links">
              <li>
                <a href="">Signup</a>
              </li>
              <li>
                <a href="">login</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Finder app</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Language settings</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h5>For businesses</h5>
            <ul className="footer-links">
              <li>
                <a href="">Business signup</a>
              </li>
              <li>
                <a href="">Business login</a>
              </li>
              <li>
                <a href="">Benefits</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Setup</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h5>About</h5>
            <ul className="footer-links">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3">
            <h5>Contact Us</h5>
            <ul className="contact">
              <li>
                <i className="icon ion-ios-telephone-outline"></i>(63)
                977-352-6074
              </li>
              <li>
                <i className="icon ion-ios-email-outline"></i>
                devlargs@gmail.com
              </li>
              <li>
                <i className="icon ion-ios-location-outline"></i>Olongapo City,
                PH
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>devlargs © 2020. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
