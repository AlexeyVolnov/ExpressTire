import {FC} from "react";
import style from './contact.module.scss'
import AddressList from "../address/AddressList.tsx";
import Maps from "../map/Maps.tsx";

interface IContactProps {

}


const Contact: FC<IContactProps> = ({}) => {
  return (
     <div className={style.contact}>
        <div className={style.sidebar}>
          <AddressList/>
        </div>
       <div className={style.map}>
         <Maps/>
       </div>
     </div>
  )
}

export default Contact