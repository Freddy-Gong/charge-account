import React from 'react'
require('icon/money.svg')
require('icon/tags.svg')
require('icon/statistic.svg')

type Props = {
    name: string
}
const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}

export default Icon