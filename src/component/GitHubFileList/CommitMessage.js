import { TableCell } from "@material-ui/core";
import React from "react";

function CommitMessage({ commit }) {
  return <TableCell>{commit}</TableCell>;
}

export default CommitMessage;
