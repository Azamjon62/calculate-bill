/* eslint-disable react/prop-types */
import "./style.css";

const Input = ({ placeholder, state, setState, type = "text" }) => {
  return (
      <input
        className="input"
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}  />
  );
};

export default Input;
