/* eslint-disable react/prop-types */
function Button({ text, btnType }) {
  return (
    <a href="#" className={`btn btn-${btnType} commissioner-extrabold`}>
      {text}
    </a>
  );
}

export default Button;
