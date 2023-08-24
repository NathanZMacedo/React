import React from 'react'
import trash from '../../svgs/trash.svg'
import edit from '../../svgs/edit.png'
import './Note.css'

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
                <div><img src={edit} alt="" /></div>
                <div><img src={trash} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default Note