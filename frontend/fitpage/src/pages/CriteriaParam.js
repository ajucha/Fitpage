import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/criteriaParam.css'

export default function CriteriaParam(props) {
  const [stateValue, setStateValue] = useState("")
  const location = useLocation()
  let { state } = location
  return (
    <div className='criteriaMain'>
      {state.type == 'indicator' ? <div>
        <div style={{ color: 'white', fontSize: 14, fontWeight: '500', marginLeft: -10 }}>{state.study_type.toUpperCase()}</div>
        <div style={{ color: 'white', fontSize: 14, fontWeight: '500', paddingTop: 10, paddingBottom: 8, marginLeft: -10 }}>Set Parameters</div>
        <div style={{ backgroundColor: 'white', width: 455, height: 80, marginLeft: -20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15, marginRight: 15 }}>
            <div style={{ marginTop: 10 }}>Period</div>
            <div style={{ marginTop: 10 }}> <input
              value={
                stateValue == "" ? state.default_value : stateValue
              }
              type="text"
              onChange={(e) => {
                let value = e.target.value
                if (value == "") {
                  setStateValue(" ")
                }
                else {
                  setStateValue(value)
                }
              }
              }
            /></div>
          </div>
        </div>
      </div> : state?.values?.map((val, id) => <div key={id} style={{ color: 'white', borderBottom: "1px dotted white", padding: '10px' }}>{val}</div>)}</div>
  )
}
