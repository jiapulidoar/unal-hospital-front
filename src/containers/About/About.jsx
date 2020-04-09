import React, { Component } from 'react'

import './About.scss'

export default class About extends Component {
    render() {
        return (
            <div id="about-page">
                <div className="columns">
                    <div className="column is-two-fifths">
                        <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt=""/>
                        {/* <img style={{ maxWidth: '60%' }} src={process.env.PUBLIC_URL + "/images/unal-white.png"} alt=""/>
                        <img style={{ maxWidth: '50%' }} src={process.env.PUBLIC_URL + "/images/hun-white.png"} alt=""/> */}
                    </div>
                    <div className="column">
                        <h1 className="subtitle">Acerca de MeCuido</h1>
                        <p>MeCuido es una app que le
                            permite a cualquier persona
                            reportar sus síntomas día a día
                            para que el Hospital Universitario
                            los monitoree y establezca un
                            plan de seguimiento a aquellos
                            que lo requieran.
                            <br />
                            <br />
                            Entre todos podemos cuidarnos
                            para detener la propagación de
                            Coronavirus.
                        </p>
                        <br />

                        <div className="columns">
                            <div className="column">
                                <h3>Profesores a cargo</h3>
                                Jonatan Gómez<br />
                                Elizabeth León<br />
                                Liz Karen Herrera<br />
                                Jairo Antonio Perez
                            </div>
                            <div className="column">
                                <h3>Diseño</h3>
                                Yeliana Torres<br />
                                Luisa Peralta<br />
                                Juliana Ramírez<br />
                                David Guatava
                            </div>
                            <div className="column">

                            <h3>Desarrollo móvil</h3>
                            Jhonatan Torres <br />
                            Jorge I. Andrés Contreras <br />
                            Alejandro Díaz Vecchio
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                            <h3>Desarrollo Web</h3>
                            José David Nieto<br />
                            Antonio Fortich<br />
                            David Perdomo<br />
                            Edwin Mahecha<br />
                            Lia Silva<br />
                            Daniel Escobar<br />
                            </div>
                            <div className="column">
                            <h3>Desarrollo backend</h3>
                            Dennis Joseph Salcedo<br />
                            Jimmy Pulido<br />
                            Juan Sebastian Chaves<br />
                            Angel Corredor
                            </div>
                            <div className="column">
                            </div>
                        </div>

                        <small>Regresar al <a href="/dashboard">Dashboard</a>.</small> 
                    </div>
                </div>
            </div>
        )
    }
}
