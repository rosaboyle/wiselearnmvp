import axios from "axios";



const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

const upload = (file, onUploadProgress)=> {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;