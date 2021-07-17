import React, { useState, useEffect } from 'react';
import Tablebody from './Tablebody.jsx';
import Axios from 'axios'


var globalThis;
export default class TablebodyController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        globalThis = this
    }
    render() {
        return (<Tablebody list={this.state.list} onDelete={this.onDelete} />)
    }
    getData = async () => {
        // return new Promise((resolve, reject) => {
        return await Axios.get("https://raumik-dataentry.herokuapp.com/getData").then((e) => {
            let data = e.data

            let frontEndData = data.map((element) => {
                return {
                    id: element.id,
                    weight: element.weight,
                    rupees: element.rupees
                }
            });
            return frontEndData
            // resolve(frontEndData)
        })
        // })
    }
    onDelete = (row) => {
        Axios.post("https://raumik-dataentry.herokuapp.com/deleteData", { id: row.id }).then(() => {
            globalThis.setState({})
        })


    }
    shouldComponentUpdate() {
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        let frontEndData = this.getData()
        frontEndData.then((e) => {
            if (globalThis.state.list.length !== e.length) {
                globalThis.setState({
                    list: e
                })
            }
        })

    }
    componentDidMount() {
        let frontEndData = this.getData()
        frontEndData.then((e) => {
            globalThis.setState({
                list: e
            })
        })
    }
}