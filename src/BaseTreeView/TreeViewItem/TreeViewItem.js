import React, { memo } from "react";
import PropTypes from "prop-types";
import TreeItem from "@material-ui/lab/TreeItem";
import classNames from "classnames";

import { TreeViewItemShape } from "../treeViewPropTypes";
import { useTreeViewItemStyles } from "./styles";

const TreeViewItem = ({
  classes,
  children,
  isExpanded,
  isSelected,
  node,
  renderLabel,
  ...nativeProps
}) => {
  const treeViewItemStyles = useTreeViewItemStyles();

  const treeViewItemClasses = classNames(
    treeViewItemStyles.treeViewItemRoot,
    classes.treeViewItemRoot
  );

  return (
    <TreeItem
      className={treeViewItemClasses}
      key={node.id}
      label={renderLabel()}
      nodeId={node.id}
      {...nativeProps}
    >
      {children()}
    </TreeItem>
  );
};

TreeViewItem.propTypes = {
  classes: PropTypes.shape({
    treeViewItemRoot: PropTypes.string
  }),
  children: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  node: PropTypes.shape(TreeViewItemShape).isRequired,
  renderLabel: PropTypes.func.isRequired
};

TreeViewItem.defaultProps = {
  classes: {
    treeViewItemRoot: ""
  }
};

export default memo(TreeViewItem);
