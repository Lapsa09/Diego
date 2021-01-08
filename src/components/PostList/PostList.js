import React from "react";
import { List, TextField, Datagrid } from "react-admin";

function PostList(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField />
      </Datagrid>
    </List>
  );
}

export default PostList;
