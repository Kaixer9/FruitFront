import { Link } from "react-router-dom";

function Button({ path, text }) {
  return (
    <div>
    <Link to={path}>
      <button>{text}</button>
    </Link>
    </div>
  )
}

export default Button