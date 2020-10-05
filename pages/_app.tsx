import "styles/globals.css";
import Head from "next/head";
import Header from "components/Header";
import CountriesSelect from "components/CountriesSelect";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/ionicons.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i"
          rel="stylesheet"
        ></link>
        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.appear.min.js"></script>
        <script src="js/jquery.incremental-counter.js"></script>
        <script src="js/script.js"></script>
      </Head>

      <Header />

      <div id="lp-register">
        <div className="container wrapper">
          <div className="row">
            <div className="col-sm-5">
              <div className="intro-texts">
                <h1 className="text-white">Make Cool Friends !!!</h1>
                <p>
                  Friend Finder is a social network template that can be used to
                  connect people. The template offers Landing pages, News Feed,
                  Image/Video Feed, Chat Box, Timeline and lot more. <br />{" "}
                  <br />
                  Why are you waiting for? Buy it now.
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
                    <h3>Register Now !!!</h3>
                    <p className="text-muted">
                      Be cool and join today. Meet millions
                    </p>

                    <form
                      name="registration_form"
                      id="registration_form"
                      className="form-inline"
                    >
                      <div className="row">
                        <div className="form-group col-xs-6">
                          <label htmlFor="firstname" className="sr-only">
                            First Name
                          </label>
                          <input
                            id="firstname"
                            className="form-control input-group-lg"
                            type="text"
                            name="firstname"
                            title="Enter first name"
                            placeholder="First name"
                          />
                        </div>
                        <div className="form-group col-xs-6">
                          <label htmlFor="lastname" className="sr-only">
                            Last Name
                          </label>
                          <input
                            id="lastname"
                            className="form-control input-group-lg"
                            type="text"
                            name="lastname"
                            title="Enter last name"
                            placeholder="Last name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-xs-12">
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            id="email"
                            className="form-control input-group-lg"
                            type="text"
                            name="Email"
                            title="Enter Email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-xs-12">
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            className="form-control input-group-lg"
                            type="password"
                            name="password"
                            title="Enter password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <p className="birth">
                          <strong>Date of Birth</strong>
                        </p>
                        <div className="form-group col-sm-3 col-xs-6">
                          <label htmlFor="month" className="sr-only"></label>
                          <select className="form-control" id="day">
                            <option value="Day" disabled selected>
                              Day
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-3 col-xs-6">
                          <label htmlFor="month" className="sr-only"></label>
                          <select className="form-control" id="month">
                            <option value="month" disabled selected>
                              Month
                            </option>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                          </select>
                        </div>
                        <div className="form-group col-sm-6 col-xs-12">
                          <label htmlFor="year" className="sr-only"></label>
                          <select className="form-control" id="year">
                            <option value="year" disabled selected>
                              Year
                            </option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group gender">
                        <label className="radio-inline">
                          <input type="radio" name="optradio" checked />
                          Male
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="optradio" /> Female
                        </label>
                      </div>
                      <div className="row">
                        <div className="form-group col-xs-6">
                          <label htmlFor="city" className="sr-only">
                            City
                          </label>
                          <input
                            id="city"
                            className="form-control input-group-lg reg_name"
                            type="text"
                            name="city"
                            title="Enter city"
                            placeholder="Your city"
                          />
                        </div>
                        <div className="form-group col-xs-6">
                          <label htmlFor="country" className="sr-only"></label>
                          <CountriesSelect />
                        </div>
                      </div>
                    </form>
                    <p>
                      <a href="#">Already have an account?</a>
                    </p>
                    <button className="btn btn-primary">Register Now</button>
                  </div>

                  <div className="tab-pane" id="login">
                    <h3>Login</h3>
                    <p className="text-muted">Log into your account</p>

                    <form name="Login_form" id="Login_form">
                      <div className="row">
                        <div className="form-group col-xs-12">
                          <label htmlFor="my-email" className="sr-only">
                            Email
                          </label>
                          <input
                            id="my-email"
                            className="form-control input-group-lg"
                            type="text"
                            name="Email"
                            title="Enter Email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-xs-12">
                          <label htmlFor="my-password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="my-password"
                            className="form-control input-group-lg"
                            type="password"
                            name="password"
                            title="Enter password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                    </form>
                    <p>
                      <a href="#">Forgot Password?</a>
                    </p>
                    <button className="btn btn-primary">Login Now</button>
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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
