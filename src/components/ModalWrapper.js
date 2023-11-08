import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function ModalWrapper({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-backdrop z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, duration: 0.3 }}
          exit={{ opacity: 0, duration: 0.3 }}
          onClick={onClose}
        >
          <div className="bg-white rounded absolute top-50 left-50 -translate-x-50 -translate-y-50 pb-6" onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalWrapper;
