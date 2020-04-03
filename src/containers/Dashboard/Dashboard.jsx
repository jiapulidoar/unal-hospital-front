import React, { Component } from "react";
import bulmaCalendar from 'bulma-calendar';
import DataTable from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import { dataRank, semaphore, localidades, thresholds } from "../../data";

import "./Dashboard.scss";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSemaphore: null,
      ranking: null,
      statistics: null
    };

    this.setCurrentSemaphore = this.setCurrentSemaphore.bind(this)
  }

  componentDidMount() {
    // fetch(...).then(...)
    console.log(this.state)
    this.setState({
      ranking: dataRank,
      semaphore: semaphore
    });

    // TODO: Initialize and fetch bulmaCalendar values
    const calendars = bulmaCalendar.attach('[type="date"]', { isRange: true });

    calendars.forEach(calendar => {
      calendar.on('date:selected', date => {
        console.log(date);
      });
    });
    
    var element = document.querySelector('.datetimepicker-dummy-wrapper input.is-hidden');
    console.log(element);

    element.addEventListener('change', e => console.log(e))
  }

  setCurrentSemaphore = currentSemaphore => {
    this.setState({ currentSemaphore }, () => {
      let ranking = []
      
      if(currentSemaphore === "") ranking = dataRank
      else {
        for (let i in dataRank) {
          const { high, medium } = thresholds
          const rank = dataRank[i]
          if ((currentSemaphore === "high" && rank.risk > high)
              || (currentSemaphore === "medium" && rank.risk < high && rank.risk > medium)
              || (currentSemaphore === "low" && rank.risk < medium))
              ranking.push(rank)
        }
      }
      this.setState({ ranking })
    })
  }

  render() {
    const { ranking, semaphore } = this.state    

    return (

      <div className="rootRow">
        <div className="colSideBar">
          <SideBar semaphore={semaphore} onSelect={this.setCurrentSemaphore} />
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
                    <option value="">Localidad</option>
                    {localidades.map(({id, name}) => <option key={id} value={id}>{name}</option>)}
                  </select>
                </div>
              </div>

              <div className="right buttons">
                <button className="reset button">
                  Reestablecer filtros
                </button>
                <button className="filter button is-info is-outlined">
                  Filtrar
                </button>
              </div>

              </div>
            </div>

            {ranking ? (
              <DataTable ranking={ranking} />
            ) : (
              ""
            )}

          </div>
        </div>


      </div>
    );
  }
}
