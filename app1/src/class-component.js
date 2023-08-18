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

// export default class Button extends Component{

//     constructor(){
//         super()
//         this.onClickButtonOK = this.onClickButtonOK.bind(this)
//     }

//     showAlert(msg){
//         alert(msg)
//     }

//     onClickButtonOK(){
//         this.showAlert('ลาก่อนนะไอฟูม')
//     }
//     render(){
//         return <button onClick ={this.onClickButtonOK}>OK</button>
//     }
// }