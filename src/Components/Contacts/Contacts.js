import { MyMap } from "../Map/Map";
import './Contacts.css'

export const Contacts = ()=>{
    return(
        <section className="Contacts">
            <div className="Contacts__div">
            <ul className="Contacts__div__ul">
          <li>
            <p>АПЕX</p>
          </li>
          <li>
            <p>16 Daskalov street</p>
          </li>
          <li>
            <p>Pazardzhik</p>
          </li>
          <li>
            <p>4400</p>
          </li>
          <li>
            <p>Bulgaria</p>
          </li>
          <li>
            <p>Email: kinjalat@abv.bg</p>
          </li>
        </ul>
            </div>
        <MyMap className="contact"/>
        
        </section>
    )
}