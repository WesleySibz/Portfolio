import PropTypes from 'prop-types';
import {motion} from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>

      <svg width="25" height="25" viewBox="0 0 23 23">

        <motion.path
          strokeWidth="4" 
          stroke="black" 
          strokeLinecap="round" 
          variants={{
            closed:{d:"M 2 2 L 20 2"},
            open:{d:"M 3 16.5 L 17 2.5"},
          }}
        />

        <motion.path 
          strokeWidth="4" 
          stroke="black" 
          strokeLinecap="round" 
          d="M 2 10 L 20 10"
          variants={{
            closed:{opacity:"1"},
            open:{opacity:"0"},
            }}
          />
        <motion.path
          strokeWidth="4" 
          stroke="black" 
          strokeLinecap="round" 
          variants={{
            closed:{d:"M 2 18 L 20 18"},
            open:{d:"M 3 2.5 L 17 16.346"},
          }}
        />
      </svg>

    </button>
  );
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
