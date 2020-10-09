import CountriesSelect from "components/CountriesSelect";
import Link from "next/link";
import months from "constants/months";

const RegisterForm = () => (
  <>
    <h3>Register Now !!!</h3>
    <p className="text-muted">Be cool and join today. Meet millions</p>

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
            {Array.from(Array(31).keys()).map((q) => (
              <option value={1 + q}>{1 + q}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-sm-3 col-xs-6">
          <label htmlFor="month" className="sr-only"></label>
          <select className="form-control" id="month">
            <option value="month" disabled selected>
              Month
            </option>
            {months.map((q) => (
              <option value={q}>{q}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-sm-6 col-xs-12">
          <label htmlFor="year" className="sr-only"></label>
          <select className="form-control" id="year">
            <option value="year" disabled selected>
              Year
            </option>
            {Array.from(Array(71).keys())
              .reverse()
              .map((q) => (
                <option value={1950 + q}>{1950 + q}</option>
              ))}
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
    {/* <p>
      <a href="#">Already have an account?</a>
    </p> */}
    <Link href="/newsfeed">
      <button className="btn btn-primary">Register Now</button>
    </Link>
  </>
);

export default RegisterForm;
