import {FC, Fragment, useEffect, useState} from "react";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {mapCenter} from "../../store/AddressSlice.tsx";
import {TypeAddress} from "../../types/TypeAddress.ts";


interface IMapProps {
}


const Maps: FC<IMapProps> = () => {

  const active = useAppSelector((state) => state.addressSlice.MapCenter)
  const address = useAppSelector(state => state.addressSlice.pickPoints)
  const dispatch = useAppDispatch()
  const [MyCoordinates, setMyCoordinates] = useState([active.latitude, active.longitude])
  const coordinates = [active.latitude,active.longitude]
  const setActive = (add: TypeAddress) => {
    dispatch(mapCenter(add))
  }

  useEffect(() => {
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
           setMyCoordinates([position.coords.latitude, position.coords.longitude])
         }, function () {
           console.log('Включите доступ к местоположению')
         })
       }
     } ,
    []
  )

    return (
       <Fragment>
         <YMaps>
           <Map
              width={'100%'}
              height={'100%'}
              defaultState={{center: MyCoordinates}}
              state={{center: coordinates, zoom: 15}}>
             {address.map(add =>
                <Placemark
                   onClick={() => {
                     setActive(add)
                   }} key={add.address} defaultGeometry={[add.latitude, add.longitude]}/>
             )}
           </Map>
         </YMaps>
       </Fragment>

    )
  }

  export default Maps