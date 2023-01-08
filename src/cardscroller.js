import "./cardscroller.css";

export function RandomCard (){
    return  <div class="card">
    <img class="card-img-top" src="http://via.placeholder.com/300x250"/>
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Text Here</p>
    </div>
  </div>
}


export function CardScroller(){

return <>
  <div class="container-fluid mainpart">
    <div class="row">
      <div class="scrollcards">
      <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/250x150"/>
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="http://via.placeholder.com/300x150"/>
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Text Here</p>
            </div>
          </div>
        <RandomCard/>
        <RandomCard/>
        <RandomCard/>
        <RandomCard/>
        <RandomCard/>
        <RandomCard/>
        <RandomCard/>
      </div>
    </div>
   </div>
</>
}