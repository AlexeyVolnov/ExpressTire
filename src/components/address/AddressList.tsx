import {FC} from "react";
import AddressItem from "./AddressItem.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";


interface IAddressListProps {

}


const AddressList: FC<IAddressListProps> = ({}) => {
const addresses = useAppSelector((state)=>state.addressSlice.pickPoints)
  return (
     <ul>
       {addresses.map(address=><AddressItem key={address.address} address={address}/>)}
     </ul>
  )
}

export default AddressList