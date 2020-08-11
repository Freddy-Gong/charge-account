import React from 'react'
// require('icon/money.svg')
// require('icon/tags.svg')
// require('icon/statistic.svg')

//require一个文件夹
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icon', true, /\.svg$/)); } catch (error) { console.log(error) }

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