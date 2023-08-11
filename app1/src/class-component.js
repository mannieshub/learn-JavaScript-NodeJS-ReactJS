import React,{Component} from 'react'

export default class Calendar extends Component{
    getDate(){
        const dayNames=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
        const monthNames=['january','february','march','april','may','june','july','august','september','october','november','december']
        
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear()+543
        return `${weekDay} ${day} ${month} ${year}`
    }

    render(){
        return <div>{this.getDate()}</div>
    }
}