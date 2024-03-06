import PropTypes from "prop-types";
import new_ from "./new_";

export default function ShowName({ name, show }) {
  console.log("name:", name);
  console.log("show:", show);

  return(
    <div>
        <new_ />
    </div>
  );
}

ShowName.propTypes = {
  name: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};
