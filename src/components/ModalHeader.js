import PropTypes from "prop-types";
import { RiCloseLine } from "react-icons/ri";

function ModalHeader({ onClose, children }) {
  return (
    <div className="w-full p-6 bg-bggray relative">
      <RiCloseLine
        onClick={onClose}
        className="text-xl absolute top-50 right-6 -translate-y-50 cursor-pointer"
      />
      {children}
    </div>
  );
}

ModalHeader.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default ModalHeader;
