import React, { Fragment } from 'react'

const Table = ({ data, config, keyFn }) => {

    const renderedHeaders = config.map((labelConfig) => {
        if(labelConfig.header){
            return <Fragment key={labelConfig.label}>{labelConfig.header()}</Fragment>
        }
        return <th key={labelConfig.label}>{labelConfig.label}</th>
    })
    const renderdRows = data.map((rowData) => {
        const renderdCells = config.map((column) => {
            return <td className='p-2' key={column.label}>{column.render(rowData)}</td>
        })
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderdCells}
            </tr>
        )
    })
    return (
        <>
            <table className='table-auto w-96 border-spacing-2 text-center'>
                <thead>
                    <tr className='border-b-2'>
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderdRows}
                </tbody>
            </table>
        </>
    )
}

export default Table
