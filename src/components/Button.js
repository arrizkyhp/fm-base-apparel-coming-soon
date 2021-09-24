import React from 'react'

import propTypes from 'prop-types'


export default function Button(props) {

    return (
        <button
            className={props.className}
            type="submit"
        >
        </button>
    )
}

Button.propTypes = {
    className: propTypes.string
}
