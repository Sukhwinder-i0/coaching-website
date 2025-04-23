import React from 'react'
import InputBox from './InputBox'

interface Props {

}

const ContactPopup = (props: Props) => {
  return (
    <div className='w-full h-full border bg-slate-900 opacity-90'>
      <div className='w-1/5 h-auto bg-slate-900 border'>
      <InputBox label='Name' type='text' placeholder='Name' />

      </div>
    </div>
  )
}

export default ContactPopup