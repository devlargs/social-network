import countries from "constants/countries";

const CountriesSelect = () => (
  <select className="form-control" id="country">
    <option value="country" disabled selected>
      Country
    </option>
    {Object.keys(countries).map((q: string, i: number) => (
      <option key={i} value={q}>
        {countries[q]}
      </option>
    ))}
  </select>
);

export default CountriesSelect;
