import CountriesSelect from "components/CountriesSelect";

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
  </>
);

export default RegisterForm;
