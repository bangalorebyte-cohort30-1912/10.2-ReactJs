import React from 'react'

export default function Header(props) {
    return (
        <div>
         <h2> This is header </h2>            
            <h3>Hi {props.name}</h3>
        </div>
    )
}
