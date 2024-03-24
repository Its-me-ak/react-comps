import React from 'react'
import Link from './Link'

const Sidebar = () => {
    const Links = [
        { label: "Dropdown", path: '/' },
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/button" },
        { label: "Modal", path: "/modal" },
        { label: "Table", path: "/table" },
        { label: "Counter", path: "/counter" },
    ]

    const renderedLink = Links.map((link, index) => {
        return <Link key={index} to={link.path} className="mb-3" activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    })
    return (
        <>
            <div className='sticky top-0 overflow-y-scroll flex flex-col'>
                {renderedLink}
            </div>
        </>
    )
}

export default Sidebar
