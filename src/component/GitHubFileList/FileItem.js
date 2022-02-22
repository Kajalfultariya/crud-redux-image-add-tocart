import React from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell } from "@material-ui/core";
import { Time } from "../props-tweet/Message";
import FileName from "./FileName.js";
import CommitMessage from "./CommitMessage";

function FileItem({ file }) {
  return (
    <>
      <TableRow>
        <FileName file={file} />
        <CommitMessage commit={file.CommitMessage} />
        <TableCell>
          <Time timestamp={file.Time} />
        </TableCell>
      </TableRow>
    </>
  );
}

FileItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileItem;
