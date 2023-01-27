import logo from "./Holberton-Logo.jpg";
import "./App.css";
import {getFullYear, getFooterCopy} from "./utils";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
           <form>
         <label for="mail">Email </label>
	  <input type="email" name="mail"/>
	  <label for="password">Password </label>
	  <input type="password" name="password"/>
            <button>OK</button>
	  </form>
      </div>
      <div className="App-footer">Copyright 2020 - holberton School</div>
    </div>
  );
}

export default App;
