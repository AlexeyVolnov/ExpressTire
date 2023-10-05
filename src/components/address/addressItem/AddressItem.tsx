import {FC} from "react";
import style from './addressItem.module.scss'
import {TypeAddress} from "../../../types/TypeAddress.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {mapCenter} from "../../../store/AddressSlice.tsx";

interface IAddressItemProps {
  address: TypeAddress

}


const AddressItem: FC<IAddressItemProps> = ({address}) => {
  const dispatch = useAppDispatch()
  const toMap = ()=> dispatch(mapCenter(address))
  const active = useAppSelector(state => state.addressSlice.MapCenter)


  return (
     <li onClick={toMap} className={`${style.addressItem} ${active === address?style.active:''}`}>
        <p className={style.title}>{address.address}</p>
        <ul className={style.listOptions}>
          {address.budgets.map(budg=><li key={budg}>{budg}</li>)}
        </ul>
     </li>
  )
}

export default AddressItem