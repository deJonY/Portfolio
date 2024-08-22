import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Header from "./component/Header";

function App() {
    return (
        <div className="App">

            <div className="BOX">

                <MyNav/>

                <Header/>

            </div>

        </div>
    );
}

export default App;
