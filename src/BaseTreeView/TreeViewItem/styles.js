import { makeStyles } from "@material-ui/core";

export const useTreeViewItemStyles = makeStyles(() => ({
  treeViewItemRoot: {
    "& .MuiTreeItem-content": {
      backgroundColor: "unset"
    },

    "&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "unset"
    }
  }
}));
