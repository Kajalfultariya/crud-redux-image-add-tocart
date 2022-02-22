import React from "react";
import PropTypes from "prop-types";
import DescriptionIcon from "@material-ui/icons/Description";
import FolderIcon from "@material-ui/icons/Folder";

function FileIcon({ file }) {
  return file.IsFile ? <DescriptionIcon /> : <FolderIcon />;
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileIcon;
