import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as consts from '../../consts';
import {Row, Col, Icon,Button, Card, CardTitle,Table} from 'react-materialize';
import mapimg from './mapcovid.png'

export default class DataTable extends Component {
  state = {
    data: [],
    statistics:{},
    times: 0
  }

  componentDidMount() {
    //Update data every minute except first time
    if(this.state.times==0){
      this.get()
    }
    this.interval=setInterval( () => {
      this.get()
      }, 59000);
  }
/*
  componentWillUnmount() {
    clearInterval(this.interval);
  }*/

  get(){
    //GET HTTP method
    const dataRank = [
      {
			   idPatient: "343",
			   risk: 78.5
  		},
  		{
  			idPatient: "d@mail",
  			risk: 69
  		},
      {
			  idPatient: "3",
			  risk: 55.5
  		},
  		{
  			idPatient: "2",
  			risk: 23.5
  		},
  		{
  			idPatient: "1",
  			risk: 22.5
  		},
  		{
  			idPatient: "456",
  			risk: 13.5
  		},
  		{
  			idPatient: "n@mail",
  			risk: 5
  		},
    ]

    const dataStatistics = {
      high:134,
      mid:567,
      low:1234
    }
    this.setState( (prevState) => ({
      times: prevState.times + 1,
      data: dataRank,
      statistics: dataStatistics
    }));
  /*  axios.get(consts.SERVER_URL+'/get')
      .then(response => {
        console.log(response.data)
        const data = response.data
        this.setState( (prevState) => ({
          times: prevState.times + 1,
          data: data
        }));
    })
      .catch(error => {
        // handle error
        console.log(error);
      })  */
  }

  castDate(timestamp){

    var date= new Date(timestamp)
    return date.toString()
  }

 render() {
    //render HTML table
    return (
    <div>
      <Row>
        <Col l={2} m={1} className='grid-example'></Col>
        <Col l={8} m={10} s={12} className='grid-example'>
          <Row>
            <Col l={8} m={12} s={12}>
              <Card className=''>
                <h5><b>Ranking Pacientes</b></h5>
                <Table>
                  <thead>
                    <tr>
                      <th data-field="date">ID Paciente</th>
                      <th data-field="random">Riesgo</th>
                    </tr>
                  </thead>
                  <tbody>
                   {this.state.data.map(data =>
                     <tr>
                      <td>{data.idPatient}</td>
                      <td>{data.risk}</td>
                    </tr>
                   )}
                  </tbody>
                </Table>
              </Card>
            </Col>
            <Col l={4} m={12} s={12}>
            <Card
               className=""
               textClassName="white-text"
            >
              <Card
                className="red"
                textClassName="white-text"
                title="Riesgo alto"
              >
                <h4>{this.state.statistics.high}</h4>
              </Card>
              <Card
                className="orange"
                textClassName="white-text"
                title="Riesgo Medio"
              >
                <h4>{this.state.statistics.mid}</h4>
              </Card>
              <Card
                className="green"
                textClassName="white-text"
                title="Riesgo Bajo"
              >
                <h4>{this.state.statistics.low}</h4>
              </Card>
             </Card>
            </Col>
          </Row>
            <Col l={12} m={12} s={12}>
              <Card>
                <img src={mapimg} alt="map" style={{'width':'100%'}}/>
              </Card>
            </Col>
        </Col>
      </Row>
      <div style={{'margin-bottom':'200px'}}>
      </div>
    </div>
    )
  }
}
