import { Helmet } from "react-helmet";

import { UseMilligram } from "./millilib";
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
   <NavigationBar/>
    <div style={{ width: "50%", margin: "auto", padding: "80px 0px 0px 0px" }}>

      <h1>SafeBench Competition</h1>
      <h2>A Benchmarking Platform for Safety Evaluation of Autonomous Vehicles</h2>
      <h3>Heading</h3>
      <h4>Heading</h4>
      <h5>Heading</h5>
      <h6>Heading</h6>

      <blockquote>
        <p><em>Yeah!! Milligram is amazing.</em></p>
      </blockquote>

      <a class="button" href="#">Default Button</a>
      <button class="button button-outline">Outlined Button</button>
      <input class="button button-clear" type="submit" value="Clear Button">

      </input>
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>
      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>
      <dl>
        <dt>Description list item 1</dt>
        <dd>Description list item 1.1</dd>
      </dl>
      <form>
        <fieldset>
          <label for="nameField">Name</label>
          <input type="text" placeholder="CJ Patoilo" id="nameField" />
          <label for="ageRangeField">Age Range</label>
          <select id="ageRangeField">
            <option value="0-13">0-13</option>
            <option value="14-17">14-17</option>
            <option value="18-23">18-23</option>
            <option value="24+">24+</option>
          </select>
          <label for="commentField">Comment</label>
          <textarea placeholder="Hi CJ …" id="commentField"></textarea>
          <div class="float-right">
            <input type="checkbox" id="confirmField" />
            <label class="label-inline" for="confirmField">Send a copy to yourself</label>
          </div>
          <input class="button-primary" type="submit" value="Send" />
        </fieldset>
      </form>


      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Height</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stephen Curry</td>
            <td>27</td>
            <td>1,91</td>
            <td>Akron, OH</td>
          </tr>
          <tr>
            <td>Klay Thompson</td>
            <td>25</td>
            <td>2,01</td>
            <td>Los Angeles, CA</td>
          </tr>
        </tbody>
      </table>

    </div>
  </>
}