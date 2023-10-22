import React from 'react'
import { Link, } from 'react-router-dom'
import '../assets/homescreen.css'

export default function Homescreen({ homescreenData }) {
  return (
    <div className='mainContainer'>
      {
        homescreenData?.map((val, i) => {
          return <ul key={i} className="ul">
            <Link style={{ textDecoration: 'none', fontWeight: '400' }} to={`${val.name.replace(/[\s+]/g, "_")}`} state={val}>
              <li className='li'>
                <div style={{ fontSize: 16 }}>{val.name}</div>
                <div style={{ color: val.color, fontSize: 10 }}>{val.tag}</div>
              </li>
            </Link>
          </ul>
        })
      }
    </div>
  )
}
