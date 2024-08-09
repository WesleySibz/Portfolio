import PropTypes from 'prop-types';

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="30" height="30" viewBox="0 0 24 24">
        <path d="M2 4 H21" strokeWidth="4" stroke="black" strokeLinecap="round"/>
        <path d="M2 12 H21" strokeWidth="4" stroke="black" strokeLinecap="round"/>
        <path d="M2 20 H21" strokeWidth="4" stroke="black" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

ToggleButton.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default ToggleButton;
