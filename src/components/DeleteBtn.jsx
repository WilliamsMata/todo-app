import PropTypes from "prop-types";

export const DeleteBtn = ({ onClick }) => {
  return (
    <button className="btn btn-danger d-flex" onClick={onClick}>
      <img
        style={{ width: 20, aspectRatio: 1 / 1.5 }}
        className="align-self-center justify-self-center"
        src="./delete-alt-svgrepo-com.svg"
        alt="delete"
      />
    </button>
  );
};

DeleteBtn.propTypes = {
  onClick: PropTypes.func,
};
