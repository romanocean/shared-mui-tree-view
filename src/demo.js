import React, { useCallback } from "react";
import classNames from "classnames";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import data from "./temp";
import BaseTreeView from "./BaseTreeView";
import TreeItemContentExample from "./TreeItemContentExample";
import { useTreeStyles } from "./styles.js";

const Demo = () => {
  const treeStyles = useTreeStyles();

  const renderTreeNode = useCallback((node, props) => {
    const {
      depth = 0,
      expanded,
      selected,
      setSelection,
      toggleExpandedStateById
    } = props;

    const isExpanded = expanded.includes(node.id);
    const isSelected = selected.includes(node.id);

    const iconClickHandler = (ev) => {
      toggleExpandedStateById(node.id);
      ev.preventDefault();
    };

    const treeItemRootClasses = classNames({
      [treeStyles.treeItem]: !isSelected,
      [treeStyles.treeItemSelected]: isSelected
    });

    return (
      <BaseTreeView.Item
        classes={{
          treeViewItemRoot: treeItemRootClasses
        }}
        collapseIcon={
          <ExpandMoreIcon className={classNames(treeStyles.listIcon)} />
        }
        expandIcon={
          <ChevronRightIcon className={classNames(treeStyles.listIcon)} />
        }
        isExpanded={isExpanded}
        isSelected={isSelected}
        key={node.id}
        node={node}
        onIconClick={iconClickHandler}
        onLabelClick={(ev) => {
          setSelection(node, true);
          ev.preventDefault();
        }}
        renderLabel={() => (
          <TreeItemContentExample
            currentNode={node}
            isExpanded={isExpanded}
            isSelected={isSelected}
          />
        )}
      >
        {() =>
          Array.isArray(node.items) &&
          node.items.map((item) => renderTreeNode(item, props))
        }
      </BaseTreeView.Item>
    );
  }, []);

  return (
    <section>
      <BaseTreeView data={data} multiSelect renderTreeNode={renderTreeNode} />
    </section>
  );
};

export default Demo;
