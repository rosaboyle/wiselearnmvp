import axios from "axios";


const baseurl = "https://storage.googleapis.com/safebenchcmu123s/image1.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=localdevservice%40safebench-cmu.iam.gserviceaccount.com%2F20230213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230213T013826Z&X-Goog-Expires=901&X-Goog-SignedHeaders=host&X-Goog-Signature=9f5ee4e7488a4a893c5368d7de9fc340853c08b13953faea37a8076f2e4fb19d977274b234788fab47b8b28972dc1e43d3511f3f5a616a529d058445c402de1348245eec4f0ecf8d7f3c02f989d0a69c74e3bbcc5f83fb3db1270d7c5345342228ed84f18d9ecd90ca7ebb77a932e9cbe5542f3bbf3b18ed23aa86fc081901e5ee4f4218d7e4943ab642b243dcc74b975d72e3148638a2c0aee58938c865bc7bc0f0611fa72e66a32335f5eea72a3cc02bad4a74ea7e9ed72538213be79cb6b101b16e351c524d2f9a7495df336480016439081970b17d612d16c06097868fc4edfcaa4a71657b3b9b3eb1d962c6f4f809fc5118bacde378b5c19dc5a4dc9181"
const http = axios.create({
  baseURL: baseurl,
  headers: {
    "Content-type": "application/json",
  },
});

const upload = (file, onUploadProgress)=> {
//   let formData = new FormData();

//   formData.append("file", file);

  return http.put("/", file, {
    headers: {
      "Content-Type": "multipart/form-data",
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