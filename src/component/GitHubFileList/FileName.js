import React from "react";
import PropTypes from "prop-types";
import { TableCell } from "@material-ui/core";
import FileIcon from "./FileIcon.js";

function FileName({ file }) {
  return (
    <>
      <TableCell>
        <FileIcon file={file} />
      </TableCell>
      <TableCell>{file.FileName}</TableCell>
    </>
  );
}

FileName.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileName;
