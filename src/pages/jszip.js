import JSZip from "jszip";
import { saveAs } from "file-saver";
import fileDownload from 'js-file-download'
var zip = JSZip();


const download = () => {

  zip.generateAsync({ type: "blob" }).then(function(blob) {
    saveAs(blob, "download.zip");
    saveAs(blob, "downloaded.tar.gz");
  });
};

export const generateZip = arr => {
  if (arr.length) {
    for (const element of arr) {
      zip.file(`images/image_${element.id}.jpg`, element.file, {
        binary: true
      });
    }

    download();
  }
};
