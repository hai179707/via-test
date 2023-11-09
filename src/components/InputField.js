import PropTypes from "prop-types";
import { memo, useId, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ErrorMessage } from "formik";
import FormFeedback from "./FormFeedback";

function InputField({
  field,
  form,
  label = "",
  type = "text",
  placeholder = "",
  asterisk = false,
  required = false,
  className = "",
}) {
  const [currentType, setCurrentType] = useState(type);
  const inputId = useId();

  const { name } = field;
  const { errors, touched } = form;

  const isPasswordType = type === "password";
  let classNames = className + " min-w-[250px] p-3 border rounded outline-none";

  if (errors[name] && touched[name])
    classNames += " border-red bg-bglorange transition-colors duration-300";
  else classNames += " border-gray";

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId}>
          {label} {asterisk && <span className="text-orange">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={inputId}
          {...field}
          type={currentType}
          placeholder={placeholder}
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
        <ErrorMessage name={field.name} component={FormFeedback} />
      </div>
    </div>
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  asterisk: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(InputField);
