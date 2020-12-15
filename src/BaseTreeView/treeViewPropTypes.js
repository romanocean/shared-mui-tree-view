import PropTypes from "prop-types";

export const TreeViewItemShape = {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(TreeViewItemShape)),
  name: PropTypes.string
};
