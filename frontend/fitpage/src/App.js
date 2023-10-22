import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homescreen from './pages/Homescreen';
import StockStatus from './pages/StockStatus';
import { DataFiltering } from './utils/util';
import CriteriaParam from './pages/CriteriaParam';
import axios from 'axios'

function App() {
  const [homeData, setHomeData] = useState()
  const [stock_status, setStockStatus] = useState()
  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    try {
      let apiResult = await axios.get("http://localhost:8000")
      let result = DataFiltering(apiResult.data)
      setHomeData(result[0])
      setStockStatus(result[1])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    homeData ?
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homescreen homescreenData={homeData} />} />
          <Route exact path='/:name' element={<StockStatus stockStatus={stock_status} />} />
          <Route exact path='/:name/:id' element={<CriteriaParam />} />
        </Routes>
      </BrowserRouter>
      :
      <div style={{display:'flex',justifyContent:'center',fontSize:30}}>Please start Server using npm start</div>
  );
}

export default App;
