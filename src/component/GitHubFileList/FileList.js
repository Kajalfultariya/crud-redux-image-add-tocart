import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@material-ui/core";
import FileItem from "./FileItem";

const useStyles = makeStyles({
  root: {
    width: "600px"
  }
});

function FileList({ files }) {
  const styles = useStyles();
  return (
    <TableContainer container={Paper}>
      <Table className={styles.root}>
        <TableHead>
          <TableRow>
            <TableCell>Icon</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Commit Message</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file, i) => (
            <FileItem key={i} file={file} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      FileName: PropTypes.string.isRequired,
      IsFile: PropTypes.bool.isRequired,
      CommitMessage: PropTypes.string.isRequired,
      Time: PropTypes.string.isRequired
    })
  )
};

export default FileList;
