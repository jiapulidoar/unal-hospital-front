import React from 'react'
import PropTypes from 'prop-types'

import './Ellipse.scss'

function Ellipse(props) {
    const { color } = props
    return (
        <div className={`ellipse ${color}`} />
    )
}

Ellipse.propTypes = {
    color: PropTypes.string
}

export default Ellipse

