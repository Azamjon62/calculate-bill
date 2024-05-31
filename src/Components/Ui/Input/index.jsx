import "./style.css";
import PropTypes from "prop-types";

const Input = ({ placeholder, state, setState, type = "text", required = true }) => {
    return (
        <input
            className="input"
            type={type}
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder={placeholder}  
            required={required}
        />    
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    state: PropTypes.any,
    setState: PropTypes.func,
    type: PropTypes.string,
    required: PropTypes.bool,
}

export default Input;
