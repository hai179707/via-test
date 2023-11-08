import PropTypes from "prop-types";
import { memo, useId, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Typography from "./Typography";

function InputGroup({
  label = "",
  type = "text",
  name = "",
  placeholder = "",
  asterisk = false,
  value = "",
  onChange = () => {},
  required = false,
  error = false,
  helperText = "",
  className = "",
}) {
  const [currentType, setCurrentType] = useState(type);
  const inputId = useId();
  const isPasswordType = type === "password";
  let classNames = className + " min-w-[250px] p-3 border rounded outline-none";

  if (error) classNames += " border-red bg-bglorange transition-colors duration-300";
  else classNames += " border-gray";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId}>
          {label}{" "}
          {asterisk && <span className="text-orange">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          type={currentType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={classNames}
        />
        {isPasswordType && (
          <>
            {currentType === "password" ? (
              <FaRegEyeSlash
                size={22}
                className="cursor-pointer absolute top-50 right-4 -translate-y-50 select-none"
                onClick={() => setCurrentType("text")}
              />
            ) : (
              <FaRegEye
                size={22}
                className="cursor-pointer absolute top-50 right-4 -translate-y-50 select-none"
                onClick={() => setCurrentType("password")}
              />
            )}
          </>
        )}
        {error && (
          <Typography
            color="red"
            size="xs"
            className="absolute top-full mt-1 left-0 leading-3"
          >
            {helperText}
          </Typography>
        )}
      </div>
    </div>
  );
}

InputGroup.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  asterisk: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default memo(InputGroup);
