import axios from "axios";
// import fs from "fs";

const baseurl = "https://storage.googleapis.com/safebenchcmu123s/image4.txt?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=localdevservice%40safebench-cmu.iam.gserviceaccount.com%2F20230213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230213T025933Z&X-Goog-Expires=901&X-Goog-SignedHeaders=host&X-Goog-Signature=10aa238e0b6c2ea1eb32cbdc32db76eff34e4974281b44cff659d499ae77c360527f4001bdf8c5db1e63db76af6725934665b5d2abb6997eb37be0cfe07d366dc361455357574ff2ff8c0319112070bc8ccdabd9d66c937072d981ab4372e57b98070b15ea99e79a57ce6e295a0d95f978534ad650d9159c89f6f2fa4765d070813c672d3f60f101790440fa8182dc89afb2ceaecfded45e704b29cf28f0e23c24b4d11bcf2fb41caaf18b1d8466acee23745d1b42248256c778a68e7bcdd42f982dd07e2460546c9ada5f07e33dffe965cd14233370fc7afd1e6276f75ebf62c4f5e54096fc1724e63394ea9574f4a15adaa0eb3c372b29ec00002982a52137"
const puturl='https://storage.googleapis.com/safebenchcmu123s/image4.txt?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=localdevservice%40safebench-cmu.iam.gserviceaccount.com%2F20230213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230213T025933Z&X-Goog-Expires=259201&X-Goog-SignedHeaders=host&X-Goog-Signature=31c649b6e182c63d5f6a1c845e3f546779a8c3cb255a7a70fdd1569e4d703253fcd33f75263f8fa0f5c51ae527c011f4523d8f6e1627f1e1c4a53c0934f8c86b5f7047cbe0261c4db6e33a4fb450de69457104f0976feaf0fe86d6ef27eb0da8afdcf42684a651110eeb85eaea0a394e37ff190f6f5d4983e9fca41bab3492f56e03626247ddbb3f2404da3b87ffdc419e80294db7fe8b53c92773e8566f9bdf83064ac012bf8b7e74bb16facee69503fb17f04fa173fbb4a21122e8a1f7afcad96927688ebd4348d1a5abecd0d6f4bbd8bb0f68f303c3786e3294e158227afd3c96a55b705ced60f7f1bcf371ded04cee1b3c4d86dd886c7026946f773b771f'
const http = axios.create({
  baseURL: puturl,
  headers: {
    "Content-type": "application/json",
  },
});

const upload = (file, onUploadProgress)=> {
//   let formData = new FormData();
console.log({file})
//   formData.append("file", file);

  return http.put("/", file, {
    headers: { 
        'Content-Type': 'application/javascript'
      },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;