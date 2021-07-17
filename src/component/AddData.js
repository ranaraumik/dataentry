import React,{ useState } from 'react'

import Axios from 'axios'

export default function AddData(props) {
    const [weight, setWeight] = useState("")
    const [rupees, setRupees] = useState("")
    const submit= (e)=>{
        e.preventDefault()
        if(!weight || !rupees){
            alert("Please enter values")
        }else{
            addData(weight,rupees)
            setWeight("")
            setRupees("")
        }
    }
    const addData = (weight, rupees) => {
        let newData = {
          weight: weight,
          rupees: rupees
        }
        Axios.post("https://raumik-dataentry.herokuapp.com/addData", { newData: newData }).then(() => {
          
          props.refreshList()
        })
      }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="weightInput" className="form-label">Weight</label>
                    <input type="text" className="form-control" id="weightInput" aria-describedby="emailHelp" value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="rupeesInput" className="form-label">Rupees</label>
                    <input type="text" className="form-control" id="rupeesInput" value={rupees} onChange={(e)=>{setRupees(e.target.value)}} />
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
