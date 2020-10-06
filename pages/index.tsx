import Head from "next/head";
import RegisterForm from "components/RegisterForm";
import LoginForm from "components/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="lp-register">
        <div className="container wrapper">
          <div className="row">
            <div className="col-sm-5">
              <div className="intro-texts">
                <h1 className="text-white">Add headline here !!!!</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>

            <div className="col-sm-6 col-sm-offset-1">
              <div className="reg-form-container">
                <div className="reg-options">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#register" data-toggle="tab">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="#login" data-toggle="tab">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <div className="tab-pane active" id="register">
                    <RegisterForm />
                  </div>

                  <div className="tab-pane" id="login">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
            <div className="col-sm-6 col-sm-offset-6">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
