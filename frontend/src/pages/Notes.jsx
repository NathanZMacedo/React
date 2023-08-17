import React,{useState} from 'react'
import "./Notes.css"
import AddNew from '../components/UI/AddNew'
import trash from '../svgs/trash.svg'
import edit from '../svgs/edit.png'

function Notes() {
  const [notes,setNotes] = useState([{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},{title: "Muito legal",description: "eu amei one piece",date: "08/09/2023", id: 1},])

  return (
    <div className='notes'>
      <AddNew/>
      {
        notes.map(n=> <div className='note'>
                        <h1>{n.title}</h1>
                        <p className='desc'>{n.description}</p>
                        <div> 
                          <div><img src={edit} alt="" /></div>
                          <div><img src={trash} alt="" /></div>
                        </div>
                      </div>
        )
      }
    </div>
  )
}

export default Notes