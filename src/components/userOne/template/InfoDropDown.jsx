import React,{useState} from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

export default function InfoDropDown() {
    const [info, showinfo] = useState(false)
    const showDropInfo = () => showinfo(!info)
  return (
    <div className="projectInfo">
    <BiDotsVerticalRounded onClick={showDropInfo} />
    {
        info && 
        <div className='prjctLinks'>
            <ul className="links">
                <li>
                   <a href="/">Project Information</a> </li>
                <li>
                    <a href="/">Project Assumptions</a>
                </li>
                <li>
                    <a href="/">Project Components</a>
                </li>
            </ul>
        </div>
    }
</div>
  )
}
