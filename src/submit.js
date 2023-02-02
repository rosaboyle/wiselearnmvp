import { UseMilligram } from "./millilib"
export function SubmitForm(){


    return (
        <div style={{ width: "80%", margin: "auto", padding: "80px 0px 0px 0px" }}>
            <UseMilligram />
            <form>
                <fieldset>
                    <legend>Submit Form</legend>
                    <label for="team">Team Name</label>
                    <input type="text" id="team" placeholder="Team Name" />
                    <label for="members">Members</label>
                    <input type="text" id="members" placeholder="Members" />
                    <label for="score">Score</label>
                    <input type="text" id="score" placeholder="Score" />
                    <label for="entries">Entries</label>
                    <input type="text" id="entries" placeholder="Entries" />
                    <label for="last">Last</label>
                    <input type="text" id="last" placeholder="Last" />
                    <button class="button" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
        
    )
}