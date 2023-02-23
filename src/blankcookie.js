import { useState, useEffect } from "react";
import axios from "axios";

export function BankPage() {
    const [bank, setBank] = useState('Loading...');

    function sendReq(){
        let url = 'https://eodcgezih9e7crf.m.pipedream.net'
        url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app/'
        url = 'https://rosaboyle-organic-guacamole-r4p75rwxqqhxj4r-9151.preview.app.github.dev/'
        url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app'
        url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app'

        axios.get(url, {
            withCredentials: true,
        })
        .then((response) => {
            setBank(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

    }

    return (
        <div>
            {bank}
            <button onClick={sendReq}>Send Request</button>
            <h1>Bank Page</h1>
        </div>

    )

}
