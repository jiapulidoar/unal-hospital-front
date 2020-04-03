import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      statistics: null
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
            <div className="top">
              <div className="form">
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">From</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Name" />
                      <span class="icon is-small is-left">
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right">
                      <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com" />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="right buttons">
                <button className="button">
                  Reestablecer filtros
                </button>
                <button className="button is-primary">
                  Filtrar
                </button>
              </div>

              </div>
            </div>

            {ranking && statistics ? (
              <DataTable ranking={ranking} statistics={statistics} />
            ) : (
              ""
            )}

          </div>
        </div>


      </div>
    );
  }
}
