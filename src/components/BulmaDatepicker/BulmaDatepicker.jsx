import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import bulmaCalendar from 'bulma-calendar';

function BulmaDatepicker(props) {
    const { onChange } = props

    useEffect(() => {
        bulmaCalendar.attach('[type="date"]', {
            isRange: true
        });

        var element = document.querySelector('#date-filter');
        if(element){
        element.bulmaCalendar.on('select', (datepicker)=>{
            onChange("date", datepicker.data.value())
            console.log(datepicker.data.value()); ////////asdfasdfsafsafdsadf FECHASFECHASFECHASFECHASFECHASFECHAS
        })
        }
    }, [onChange])

    return (
        <div className="field">
            <p className="control has-icons-left">
            <input id="date-filter" type="date"/>
            </p>
        </div>
    )
}

BulmaDatepicker.propTypes = {
    onChange: PropTypes.func
}

export default BulmaDatepicker
