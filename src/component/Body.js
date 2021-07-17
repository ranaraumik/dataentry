import React from 'react'
import AddData from './AddData';
import TablebodyController from './Tablebody';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: "a"
        }
    }
    render() {
        return (
            <>
                <AddData refreshList={this.refreshList} />
                <TablebodyController />
            </>)
    }
    refreshList = () => {

        this.setState({})
    }
    shouldComponentUpdate() {
        return true
    }
    componentDidUpdate() {
    }

}