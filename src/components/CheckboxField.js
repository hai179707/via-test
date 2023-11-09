import PropTypes from "prop-types";
import { useId } from "react";

function CheckboxField({ field, form, label }) {
  const id = useId();
  const { name } = field;
  const { errors, touched } = form;

  return (
    <label htmlFor={id} className="pl-4 cursor-pointer select-none">
      <input
        {...field}
        type="checkbox"
        id={id}
        className="absolute opacity-0 h-0 w-0 cursor-pointer agree-policy"
      />
      <span
        className={
          errors[name] && touched[name]
            ? "checkmark absolute top-0 -left-4 w-6 h-6 border border-red rounded"
            : "checkmark absolute top-0 -left-4 w-6 h-6 border border-orange rounded after:hidden after:absolute after:content-[''] after:top-50 after:left-50 after:w-2 after:h-3 after:border-2 after:border-orange after:border-t-0 after:border-l-0 after:-translate-x-50 after:-translate-y-50 after:rotate-45"
        }
      ></span>
      {label}
    </label>
  );
}

CheckboxField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.node,
};

export default CheckboxField;
