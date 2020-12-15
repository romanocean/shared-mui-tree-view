import React, { memo, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import TreeView from "@material-ui/lab/TreeView";
// import classNames from "classnames";
import _ from "lodash";

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import TreeViewItem from "./TreeViewItem";
import { TreeViewItemShape } from "./treeViewPropTypes";

import { useBaseTreeViewStyles } from "./styles";

const BaseTreeView = memo((props) => {
  const {
    data,
    onAfterExpand,
    onAfterSelect,
    onBeforeExpand,
    onBeforeSelect,
    renderTreeNode,
    ...nativeProps
  } = props;

  const baseTreeViewClasses = useBaseTreeViewStyles();

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = useCallback(
    (event, nodeIds) => {
      setExpanded(nodeIds);
    },
    [setExpanded]
  );

  const getChildrenIds = useCallback(
    (node) => [
      node.id,
      ...(node.items ? node.items.map(getChildrenIds).flat() : [])
    ],
    []
  );

  const setSelection = useCallback(
    (node, withDepth = false) => {
      const { id: nodeId } = node;

      const isAlreadySelected = selected.includes(nodeId);

      if (!withDepth) {
        setSelected((currentlySelectedIds) =>
          isAlreadySelected
            ? currentlySelectedIds.filter((itemId) => itemId !== nodeId)
            : [...currentlySelectedIds, nodeId]
        );
      } else {
        const selectedIds = getChildrenIds(node);

        setSelected((currentlySelectedIds) => {
          const res = isAlreadySelected
            ? _.union(currentlySelectedIds, selectedIds)
            : _.difference(selectedIds, currentlySelectedIds);

          return isAlreadySelected
            ? _.union(currentlySelectedIds, selectedIds)
            : _.difference(selectedIds, currentlySelectedIds);
        });
      }
    },
    [getChildrenIds, selected, setSelected]
  );

  const handleSelect = useCallback(
    (event, nodeIds) => {
      setSelected(nodeIds);
    },
    [setSelected]
  );

  const toggleExpandedStateById = useCallback(
    (nodeId) => {
      const isAlreadyExpanded = expanded.includes(nodeId);

      setExpanded((expandedIds) =>
        isAlreadyExpanded
          ? expandedIds.filter((itemId) => itemId !== nodeId)
          : [...expandedIds, nodeId]
      );
    },
    [expanded]
  );

  const treeItemProps = useMemo(
    () => ({
      expanded,
      setExpanded,
      selected,
      setSelected,
      setSelection,
      toggleExpandedStateById
    }),
    [
      expanded,
      setExpanded,
      selected,
      setSelected,
      setSelection,
      toggleExpandedStateById
    ]
  );

  const renderTree = useCallback(
    (node) =>
      Array.isArray(node)
        ? node.map((item) => renderTreeNode(item, treeItemProps))
        : renderTreeNode(node, treeItemProps),
    [renderTreeNode, treeItemProps]
  );

  return (
    <TreeView
      className={baseTreeViewClasses.treeViewRoot}
      expanded={expanded}
      onNodeToggle={handleToggle}
      // onNodeSelect={handleSelect}
      selected={selected}
      {...nativeProps}
    >
      {renderTree(data)}
    </TreeView>
  );
});

BaseTreeView.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape(TreeViewItemShape),
    PropTypes.arrayOf(TreeViewItemShape)
  ]).isRequired,
  onAfterExpand: PropTypes.func,
  onAfterSelect: PropTypes.func,
  onBeforeExpand: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  renderTreeNode: PropTypes.func.isRequired
};

BaseTreeView.defaultProps = {
  onAfterExpand: null,
  onAfterSelect: null,
  onBeforeExpand: null,
  onBeforeSelect: null
};

BaseTreeView.Item = TreeViewItem;
BaseTreeView.ItemShape = TreeViewItemShape;

export default BaseTreeView;
