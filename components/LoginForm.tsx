const LoginForm = () => (
  <>
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
  </>
);

export default LoginForm;
