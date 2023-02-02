import { UseMilligram } from "./millilib"
export function RegisterForm() {


    return (
        <div style={{ width: "40%", margin: "auto", padding: "80px 0px 0px 0px" }}>
            <UseMilligram />

            <form>
                <fieldset>


                    <legend>Sign Up</legend>
                    <label for="nameField">Name</label>
                    <input type="text" placeholder="John Doe" id="nameField" />
                    <label for="emailField">Email</label>
                    <input type="email" placeholder="jdoe@cmu.edu" id="emailField" />
                    {/* University or Company */}
                    <label for="universityField">University or Company</label>
                    <input type="email" placeholder="Carnegie Mellon University" id="universityField" />
                    {/* Current Position */}
                    <label for="positionField">Current Position</label>
                    <input type="email" placeholder="PhD Student" id="positionField" />

                    <label for="passwordField">Password</label>
                    <input type="password" placeholder="" id="passwordField" />
                    <label for="passwordField">Confirm Password</label>
                    <input type="password" placeholder="" id="passwordField" />
                    <button className="button" type="submit">Sign Up</button>
                </fieldset>
            </form>
        </div>

    )
}