import { UseMilligram } from "./millilib";
import {NavigationBar} from './mili'

export function SponsorList(){
    return (<><h2 style={{"textAlign": "center"}}> Gold Sponsors</h2>
    <div class="row">

        <div class="column "><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png" /></div>
        <div class="column column-offset-10"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Qualcomm-Logo.svg" /></div>
        <div class="column column-offset-10">Sponsor 3</div>
    </div>
    <h4 style={{"textAlign": "center"}}>Silver Sponsors</h4>
    <div class="row">

        <div class="column"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png" /></div>
        <div class="column"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Qualcomm-Logo.svg" /></div>
        <div class="column">Sponsor 3</div>
        <div class="column">Sponsor 4</div>
        <div class="column">Sponsor 5</div>
        <div class="column">Sponsor 6</div>
        <div class="column">Sponsor 7</div>
    </div></>)
}

export function Sponsors() {
    return (
        <div style={{ width: "80%", margin: "auto", padding: "120px 0px 0px 0px" }}>
            <UseMilligram />
            <NavigationBar />
            <SponsorList />
            

        </div>
    )
}