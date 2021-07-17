import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import React, { useState, useEffect } from 'react';
import Body from './component/Body';

import Axios from 'axios'
function App() {
  const [data, setData] = useState([])

  const getData = () => {
    return new Promise((resolve, reject) => {
      Axios.get("http://localhost:3001/getData").then((e) => {
        let data = e.data

        let frontAddData = data.map((element) => {
          return {
            id: element.id,
            weight: element.weight,
            rupees: element.rupees
          }
        });
        resolve(frontAddData)
      })
    })

  }
  useEffect(() => {
    getData().then((e) => {
      setData(e)
    })
  }, [])

  const onDelete = (row) => {

    Axios.post("http://localhost:3001/deleteData", { srno: row.id }).then(() => {
      setData(data.filter((e) => {
        return e !== row
      }))
      alert("done")

    })


  }
  const addData = (weight, rupees) => {
    let newData = {
      weight: weight,
      rupees: rupees
    }
    Axios.post("http://localhost:3001/addData", { newData: newData }).then(() => {
      let newsrno = data.length ? data[data.length - 1].srno + 1 : 0
      newData['srno'] = newsrno
      alert("done")
    })

    setData([...data, newData])
  }
  return (
    <>
      <Header data={data} />
      <Body data={data} onDelete={onDelete} addData={addData} />
    </>
  );
}

export default App;
