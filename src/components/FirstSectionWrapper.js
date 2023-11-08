import PropTypes from 'prop-types'
// Hình ảnh
import logo from "../assets/images/logo-light.png";
import shape1 from "../assets/images/shape1.png";
import shape2 from "../assets/images/shape2.png";
import shape3 from "../assets/images/shape3.png";

function FirstSectionWrapper({ children }) {
  return (
    <div className="h-[418px] first-section bg-no-repeat bg-bottom bg-cover relative p-7">
      <img src={logo} alt="Logo" className='absolute' />
      {/* Shape */}
      <img src={shape2} alt="shape2" className="absolute right-0 -top-1 z-0" />
      <img
        src={shape1}
        alt="shape1"
        className="absolute right-50 -top-1 translate-x-50 z-0"
      />
      <img
        src={shape3}
        alt="shape3"
        className="absolute right-2 top-50 -translate-y-50 z-0"
      />
      {children}
    </div>
  );
}

FirstSectionWrapper.propTypes = {
    children: PropTypes.node
}

export default FirstSectionWrapper;
