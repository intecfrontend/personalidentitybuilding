import React, {useState} from 'react'
import ONcatnetwerklogo from "../assets/ONcatnetwerk.svg"
import { Link } from 'react-router-dom'


export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="ONntk__header">
        <Link className="ONntwk__LinkHeaderLogo" to="/">
          <img src={ONcatnetwerklogo} alt="ONlogo" className="ONntwk__headerONcatLogo" />
        </Link>
        <div className="ONntwk__buttonHeaderwrapper ">
          <div className="ONntwk__bluecardbtn ONntwk__btncont">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ALLE NETWERKEN </div>
          </div>
          <div className="ONntwk__bluecardbtn ONntwk__btncontaanmelden">
            <div onClick={open => setOpen(true)} className="ONntwk__bluecardbtn ONntwk__regularbtn">AANMELDEN</div>
          </div>
          <select className="ONntwk__bluecardbtn ONntwk__taalbtn">
            <option style={{ color: "pink" }} className="ONntwk__taalOptie" value="NL">NL</option>
            <option className="ONntwk__taalOptie" value="FR">FR</option>
            <option className="ONntwk__taalOptie" value="EN">EN</option>
            <option className="ONntwk__taalOptie" value="DE">DE</option>
          </select>
        </div>


      </div>

    </div >
  )
}
