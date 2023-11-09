import PropTypes from "prop-types";
import { memo, useId } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../actions";

function SelectLocationField({
  field,
  form,

  label = "",
  defaultValue = "",
  required = false,
  asterisk = false,
  className = "",
  options = [],
}) {
  const dispatch = useDispatch()
  const inputId = useId();

  const { name, onChange } = field;

const handleSelectedOptionChange = (e) => {
  dispatch(setLocation({divisionType: name, code: e.target.value.split('/')[0]}))
  onChange(e)
}

  let classNames =
    className +
    " w-full min-w-[250px] p-3 border border-gray rounded outline-none text-gray";

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId}>
        {label} {asterisk ? <span className="text-orange">*</span> : ""}
      </label>
      <select
        {...field}
        onChange={handleSelectedOptionChange}
        id={inputId}
        required={required}
        className={classNames}
      >
        {defaultValue && <option value=''>{defaultValue}</option>}
        {options.length &&
          options.map((option) => (
            <option value={option.code + "/" + option.name} key={option.code}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
}

SelectLocationField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  asterisk: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array,
};

export default memo(SelectLocationField);
