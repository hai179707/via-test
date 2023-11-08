import PropTypes from "prop-types";
import { memo, useId } from "react";

function SelectGroup({
  label = "",
  name = "",
  onChange = () => {},
  required = false,
  className = "",
  children,
}) {
  const inputId = useId();
  let classNames =
    className +
    " w-full min-w-[250px] p-3 border border-gray rounded outline-none text-gray";

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId}>
        {label} {required ? <span className="text-orange">*</span> : ""}
      </label>
      <select
        id={inputId}
        name={name}
        onChange={onChange}
        required={required}
        className={classNames}
      >
        {children}
      </select>
    </div>
  );
}

SelectGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default memo(SelectGroup);
