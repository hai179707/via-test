import PropTypes from "prop-types";
import { memo } from "react";

function Typography({
  type,
  color,
  align,
  size = "nm",
  weight = 400,
  className = "",
  children,
  ...props
}) {
  let Comp = "p";
  let classNames = className + " ";

  if (type) Comp = type;

  if (color === "orange") classNames += "text-orange ";
  if (color === "lorange") classNames += "text-lorange ";
  else if (color === "green") classNames += "text-green ";
  else if (color === "blue") classNames += "text-blue ";
  else if (color === "white") classNames += "text-white ";
  else if (color === "red") classNames += "text-red ";

  if (align === "center") classNames += "text-center ";
  if (align === "right") classNames += "text-right ";

  if (size === "xxl") classNames += "text-xxl ";
  else if (size === "xl") classNames += "text-xl ";
  else if (size === "lg") classNames += "text-lg ";
  else if (size === "nm") classNames += "text-nm ";
  else if (size === "sm") classNames += "text-sm ";
  else if (size === "xs") classNames += "text-xs ";

  if (weight === 600) classNames += "font-semibold ";

  return (
    <Comp className={classNames} {...props}>
      {children}
    </Comp>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.number,
  className: PropTypes.string,
};

export default memo(Typography);
