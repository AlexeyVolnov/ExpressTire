import {FC} from "react";
import Contact from "../contact/Contact.tsx";


interface IContactPageProps {

}


const ContactPage: FC<IContactPageProps> = ({}) => {
  return (
     <div>
      <Contact/>
     </div>
  )
}

export default ContactPage