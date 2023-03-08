import { useState, useEffect } from "react";
import axios from "axios";

export function BankPage() {
    const [bank, setBank] = useState('Loading...');

    async function sendReq(){
        let url = 'https://eodcgezih9e7crf.m.pipedream.net'
        url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app/'
        url = 'https://rosaboyle-organic-guacamole-r4p75rwxqqhxj4r-9151.preview.app.github.dev/'
        url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app'
        url = 'http://34.118.242.180/api/v1'
        url = 'https://troom.resumeai.us/api/v1'
        
        // await fetch("http://34.118.242.180/api/v1")

        axios.get(url, {
            withCredentials: true,
        })
        .then((response) => {
            setBank(response.data);
            const cookie = document.cookie
            console.log({cookie})
        })
        .catch((error) => {
            console.log(error);
        });

    }

    return (
        <div>
            {bank}
            <button onClick={sendReq}>Send Request</button>
            <h1>Blank Page2</h1>
        </div>

    )

}
