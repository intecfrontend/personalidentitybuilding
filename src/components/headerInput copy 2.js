import React from 'react'
import ONcatnetwerklogo from "../assets/ONcatnetwerk.svg"
import ONnetwerklogo from "../assets/ONnetwerk.svg"
import Input from "./inputfield"


export default function headerInput() {
  return (
    <div>
      <div className="ONntk__header">      <img src={ONnetwerklogo} alt="ONlogo" className="ONntwk__headerONLogo" />

      <img src={ONcatnetwerklogo} alt="ONlogo" className="ONntwk__catLogo" />
        <div className="ONntwk__HeaderInputplacer">
          <Input placeholder={"Ternat"} linker={"magazines/"} ondertxt={""} />
        </div>

        <div className="ONntwk__buttonHeaderwrapper ">
          <div className="ONntwk__bluecardbtn ONntwk__btncont">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">ALLE NETWERKEN </div>
          </div>
          <div className="ONntwk__bluecardbtn ONntwk__btncontaanmelden">
            <div className="ONntwk__bluecardbtn ONntwk__regularbtn">AANMELDEN</div>
          </div>

          <select className="ONntwk__bluecardbtn ONntwk__taalbtn">
            <option className="ONntwk__taalOptie" value="NL">NL</option>
            <option className="ONntwk__taalOptie" value="FR">FR</option>
            <option className="ONntwk__taalOptie" value="EN">EN</option>
            <option className="ONntwk__taalOptie" value="DE">DE</option>
          </select>
        </div>
      </div>
    </div >
  )
}
