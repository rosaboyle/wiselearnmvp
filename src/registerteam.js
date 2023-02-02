import { UseMilligram } from "./millilib"
import { NavigationBar} from './mili'

export function RegisterTeam() {


    return (
        <>
        <NavigationBar/>
        <div style={{ width: "40%", margin: "auto", padding: "80px 0px 0px 0px" }}>
            {/* <NavigationBar /> */}
            <UseMilligram />

            <form>
                <fieldset>
                    <legend>Register your team</legend>
                    <label for="emailField1">Team Member 1 Email</label>
                    <input type="email" placeholder="jdoe@cmu.edu" id="emailField1" />
                    <button className="button" type="submit">Invite</button>

                    <label for="emailField2">Team Member 2 Email</label>
                    <input type="email" placeholder="" id="emailField2" />
                    <button className="button" type="submit">Invite</button>

                    <label for="emailField3">Team Member 3 Email</label>
                    <input type="email" placeholder="" id="emailField3" />
                    <button className="button" type="submit">Invite</button>

                    <label for="emailField4">Team Member 4 Email</label>
                    <input type="email" placeholder="" id="emailField4" />
                    <button className="button" type="submit">Invite</button>


                    
                </fieldset>
            </form>
        </div>
</>
    )
}