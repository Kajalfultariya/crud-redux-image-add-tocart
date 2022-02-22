import React from "react";
import Email from "./Email/Email";
import IconButton from "./Email/IconButton";

const email = {
  sender: "React Newsletter",
  recipient: "Plamen, Pentchev@wf.bam.com",
  subject: "React Newsletter - Isuue 36",
  date: "2020-07-15",
  message:
    "React Newsletter - July 15th 2020 Read this issue on the web http://news.bg"
};
const email2 = {
  sender: "Volker, Eckhardt@wf.bam.com",
  recipient: "Plamen, Pentchev@wf.bam.com",
  subject: "React Newsletter - Isuue 36",
  date: "2020-07-15",
  message:
    "React Newsletter - July 15th 2020 Read this issue on the web http://news.bg"
};

function EmailDriver(params) {
  return (
    <React.Fragment>
      <Email {...email} />
      <Email {...email2} />
      <Email {...email} />
      <Email {...email2} />
      <IconButton>Just Do It</IconButton>
    </React.Fragment>
  );
}

export default EmailDriver;
