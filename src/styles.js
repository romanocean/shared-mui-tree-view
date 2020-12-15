import { makeStyles } from "@material-ui/core";

export const useTreeStyles = makeStyles({
  treeItem: {
    "& .MuiTreeItem-group": {
      // margin: 0
    }
  },
  treeItemSelected: {
    "& .MuiTreeItem-content": {
      backgroundColor: "rgba(0,159,227, 0.1)"
    }
  },
  listIcon: {
    width: "auto",
    fontSize: "16px"
  }
});
