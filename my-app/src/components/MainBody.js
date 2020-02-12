import React from 'react'
import Clock from './Clock'

export default function MainBody(props) {
    if(props.isAuthorised===true){
        return (
            <div>
                <h2>This is main body</h2>
                <h3>Hi {props.name} and you are authorised</h3>
                <Clock date={new Date()}/>
            </div>
        )
    }else{
        return (
            <div>
                <h2>This is main body</h2>
                <h3> You are not Authoirised to view this content</h3>
            </div>
        )
    }    
}
