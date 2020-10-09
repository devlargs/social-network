import CountriesSelect from "components/CountriesSelect";
import months from "constants/months";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, createUser } from "store/reducers/auth";
import removeFalsy from "utils/removeFalsy";
import axios from "axios";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectUser);
  const { register, handleSubmit, getValues } = useForm();

  const submit = async () => {
    const params = {
      ...getValues(),
    };

    const {
      password,
      firstName,
      lastName,
      emailAddress,
      month,
      day,
      year,
    } = params;
    const bool = password && firstName && lastName && emailAddress;

    if (bool) {
      try {
        const { data: newPassword } = await axios.post(
          "/api/password/encrypt",
          {
            password,
          }
        );

        params.password = newPassword;

        if (month && day && year) {
          params.birthdate = `${year}-${month}-${day}`;
        }

        delete params.year;
        delete params.month;
        delete params.day;

        dispatch(createUser(removeFalsy(params)));
      } catch (ex) {
        // TODO - Add alert here
      }
    }
  };

  return (
    <>
      <h3>Register Now !!!</h3>
      <p className="text-muted">Be cool and join today. Meet millions</p>

      <form
        onSubmit={handleSubmit(submit)}
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
              ref={register}
              required
              id="firstName"
              className="form-control input-group-lg"
              type="text"
              name="firstName"
              title="Enter first name"
              placeholder="First name"
            />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="lastname" className="sr-only">
              Last Name
            </label>
            <input
              ref={register}
              required
              id="lastname"
              className="form-control input-group-lg"
              type="text"
              name="lastName"
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
              id="emailAddress"
              ref={register}
              required
              className="form-control input-group-lg"
              type="text"
              name="emailAddress"
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
              ref={register}
              required
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
            <select className="form-control" id="day" name="day" ref={register}>
              <option value="" disabled selected>
                Day
              </option>
              {Array.from(Array(31).keys()).map((q) => (
                <option value={1 + q}>{1 + q}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-sm-3 col-xs-6">
            <label htmlFor="month" className="sr-only"></label>
            <select
              className="form-control"
              id="month"
              name="month"
              ref={register}
            >
              <option value="" disabled selected>
                Month
              </option>
              {months.map((q) => (
                <option value={q}>{q}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-sm-6 col-xs-12">
            <label htmlFor="year" className="sr-only"></label>
            <select
              className="form-control"
              id="year"
              name="year"
              ref={register}
            >
              <option value="" disabled selected>
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
            <input
              value="Male"
              type="radio"
              checked
              ref={register}
              name="gender"
            />
            Male
          </label>
          <label className="radio-inline">
            <input value="Female" type="radio" ref={register} name="gender" />{" "}
            Female
          </label>
        </div>
        <div className="row">
          <div className="form-group col-xs-6">
            <label htmlFor="city" className="sr-only">
              City
            </label>
            <input
              ref={register}
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
            <CountriesSelect htmlRef={register} />
          </div>
        </div>

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (
            <span className="fa fa-gear fa-spin"></span>
          ) : (
            "Register Now"
          )}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
