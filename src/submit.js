import { UseMilligram } from "./millilib"
export function SubmitForm() {


    return (
        <div style={{ width: "40%", margin: "auto", padding: "80px 0px 0px 0px" }}>
            <UseMilligram />

            <form>
                <fieldset>
                    <legend>Submit Form</legend>
                    <input type="file" id="myFile" name="filename"/>

                    <label for="commentField">Comment</label>
                    <textarea placeholder="Updates: changed .." id="commentField"></textarea>
                    <progress className="progress" value="66" max="100">
                        <div className="progress">
                            <span className="progress-bar" width="25px">
                                66%
                            </span>
                        </div>
                    </progress>
                    <br/>
                    <button className="button" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>

    )
}