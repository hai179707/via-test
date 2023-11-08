import PropTypes from "prop-types";
import { memo } from "react";

function Button({
  theme = "orange",
  type = 'button',
  icon:Icon,
  className = "",
  onClick = () => {},
  disable = false,
  children,
}) {
  let classNames =
    className +
    " font-semibold rounded px-[18px] py-3 max-h-[50px] flex gap-1 justify-center items-center cursor-pointer select-none transition-opacity duration-500";

  if (theme === "orange") classNames += " text-white bg-lorange border border-lorange";
  else if (theme === "green") classNames += " text-white bg-green border border-green";
  else if (theme === "gray") classNames += " text-black bg-btngray border border-btngray";
  else if (theme === "red") classNames += " text-white bg-red border border-red";

  if(disable) classNames += " opacity-50 pointer-events-none"

  return (
    <button className={classNames} onClick={onClick} type={type}>
      {Icon && <Icon />}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool
};

export default memo(Button);
