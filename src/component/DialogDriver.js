import React from "react";
import { Dialog, Title, Body, Footer } from "../component/Dialog/Dialog";
import ErrorBox from "../component/ErrorBox/ErrorBox";
import {
  FirstChildOnly,
  LastChildOnly
} from "../component/ErrorBox/FirstChildOnly";
import Tail from "../component/ErrorBox/Tail";
import Head from "../component/ErrorBox/Head";

function DialogDriver(params) {
  return (
    <React.Fragment>
      <Dialog>
        <Title content="This is Important" />
        <Body content="Here is some important text on eror or somehting." />
        <Footer content={<button>Close</button>} />
      </Dialog>
      <ErrorBox>Something wrong happened</ErrorBox>
      <FirstChildOnly>
        <p>Plamen</p>
        <p>Totev</p>
        <p>Pentchev</p>
      </FirstChildOnly>
      <LastChildOnly>
        <p>Plamen</p>
        <p>Totev</p>
        <p>Pentchev</p>
      </LastChildOnly>
      <Head number={3}>
        <p>Johan</p>
        <p>Maria</p>
        <p>Sonya</p>
        <p>Miroslav</p>
        <p>Totev</p>
        <p>Pentchev</p>
        <p>Teodor</p>
        <p>Miroslavov</p>
        <p>Totev</p>
      </Head>
      <Tail number={9}>
        <p>Johan</p>
        <p>Maria</p>
        <p>Sonya</p>
        <p>Miroslav</p>
        <p>Totev</p>
        <p>Pentchev</p>
        <p>Teodor</p>
        <p>Miroslavov</p>
        <p>Totev</p>
      </Tail>
    </React.Fragment>
  );
}

export default DialogDriver;
