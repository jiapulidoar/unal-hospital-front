import React, { Component } from "react";
import DataTable from "../../components/Table/Table";
import PatientDetail from "../../components/PatientDetail/PatientDetail";
import SideBar from "../../components/SideBar/SideBar";
import { dataRank, dataStatistics } from "../../data";

import "./Dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ranking: null,
      statistics: null,
      toggled: false
    };
  }

  componentDidMount() {
    // fetch(...).then(...)
    console.log(this.state)
    this.setState({
      ranking: dataRank,
      statistics: dataStatistics
    });
  }

  handleToggle = event => {
    event.preventDefault();
    this.setState((prev, props) => {
      const newtogg = !prev.toggled;
      return {
        ranking: prev.ranking,
        statistics: prev.statistics,
        toggled: newtogg };
    });
  };

  render() {
    const { ranking, statistics,toggled } = this.state;
    console.log(ranking && statistics ? true : false);

    return (
      <div className="rootRow">
        <div className="colSideBar">
          <SideBar />
        </div>
        <div className="colDashboard">
          <div id="dashboard-page">
            <h1>Dashboard</h1>
            {ranking && statistics ? (
              <DataTable ranking={ranking} statistics={statistics} />
            ) : (
              ""
            )}
            <div className="container">
            {this.state.toggled ?   <PatientDetail id="p1234" toggled={true}/> : null}

            </div>
          </div>
        </div>

        <button className="button is-primary" onClick={this.handleToggle}>
          PatientDetail
        </button>
      </div>
    );
  }
}
