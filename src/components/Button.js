import PropTypes from "prop-types";

const Button = ({
  label = "Hello World",
  backgroundColor = "red",
  size = "md",
}) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    borderRadius: "5px",
    border: "1px solid #fff",
  };
  return <button style={style}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

export default Button;
