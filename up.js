let axios = require('axios');
let FormData = require('form-data');
let fs = require('fs');
let form = new FormData();
// form.append('file', fs.createReadStream('./README1.md'));

let config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};
let baseurl = "https://storage.googleapis.com/safebenchcmu123s/image4.txt?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=localdevservice%40safebench-cmu.iam.gserviceaccount.com%2F20230213%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230213T021542Z&X-Goog-Expires=259201&X-Goog-SignedHeaders=host&X-Goog-Signature=7c6a80a1865395d93838cdd56dc4d55d1e81e8c58129ca44d3c2a768fbec059c17d20e42f871a4d4d987d48118a4eb53fcf54eb7c63f14b2d7f7f802b497d72c8965d26d4bca97d669971f767f4647960efee9fcdbb05fd26383a7af45fcf19695c1955bac9de89b472a3588b877b174631d2bd5844b4f18ee627434537700ebe4d14b4750b6e9cf16e21bedfaf1592a082026bba62d0dac75780631549e5d2992394fb508a693232948dff7ba647c13f329efed8fb8f5919ed80d084d6054659afab97e239da94317a85019286b213450b493c00cf5950236c54783370a79e5f5399ad4fa7962c8b11c45b39511c24fe4a3dfcb13312b023ca1df0249de04df"
a = axios.put(baseurl, form, config)
