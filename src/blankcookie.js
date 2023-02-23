import { useState, useEffect } from "react";
import axios from "axios";

export function BankPage() {
    const [bank, setBank] = useState('Loading...');

    function sendReq(){
        let url = 'https://eodcgezih9e7crf.m.pipedream.net'

        axios.get(url, {
            withCredentials: true,
        })
        .then((response) => {
            setBank(response.data.body);
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
