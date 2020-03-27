import React, { Component } from 'react'
import DataTable from '../../components/Table/Table'

export default class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard-page">
                <h1>Dashboard</h1>

                <DataTable />
            </div>
        )
    }
}
