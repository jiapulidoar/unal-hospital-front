import React, { Component } from 'react'
import DataTable from '../../components/Table/Table'

import { dataRank, dataStatistics } from '../../data'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ranking: null,
            statistics:null
        }
    }

    componentDidMount() {
        // fetch(...).then(...)
        this.setState({
            ranking: dataRank,
            statistics: dataStatistics
        })
    }

    render() {
        const { ranking, statistics } = this.state

        return (
            <div id="dashboard-page">
                <h1>Dashboard</h1>
                { ranking && statistics ?
                    <DataTable ranking={ranking} statistics={statistics} />
                    : ''
                }
            </div>
        )
    }
}
