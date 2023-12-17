import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import CardDetails from "./components/Cards/CardDetails";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App(){
  return(
    <Router>
      <div className="App">
      <a href="/" style={{textDecoration: 'none', color: 'black'}}>
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-success">APP</span></h1>
      </a>
      

      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />}/>
      </Routes>
    </Router>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  let {info, results} = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res =>res.json());
      updateFetchData(data);
    })();

  },[api])
  
  
  
  
  
  return (
        <div className="App">




      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">  
            <div class="col-3">
        </div> 
              <div className="col-12">
                <div className="row">
                  <Cards page="/" results={results} />
                </div>
              </div>
            </div>
      </div> 

    
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}


export default App;
