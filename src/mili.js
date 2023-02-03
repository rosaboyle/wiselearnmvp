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
      <a href="/"><h1 className="title">SafeBench</h1></a>

        

        <ul className="navigation-list float-right">
          <li className="navigation-item">
            <a className="navigation-link" href="/registerteam" data-popover
            >Join Competition</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/" data-popover
            >Home</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/sponsors" data-popover
            >Sponsors</a
            >
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="/register" data-popover
            >Login/Sign Up</a
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
      <h3 style={{ "textAlign": "center" }}>A unified evaluation platform to benchmark safety and robustness of Autonomous Vehicles</h3>
      <img style={{ "align": "center" }} src="https://carla.readthedocs.io/en/0.9.4/img/manual_control.png" />
      <br/>
      <br/>
      <br/>
      If you find this competition useful for your research please cite the following paper.
      <pre class="code prettyprint lang-html"><code class="code-content">
        {`@misc{
https://doi.org/10.48550/arxiv.2206.09682,
doi = {10.48550/ARXIV.2206.09682}, url = {https://arxiv.org/abs/2206.09682},
author = {Xu, Chejian and Ding, Wenhao and Lyu, Weijie and Liu, Zuxin and Wang, Shuai and He, Yihan and Hu, Hanjiang and Zhao, Ding and Li, Bo}, keywords = {Robotics (cs.RO), FOS: Computer and information sciences, FOS: Computer and information sciences},
title = {SafeBench: A Benchmarking Platform for Safety Evaluation of Autonomous Vehicles},
publisher = {arXiv}, year = {2022}, copyright = {Creative Commons Attribution 4.0 International}
}
          `}

      </code></pre>

      <h3>Competition Overview:</h3>
      <p>
        Welcome to the SafeBench Safe Autonomous Driving Competition! We invite the best minds in autonomous driving to develop innovative solutions that prioritize safety.
        <br />
        <br />
        Several recent studies have shown machine learning algorithms are vulnerable to adverserial manipulation or natural perturbations. As a result, several approaches have been explored to overcome
        the limitations of machine learning algorithms. This competition aims to evaluate the safety and robustness of autonomous driving systems on a unified platform.
      </p>
      <h3>Important Dates:</h3>
      <p>
        <ul>
          <li>March 1: Last day to register</li>
          <li>June 1: Early submission deadline</li>
          <li>November 1: Deadline to submit your solution</li>
        </ul>
      </p>
      <h3>Eligibility:</h3>
      <p>
        This competition is open to individuals, teams, and organizations worldwide who are interested in developing autonomous driving technology. Participants must be over the age of 18 and agree to the competition rules and regulations.
      </p>
      <h3>Evaluation Criteria:</h3>
      <p>

        Complete desctipion of the evaluation criteria can be found in our <a href="https://arxiv.org/abs/2206.09682">SafeBench Paper</a>.
        The following metrics are considered for evaluation
        <ul>
          <li>Safety level: collision rate (CR), frequency of running red lights (RR), frequency of running stop signs (SS), and average distance
            driven out of road (OR)</li>
          <li>Functionality level : Ability to complete a specific route and task.</li>
          <li>Etiquette level : average acceleration (ACC), average yaw velocity (YV), and frequency of lane invasion (LI)</li>
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
          <li>Participants must not engage in any unethical or illegal behavior while participating in the competition</li>
          <li>Participants must comply with all local and national laws</li>
          <li>Participants must indemnify and hold harmless the competition organizers from any liability arising from their participation in the competition</li>
        </ul>
      </p>
      <h3>Contact Us:</h3>
      <p>
        For more information about the Safe Autonomous Driving Competition powered by CARLA, or if you have any questions or concerns, please contact us at xyz@cmu.edu.
      </p>
      <h3>Organizers:</h3>
      <p>

      </p>


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