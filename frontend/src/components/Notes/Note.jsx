import React from 'react'
import trash from '../../svgs/trash.svg'
import edit from '../../svgs/edit.png'
import './Note.css'
import {TbTrashXFilled} from 'react-icons/tb'
import {RiEdit2Fill} from 'react-icons/ri'

function Note({n}) {
  return (
    <div className='note'>
        <div>
            <h1>{n.title}</h1>
            <p className='desc'>{n.description}</p>
        </div>
        <div className='noteRodape'>
            <div className='dataNote'>
                {n.date}
            </div>
            <div>
                <RiEdit2Fill size={25} color='#CACACA'/>
                <TbTrashXFilled size={25} color='#CACACA'/>
            </div>
        </div>
    </div>
  )
}

export default Note