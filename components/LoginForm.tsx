import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, loginUser } from "store/reducers/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectUser);
  const { register, getValues, handleSubmit } = useForm();

  const submit = async (e) => {
    dispatch(loginUser(getValues()));
  };

  return (
    <>
      <h3>Login</h3>
      <p className="text-muted">Log into your account</p>

      <form name="Login_form" onSubmit={handleSubmit(submit)}>
        <div className="row">
          <div className="form-group col-xs-12">
            <label htmlFor="my-email" className="sr-only">
              Email
            </label>
            <input
              required
              ref={register}
              id="my-email"
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
            <label htmlFor="my-password" className="sr-only">
              Password
            </label>
            <input
              required
              id="my-password"
              className="form-control input-group-lg"
              type="password"
              name="password"
              ref={register}
              title="Enter password"
              placeholder="Password"
            />
          </div>
        </div>

        <p>
          <a href="#">Forgot Password?</a>
        </p>
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? (
            <>
              Logging in <span className="fa fa-gear fa-spin"></span>
            </>
          ) : (
            "Login Now"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
