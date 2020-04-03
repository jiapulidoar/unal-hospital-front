import React, { Component } from "react";
import bulmaCalendar from 'bulma-calendar';
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

    const calendars = bulmaCalendar.attach('[type="date"]', { isRange: true });

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to date:selected event
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });


var element = document.querySelector('.datetimepicker-dummy-wrapper input.is-hidden');
console.log(element);

element.addEventListener('change', e => console.log(e))
// console.log(bulmaCalendar.);

// if (element) {
// 	// bulmaCalendar instance is available as element.bulmaCalendar
// 	element.bulmaCalendar.on('select', function(datepicker) {
// 		console.log(datepicker.data.value());
// 	});
// }
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
    const { ranking, statistics } = this.state;
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
                
                <p>Filtrar por:</p>
              <div className="fields">
                <div className="select">
                  <select>
                    <option>Ranking</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="field">
                  <p className="control has-icons-left">
                    <input onSelect={e => console.log(e.data)} type="date"/>
                  </p>
                </div>

                {/* Localidad*/}
                <div className="select">
                  <select>
                    <option>Edad</option>
                    <option>0-10 años</option>
                    <option>10-20 años</option>
                    <option>20-30 años</option>
                    <option>30-40 años</option>
                    <option>40-50 años</option>
                    <option>50-60 años</option>
                    <option>60-70 años</option>
                    <option>70-80 años</option>
                    <option>+80 años</option>
                  </select>
                </div>

                {/* Localidad*/}
                <div className="select">
                  <select>
                    <option>Localidad</option>
                    <option>Usaquén</option>
                    <option>Suba</option>
                    <option>Teusaquillo</option>
                    <option>...</option>
                  </select>
                </div>
              </div>

              <div className="right buttons">
                <button className="reset button">
                  Reestablecer filtros
                </button>
                <button className="filter button is-primary">
                  Filtrar
                </button>

<button className="button is-primary" onClick={this.handleToggle}>
  PatientDetail
</button>
              </div>

              </div>
            </div>

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
      </div>
    );
  }
}
