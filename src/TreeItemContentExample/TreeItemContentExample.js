import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { memo } from "react";

import Folder from "@material-ui/icons/Folder";
import FolderOpen from "@material-ui/icons/FolderOpen";

import { useTreeItemStyles } from "./styles";

const TreeItemContentExample = ({
  key,
  isExpanded,
  isSelected,
  currentNode
}) => {
  const treeItemClasses = useTreeItemStyles({ isSelected });

  return (
    <div className={treeItemClasses.treeItemRoot}>
      {isExpanded ? (
        <FolderOpen className={treeItemClasses.treeItemIcon} />
      ) : (
        <Folder className={treeItemClasses.treeItemIcon} />
      )}
      <Typography variant="subtitle1" component="span">
        {currentNode.name}
      </Typography>
    </div>
  );
};

TreeItemContentExample.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  currentNode: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired
};

export default memo(TreeItemContentExample);
