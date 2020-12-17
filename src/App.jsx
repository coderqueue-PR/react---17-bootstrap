import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () =>{
    return(
        <React.Fragment>
        <h1 className="text-center mt-4">Welcome bootstrap bro</h1>
            <div class="container">
  <div className="row">
    <div className="col-sm"><div class="card shadow p-3 mb-5 bg-white rounded">
  <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card shadow p-3 mb-5 bg-white rounded">
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card shadow p-3 mb-5 bg-white rounded">
  <img src="https://picsum.photos/200/310" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  </div>
</div>
        </React.Fragment>
    )
}
export default App;