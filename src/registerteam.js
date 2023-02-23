import { UseMilligram } from "./millilib"
import { NavigationBar} from './mili'
import { useEffect, useState } from "react"
import axios from "axios";

export function RegisterTeam() {

    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");
    const [email4, setEmail4] = useState("");


    // useEffect(() => {
    //     async function fetchData(){

    //         console.log("useEffect");
        
    //         console.log(" I am here");
    //         // console.log(email1);
    //         // const url = 'https://rosaboyle-organic-guacamole-r4p75rwxqqhxj4r-9149.preview.app.github.dev/'
    //         const url = 'https://safebenchbackend1-54ohddydnq-uc.a.run.app/'
    //         const a = await axios.get(url)
            
    
    //         console.log(a.data);
    //         setEmail1("wpppp")
        
    //         console.log({email1});
    //         console.log({email2});
    //         console.log({email3});
    //         console.log({email4});
    //     }
    //     // fetchData();
    // }, [email1, email2, email3, email4]);


    return (
        <>
        <NavigationBar/>
        <div style={{ width: "40%", margin: "auto", padding: "80px 0px 0px 0px" }}>
            {/* <NavigationBar /> */}
            <UseMilligram />
            {/* <h1>Register your team</h1>
             */}
            {email1}

            <form>
                {/* <fieldset> */}
                    <legend>Register your team</legend>
                    <label for="emailField1">Team Member 1 Email</label>
                    <input type="email" placeholder="jdoe@cmu.edu" id="emailField1" />
                    <button className="button" onClick={console.log("Hello")}>Invite</button>

                    <label for="emailField2">Team Member 2 Email</label>
                    <input type="email" placeholder="" id="emailField2" />
                    <button className="button" type="submit">Invite</button>

                    <label for="emailField3">Team Member 3 Email</label>
                    <input type="email" placeholder="" id="emailField3" />
                    <button className="button" type="submit">Invite</button>

                    <label for="emailField4">Team Member 4 Email</label>
                    <input type="email" placeholder="" id="emailField4" />
                    <button className="button" type="submit">Invite</button>


                    
                {/* </fieldset> */}
            </form>
        </div>
</>
    )
}