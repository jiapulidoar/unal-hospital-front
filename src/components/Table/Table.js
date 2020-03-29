import React, { Component } from "react";
import PropTypes from 'prop-types'
import mapimg from './mapcovid.png'

class DataTable extends Component {
  state = {
    data: [],
    statistics:{},
    times: 0
  }

  componentDidMount() {
    //Update data every minute except first time
    if(this.state.times===0){
      this.get()
    }
    this.interval=setInterval( () => {
      this.get()
      }, 59000);
  }

  get(){
    //GET HTTP method

    
    this.setState( (prevState) => ({
      times: prevState.times + 1
    }));
  }

  castDate(timestamp){

    var date= new Date(timestamp)
    return date.toString()
  }

 render() {
   const { ranking, statistics } = this.props
   console.log(ranking);
   return(<div></div>)
    //render HTML table
    // return (
    // <div>
    //   <Row>
    //     <Col l={2} m={1} className='grid-example'></Col>
    //     <Col l={8} m={10} s={12} className='grid-example'>
    //       <Row>
    //         <Col l={8} m={12} s={12}>
    //           <Card className=''>
    //             <h5><b>Ranking Pacientes</b></h5>
    //             <Table>
    //               <thead>
    //                 <tr>
    //                   <th data-field="date">ID Paciente</th>
    //                   <th data-field="random">Riesgo</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                {ranking.map(patient =>
    //                  <tr>
    //                   <td>{patient.idPatient}</td>
    //                   <td>{patient.risk}</td>
    //                 </tr>
    //                )}
    //               </tbody>
    //             </Table>
    //           </Card>
    //         </Col>
    //         <Col l={4} m={12} s={12}>
    //         <Card
    //            className=""
    //            textClassName="white-text"
    //         >
    //           <Card
    //             className="red"
    //             textClassName="white-text"
    //             title="Riesgo alto"
    //           >
    //             <h4>{statistics.high}</h4>
    //           </Card>
    //           <Card
    //             className="orange"
    //             textClassName="white-text"
    //             title="Riesgo Medio"
    //           >
    //             <h4>{statistics.mid}</h4>
    //           </Card>
    //           <Card
    //             className="green"
    //             textClassName="white-text"
    //             title="Riesgo Bajo"
    //           >
    //             <h4>{statistics.low}</h4>
    //           </Card>
    //          </Card>
    //         </Col>
    //       </Row>
    //         <Col l={12} m={12} s={12}>
    //           <Card>
    //             <img src={mapimg} alt="map" style={{'width':'100%'}}/>
    //           </Card>
    //         </Col>
    //     </Col>
    //   </Row>
    //   <div style={{'margin-bottom':'200px'}}>
    //   </div>
    // </div>
    // )
  }
}

DataTable.propTypes = {
  ranking: PropTypes.array,
  statistics: PropTypes.array
}

export default DataTable