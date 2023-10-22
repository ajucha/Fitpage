import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../assets/stockstatus.css'
import FilterComponent from '../components/FilterComponent'

export default function StockStatus({ stockStatus }) {
  const [stock_list, setStockList] = useState()
  const location = useLocation()
  let { state } = location
  useEffect(() => {
    filterData()
  }, [])
  const filterData = () => {
    let pathname = location.pathname.replace(/_/g, " ")
    let result = stockStatus?.filter(val => val.name == pathname.replace('/', ''))?.map(val => val.res)
    setStockList(result?.flat())
  }
  return (
    <div className='mainContainerStock'>
      <div style={{ color: 'white', backgroundColor: '#1686b0', paddingTop: "10px", paddingBottom: '10px' }}>
        <li style={{ fontSize: 16, fontWeight: '600' }} className='li-stock'>{state.name}</li>
        <li className='li-stock' style={{ color: state.color, fontSize: 10 }}>{state.tag}</li>
      </div>
      {stock_list?.map((val, i) => {
        return <>
          <li key={val} className='li-stock' style={{ color: 'white', marginTop: '10px', marginLeft: '10px', fontSize: 16, fontWeight: '500' }} >
            <FilterComponent data={val} />
          </li>
          {i < stock_list.length - 1 && <div style={{ color: 'white', fontSize: '10px', marginLeft: '10px' }}>and</div>}
        </>
      })
      }
    </div>
  )
}
