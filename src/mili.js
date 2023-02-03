import { Helmet } from "react-helmet";

import { UseMilligram } from "./millilib";
import logo from './images/av1.jpeg';
import { SponsorList } from './sponsors';
export function NavigationBar() {
  return (
    <nav className="navigation">
      <title>SafeBench | A Metaverse competition for self driving cars</title>
      {/* <link rel="icon" href="https://milligram.io/images/icon.png" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
    />
    <link rel="stylesheet" href="../dist/milligram.min.css" />
     */}
      <link rel="stylesheet" href="https://milligram.io/styles/main.css" />
      <section className="container">

        <h1 className="title">SafeBench</h1>

        <ul className="navigation-list float-right">
          <li className="navigation-item">
            <a className="navigation-link" href="/join" data-popover
            >Join Competition</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/" data-popover
            >Home</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/" data-popover
            >Sponsors</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/" data-popover
            >Help</a
            >
          </li>
        </ul>

      </section>
    </nav>
  )
}

export function Mili() {
  return <>
    <UseMilligram />
    <NavigationBar />
    <div style={{ width: "50%", margin: "auto", padding: "80px 0px 0px 0px" }}>

      <h1 style={{ "textAlign": "center" }} >SafeBench: Safe Autonomous Driving Competition</h1>
      <h3 style={{ "textAlign": "center" }}>A competition to benchmark Safety Evaluation of Autonomous Vehicles</h3>
      <img src="https://carla.readthedocs.io/en/0.9.4/img/manual_control.png" />
      <h3>Introduction:</h3>
      <p>
        Welcome to the SafeBench Safe Autonomous Driving Competition! Our goal is to bring together the best minds in autonomous driving to develop innovative solutions that prioritize safety.
      </p>
      <h3>Eligibility:</h3>
      <p>
        This competition is open to individuals, teams, and organizations worldwide who are interested in developing autonomous driving technology. Participants must be over the age of 18 and agree to the competition rules and regulations.
      </p>
      <h3>Competition Overview:</h3>
      <p>
        The competition will consist of several rounds, each evaluating the safety performance of the participants' autonomous driving systems. Participants will submit their solution as a docker image, which will be automatically tested against a set of scenarios on the CARLA platform. The leaderboard will automatically calculate the score based on the performance of the participants' systems.
      </p>
      <h3>Judging Criteria:</h3>
      <p>
        The judges will evaluate the participants' systems based on several criteria, including but not limited to:
        <ul>
          <li>Safe and responsible driving behavior</li>
          <li>Accident avoidance and response</li>
          <li>Ability to handle challenging road conditions and scenarios</li>
          <li>Efficient use of energy and resources</li>
        </ul>
      </p>
      <h3>Prizes:</h3>
      <p>
        The winner of the competition will receive a significant cash prize, as well as recognition and exposure in the autonomous driving industry. Second and third place will also receive prizes.
      </p>
      <h3>Submission Guidelines:</h3>
      <p>
        <ul>
          <li>Participants must submit their solution as a docker image</li>
          <li>The docker image must include all necessary components and dependencies to run the autonomous driving system on the CARLA platform</li>
          <li>Participants must submit their solution by the deadline</li>
          <li>Participants may submit multiple solutions. But only the final solution will be considered for the final evaluation.</li>
        </ul>
      </p>
      <h3>Rules and Regulations:</h3>
      <p>
        <ul>
          <li>Participants must agree to all rules and regulations outlined in the competition guidelines</li>
          <li>Participants must not engage in any unethical or illegal behavior while participating in the competition</li>
          <li>Participants must comply with all local and national laws</li>
          <li>Participants must indemnify and hold harmless the competition organizers from any liability arising from their participation in the competition</li>
        </ul>
      </p>
      <h3>Contact Us:</h3>
      <p>
        For more information about the Safe Autonomous Driving Competition powered by CARLA, or if you have any questions or concerns, please contact us at [insert contact information].
      </p>
      <h3>Conclusion:</h3>
      <p>
        We are excited to see the innovative solutions that will emerge from this competition. By leveraging the CARLA platform, we hope to push the boundaries of what is possible in safe autonomous driving </p>
      {/* Generated using OpenAI chatgpt. Prompt: Some content for a webpage to host safe autonomous driving competition. 
       The competition is based on autonomous car development platform CARLA.
       The submission is made as a docker image. The leaderboard will automatically calculate the score */}

      <br />

      <br />
      <br />

      {/* <h2 style={{"textAlign": "center"}}>Sponsors</h2> */}

      {/* <img src={logo}/> */}
      <SponsorList />



    </div>
  </>
}