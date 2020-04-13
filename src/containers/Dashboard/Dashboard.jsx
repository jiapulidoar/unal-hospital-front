import React, { Component } from "react";
import bulmaCalendar from 'bulma-calendar';
import BulmaDatepicker from 'components/BulmaDatepicker/BulmaDatepicker.jsx'
import DataTable from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import { dataRank, semaphore, localidades, thresholds } from "../../data";

// import axios from 'axios';
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
    //console.log(this.state)
    this.setState({
      ranking: dataRank,
      semaphore: semaphore
    });
    // Check this beforehand -> https://creativebulma.net/product/calendar/demo
    const calendars = bulmaCalendar.attach('[type="date"]', {
      isRange: true
     });
    //this.updateGeoLoc()
    var element = document.querySelector('#date-filter');
    if(element){
      element.bulmaCalendar.on('select', (datepicker)=>{
        this.onChangeFilters("date", datepicker.data.value())
        console.log("date",datepicker.data.value()); ////////asdfasdfsafsafdsadf FECHASFECHASFECHASFECHASFECHASFECHAS
      })
    }
  }
  updateGeoLoc(){
    let ranking = []
    this.getGeoloc('4.634961','-74.094809')
    for (let i in dataRank) {
      let patient=dataRank[i]
      patient.geoLocation.location='location'
      patient['geoLocation']=patient.geoLocation
    }
  }
  getGeoloc(lat,long){
    //GET HTTP method
    // axios.get('https://geocode.xyz/'+lat+','+long+'?json=1')
    //'+toString(lat)+','+toString(long)+'?json=1')
    fetch('https://geocode.xyz/'+lat+','+long+'?json=1')
    .then(response => {
          console.log(response.data)
          const data = response
      /*    this.setState( (prevState) => ({
            times: prevState.times + 1,
            data: data
          })        );
          */
      })
        .catch(error => {
          // handle error
          console.log(error);
        })
  }


  onChangeFilters = (filter, value) => {
    this.setState(prevState => ({ filters: { ...prevState.filters, [filter]: value } }))
  }

  onSubmitFilters = event =>  {
    let ranking = []
    const { high, medium } = thresholds
    let filter = this.state.filters
//    if(filter.age === "") ranking = dataRank
  //  else {
      for (let i in dataRank) {
        let patient=dataRank[i]
        let ageFilter= (
            patient.age <= parseInt(filter.age) &&
              patient.age >= parseInt(filter.age)-10
            )  || filter.age ===""

        console.log("age",ageFilter)
        let rankFilter = (
            (filter.ranking === "high" && patient.risk > high)  || (filter.ranking === "medium" && patient.risk < high && patient.risk > medium)
              || (filter.ranking === "low" && patient.risk < medium)
            )  || filter.ranking ===""
        console.log("rank",rankFilter)
        var dateMin = new Date(filter.date.split(" - ")[0])
        var dateMax = new Date(filter.date.split(" - ")[1])
        var datePatient = new Date(patient.date.split(",")[0])
        let dateFilter = (
            (datePatient >= dateMin)
            && (datePatient <= dateMax)
          ) || filter.date==""
        console.log("date",dateFilter)

        if (ageFilter &&  rankFilter && dateFilter)   ranking.push(patient)
    }
     this.setState({ ranking })
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
    //console.log(this.state.filters)

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
                    <option value="">Ranking</option>
                    <option value="high">Alto</option>
                    <option value="medium">Moderado</option>
                    <option value="low">Bajo</option>
                  </select>
                </div>
                
                <BulmaDatepicker onChange={this.onChangeFilters} />

                {/* Localidad*/}
                <div className="select">
                  <select
                    value={this.state.filters.age}
                    onChange={e => this.onChangeFilters("age", e.target.value)}>
                    <option value="">Cualquier edad</option>
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
                <button className="reset button" onClick={() => this.setState({ filters: defaultFilters, ranking: dataRank })}>
                  Restablecer filtros
                </button>
                <button className="filter button is-info is-outlined" onClick={this.onSubmitFilters}>
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
