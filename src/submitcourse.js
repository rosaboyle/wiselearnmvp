import { UseMilligram } from "./millilib"
import { NavigationBar } from './mili'
import axios from "axios";
import React, { useState } from "react";


export function SubmitCourse() {
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [total, setTotal] = useState(0);


    const selectFile = (event) => {
        const onUploadProgress = (progressEvent) => {
            let percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
            );
            setTotal(Math.round(progressEvent.total / 1000 ) + "KB");
            setLoaded(Math.round(progressEvent.loaded / 1000) + "KB");
            setProgress(percentCompleted);
            console.log({ percentCompleted })
        };


        const { files } = event.target;
        const selectedFiles = files[0];

        console.log({ selectedFiles })
        const url = 'https://storage.googleapis.com/safebenchcmu123s/app.txt?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=localdevservice%40safebench-cmu.iam.gserviceaccount.com%2F20230214%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230214T000648Z&X-Goog-Expires=259201&X-Goog-SignedHeaders=host&X-Goog-Signature=97e36341a833f540167ac1f610bf4f1f17449c25f52b189e821eddeea9e1e50c1a9c3952d550a0e794f3deb9f7bd9285ebd7cb9002c736f0a7f3af373cb8ed7e4c55d3a1fa49a70d4ea435b85544efe9de066ca83a65f761c47f598a1e4ae0accfaec37aaf958fb1291242fe7a8f8f6893aad79a9cd6048dd1b91d498543a5309138b236183f645c83a5748b61b71c3d5f3414e2b5a01b0b31c24641ac2c4e0dc90eccc1336b4abd7ed5ac3d2755f9ec1ce5b0876c9511ec6b119572272ed25c5260a0b713f8c4554b21118898cd1f39f05be8cc3f99d82f9c0fa16e219cb6f7af882e05db13eb77f33e3ef8ea6c04adac5382c57207dae53385870201fb559e';
        axios.put(url, selectedFiles, {
            headers: {
                'Content-Type': 'application/javascript'
            },
            onUploadProgress
        });
        // setCurrentFile(selectedFiles?.[0]);
        // setProgress(0);
    };



    return (
        <>
            <NavigationBar />
            <div style={{ width: "40%", margin: "auto", padding: "80px 0px 0px 0px" }}>
                <UseMilligram />

                <form>
                    <fieldset>
                        <legend>Upload course modules (.zip)</legend>
                        <input type="file" id="myFile" name="filename" onChange={selectFile} />
                        <br/>
                        <progress className="progress" value={progress} max="100">
                            <div className="progress">
                                <span className="progress-bar" width="25px">
                                    {progress}
                                </span>
                            </div>
                        </progress> {progress} % {loaded} / {total}
                        <br />

                        <label for="commentField">Notes and comments</label>
                        <textarea placeholder="Updates: changed .." id="commentField"></textarea>

                        <button className="button" type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}