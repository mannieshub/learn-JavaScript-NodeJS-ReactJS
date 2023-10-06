import React from 'react'
import {useForm} from 'react-hook-form'

export default function FormValidation(){
    const cats =[['100','IT'],['200','Machine'],['300','Chemical Product']]
    const opts = ['Option 1','Option 2','Option 3']
    const inputFile = React.createRef()

    const{register,handleSubmit,formState:{errors}}= useForm()

    const onSubmitForm =(event)=>{
        let maxNumFiles = 3
        let maxSize = 300

        if(inputFile.current.files.length>maxNumFiles){
            alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
            event.preventDefault()
            return
        }

        for(let f of inputFile.current.files){
            if(f.size>maxSize*1000){
                alert(`ขนาดไฟล์เกิน ${maxSize} KB`)
                event.preventDefault()
                return
            }
        }
    }

        const err ={
            fontSize :'smaller',
            color:'red'
        }

        return(
            <div className='mt-3 mb-5 mx-auto p-3 rounded' style={{width:'400px',backgroundColor:'lightblue'}}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className='form-group mb-3'>
                        <label htmlFor='cats' className='form-label'>หมวดหมู่</label>
                        <select id ="cats" className='form-select form-select-sm'>
                            {
                                cats.map(item =>{
                                    return <option value ={item[0]}>{item[1]}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='name'>ชื่อสินค้า *</label>
                        <input type='text' id='name' name='name' maxLength="500"
                        className='form-control form-control-sm'
                        {...register('name',{required:true,maxLength:30})}
                        ></input>
                        {errors.name &&<div style={err}>กรุณาระบุชื่อสินค้า</div>}
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='price'>ราคาสินค้า</label>
                        <input type='number' id='price' name='price' min='0' step='any'
                        className='form-control form-control-sm'
                        {...register('price',{validate:value=>parseFloat(value)>0})}></input>
                        {errors.price&&<div style={err}>กรุณาระบุราคาสินค้า</div>}
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='detail'>รายละเอียดสินค้า</label>
                        <textarea id='detail' name='detail' rows="2" maxLength="250"
                        className='form-control form-control-sm'
                        {...register('detail',{required:true,minLength:1,maxLength:200})}>
                            </textarea>
                        {errors.detail&&<div style={err}>กรุณาระบุรายละเอียดสินค้า</div>}
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='date'>วันที่เพิ่มสินค้า *</label>
                        <input type='date' id='dateAdded' name='dateAdded' 
                        className='form-control form-control-sm'></input>
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='file' className='form-label'>ภาพสินค้า *</label>
                        <input type='file' id='file' accept='image/*'
                        className='form-control form-control-sm' ref={inputFile} multiple></input>
                    </div>

                    <div>ออปชันเพิ่มเติม</div>
                    {
                        opts.map((opt,i)=>{
                            return (
                                <div className='form-check form-check-inline mb-2'>
                                    <input type='checkbox' id={'opt'+i} value={opt} className='form-check-input'></input>
                                    <label htmlFor={'opt'+i} className='form-check-label'>{'opt'+i}</label>
                                </div>
                            )
                        })
                    }

                    <div className='text-center mt-4'>
                        <button className='btn btn-primary btn-sm px-4'>OK</button>
                    </div>
                </form>
            </div>
        )

}
