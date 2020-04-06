import React, { Component } from "react";
import Collapsible from '../Collapsible/Collapsible'
import "bulma/css/bulma.css";
import { dataRank } from "../../data/index.js";
import './PatientDetail.scss';

export default class PatientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idPatient: this.props.id,
      risk: 0.5,
      phoneNumber: "",
      name: "",
      age: 55,
      gender: "",
      email: "",
      userType: "",
      geoLocation: {
        latitude: 0,
        longitude: 0
      },
      location : "Suba", // Faked, improve later
      date: "",
      history:[ // Faked, Improve later
        {
          risk:0.9,
          date:"3/30/2020, 12:47:02 PM",
          info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum neque nibh, vehicula id convallis vel, bibendum sed ante. Donec eget tellus non nunc bibendum bibendum. Morbi sollicitudin sollicitudin est, eget dapibus eros hendrerit nec. Vestibulum mattis ultricies malesuada. Quisque porttitor eu neque vitae viverra. Donec eget dui erat. Ut dictum non libero vitae scelerisque. Donec sit amet turpis dolor. Sed consectetur neque nec arcu rutrum ornare. Aenean eu elit iaculis, pharetra enim faucibus, rhoncus ligula. Vestibulum congue diam id massa ultricies, nec mollis dolor pretium. Fusce consequat pharetra nibh nec auctor. "
        },
        {
          risk:0.6,
          date:"3/30/2020, 12:47:02 PM",
          info: "Mauris a massa mi. Pellentesque consectetur orci eget ornare rutrum. Praesent at iaculis magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum sed sapien vitae nisl ultrices aliquet. In aliquam purus nec auctor tincidunt. Proin venenatis erat et justo egestas, vel aliquam enim cursus. "
        },
        {
          risk:0.6,
          date:"3/30/2020, 12:47:02 PM",
          info: "Ut ut rhoncus leo. Nunc congue consectetur nibh, ac feugiat elit varius eu. Aenean nec nulla aliquam, molestie elit in, pretium leo. Vivamus facilisis sodales erat vel dignissim. Sed nulla magna, tincidunt sed bibendum eu, tempor et lorem. Sed lacus turpis, varius vitae molestie in, mollis ac quam. Nam non tempor risus, eu vestibulum mauris. "
        },
        {
          risk:0.2,
          date:"3/30/2020, 12:47:02 PM",
          info: "Aenean dui mauris, venenatis luctus pretium id, cursus vel nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ac congue nunc, eget consectetur augue. Nulla sed est ac leo placerat bibendum in nec purus. Etiam eu tincidunt sem. Integer ut nisl in odio pharetra porttitor eu vel justo. Maecenas fermentum, mi at vehicula dignissim, nibh ligula mattis tellus, eget tempor ipsum lorem et velit."
        }
      ],
      times: 0,
      toggled: props.toggled,
      active_collapsible: null
    };

  }

  componentDidMount() {
     if(this.state.times===0) {
       this.get(this.props.idPatient)
     }
     this.interval = setInterval(() => {
       this.get(this.props.idPatient)
     }, 59000)
  }

  get(patient_id) {
    //query from db
    // optional fields are name, lastName, email, latLng
    let state = dataRank.find(x => x.idPatient === patient_id);
    if(state){
      state.times = 1;
      this.setState(state);
    }
  }

  close() {
    this.setState({ toggled: false });
    this.props.onPatientDetail(false);
  }

  onTabToggle = (id)=>{
    this.setState({active_collapsible: id})
  }

  render() {
    return (
      <div id="patient-detail" className="is-clipped">
        <div class={`modal ${this.state.toggled ? "is-active" : ""}`}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class={`modal-card-head bg-${this.state.risk > 0.7 ? "high" : (this.state.risk > 0.5 ? "medium" : "low")}`} b>
              <p class={"modal-card-title is-capitalized"}>{this.state.name} </p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => {
                  this.close();
                }}
              ></button>
            </header>
            <section class="modal-card-body">
              <div className="content">
                <b>Información</b>
                <ul class="clean-ul">
                  <li><strong>Sexo:</strong> {this.state.gender === "male" ? 'Masculino': 'Femenino'}</li>
                  <li><strong>Edad:</strong> {this.state.age}</li>
                  <li><strong>Ubicación:</strong> {this.state.location}</li>
                </ul>
                <b>Contacto</b>
                <ul class="clean-ul">
                    <li><strong>Telefono:</strong> {this.state.phoneNumber}</li>
                    <li><strong>Email:</strong> {this.state.email}</li>
                </ul>
                {this.state.history.map((item,i)=>{
                  let title = (i===0) ? 'Ultima Respuesta' : (i===1) ? 'Respuestas Anteriores' : null;
                  let subtitle = (
                    <div>
                      <p className="Dot">
                        <div className={`Ellipse Ellipse-${item.risk > 0.7 ? "3" : (item.risk > 0.5 ? "2" : "1")}`} />
                        {item.date}
                      </p>
                    </div>
                  )
                  return(
                    <Collapsible
                      key={i}
                      id={i}
                      title={title}
                      subtitle={subtitle}
                      arrow_text="Ver detalle"
                      onTabToggle={this.onTabToggle}
                      isExpanded={i === this.state.active_collapsible}
                    >
                      <p className="content">
                        {item.info}
                      </p>
                    </Collapsible>
                  )
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
