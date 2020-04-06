import React, { Component } from "react";
import bulmaCalendar from 'bulma-calendar';
import BulmaDatepicker from 'components/BulmaDatepicker/BulmaDatepicker.jsx'
import DataTable from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import { dataRank, semaphore, localidades, thresholds } from "../../data";

import "./Dashboard.scss";

const defaultFilters = {
  ranking: "",
  date: "",
  age: "",
  locality: ""
}

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSemaphore: null,
      ranking: null,
      statistics: null,
      filters: defaultFilters
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

    // Check this beforehand -> https://creativebulma.net/product/calendar/demo
    const calendars = bulmaCalendar.attach('[type="date"]', { 
      isRange: true
     });
    
    var element = document.querySelector('#date-filter');
    if(element){
      element.bulmaCalendar.on('select', (datepicker)=>{
        this.onChangeFilters("date", datepicker.data.value())
        console.log(datepicker.data.value()); ////////asdfasdfsafsafdsadf FECHASFECHASFECHASFECHASFECHASFECHAS
      })
    }
  }

  onChangeFilters = (filter, value) => {
    this.setState(prevState => ({ filters: { ...prevState.filters, [filter]: value } }))
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
    console.log(this.state.filters)

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
                  <select
                    value={this.state.filters.ranking}
                    onChange={e => this.onChangeFilters("ranking", e.target.value)}>
                    <option>Ranking</option>
                    <option>Alto</option>
                    <option>Medio</option>
                    <option>Bajo</option>
                  </select>
                </div>

                {/* <div className="field">
                  <p className="control has-icons-left">
                    <input id="date-filter" type="date"/>
                  </p>
                </div> */}
                <BulmaDatepicker onChange={this.onChangeFilters} />

                {/* Localidad*/}
                <div className="select">
                  <select 
                    value={this.state.filters.age}
                    onChange={e => this.onChangeFilters("age", e.target.value)}>
                    <option>Edad</option>
                    <option value="10">0-10 años</option>
                    <option value="20">10-20 años</option>
                    <option value="30">20-30 años</option>
                    <option value="40">30-40 años</option>
                    <option value="50">40-50 años</option>
                    <option value="60">50-60 años</option>
                    <option value="70">60-70 años</option>
                    <option value="80">70-80 años</option>
                    <option value="90">+80 años</option>
                  </select>
                </div>

                {/* Localidad*/}
                <div className="select">
                  <select
                    value={this.state.filters.locality}
                    onChange={e => this.onChangeFilters("locality", e.target.value)}>
                    <option value="">Localidad</option>
                    {localidades.map(({id, name}) => <option key={id}>{name}</option>)}
                  </select>
                </div>
              </div>

              <div className="right buttons">
                <button className="reset button" onClick={() => this.setState({ filters: defaultFilters })}>
                  Restablecer filtros
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

            <div className="bottom">
              <small>MeCuido es una iniciativa de profesores y estudiantes de la Universidad Nacional de Colombia. Para más información, haz clic <a href="/about">aquí</a>. </small>
            </div>

          </div>

          
        </div>
      </div>
    );
  }
}
