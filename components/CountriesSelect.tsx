import countries from "constants/countries";

const CountriesSelect = ({ htmlRef }: any) => (
  <select className="form-control" id="country" name="country" ref={htmlRef}>
    <option value="" disabled selected>
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
