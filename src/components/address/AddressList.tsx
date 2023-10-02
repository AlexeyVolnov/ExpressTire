import {FC} from "react";
import AddressItem from "./AddressItem.tsx";


interface IAddressListProps {

}


const AddressList: FC<IAddressListProps> = ({}) => {
  return (
     <div>
        <AddressItem/>
     </div>
  )
}

export default AddressList