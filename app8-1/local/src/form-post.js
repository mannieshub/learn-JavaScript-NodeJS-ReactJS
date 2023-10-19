import React from 'react'

export default function FormPost() {
    let [PostedData, setPostedData] = React.useState('')
    const form = React.useRef()

    const onSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current)
        const formEnt = Object.fromEntries(formData.entries())
        fetch('/api/form-post',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formEnt)
        })
        .then(res => res.text())
        .then(result => {
            setPostedData(result)
        })
        .catch(err => alert(err))
    }

    const inputStyle = {
        margin:'5px 0',
    }

  return (
    <div style={{margin:'30px'}}>
        <form ref={form} onSubmit={onSubmitForm}>
            <div>ติดต่อเรา</div>
            <input style={inputStyle} type='text' name='name' size="43" placeholder='ชื่อ'/> <br/>
            <input style={inputStyle} type='email' name='email' size="43" placeholder='อีเมล'/> <br/>
            <textarea style={inputStyle} name='message' cols="40" rows="4" placeholder='ข้อความ'></textarea> <br/>
            <button>ตกลง</button>
        </form>
        <br/>
        <div dangerouslySetInnerHTML={{__html : PostedData}}></div>      
    </div>
  )
}