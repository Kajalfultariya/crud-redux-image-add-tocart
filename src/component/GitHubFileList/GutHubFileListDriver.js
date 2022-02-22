import React from "react";
import { Time } from "../props-tweet/Message";
import FileList from "./FileList.js";

const files = [
  {
    FileName: "build",
    IsFile: false,
    CommitMessage: "Message 1",
    Time: "2020-07-15"
  },
  {
    FileName: "docs",
    IsFile: false,
    CommitMessage: "Message 2",
    Time: "2019-07-15"
  },

  {
    FileName: "log0",
    IsFile: true,
    CommitMessage: "Message 4",
    Time: "2017-07-15"
  },
  {
    FileName: "examples",
    IsFile: false,
    CommitMessage: "Message 3",
    Time: "2018-07-15"
  },
  {
    FileName: "log0",
    IsFile: true,
    CommitMessage: "Message 4",
    Time: "2017-07-15"
  }
];

function GitHubFileList(params) {
  const filesOrdered = files.sort((a, b) => a.IsFile - b.IsFile);
  return <FileList files={filesOrdered} />;
}

export default GitHubFileList;
