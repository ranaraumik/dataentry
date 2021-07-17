import React from 'react';


export default class Tablebody extends React.Component {
    render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Rupees</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.list.map((e, i) => {
                            return (
                                <tr key={e.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.weight}</td>
                                    <td>{e.rupees}</td>
                                    <td>{e.rupees * e.weight}</td>
                                    <td><button onClick={() => this.props.onDelete(e)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>

        )
    }
}