import './home.css'
import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Menu from '../../components/menu/Menu'
import HomeItemLista from '../../components/homeItemLista/HomeItemLista'
import BtnAgregar from '../../components/btnAgregar/BtnAgregar'

export default function Home() {
  const [dispositivo, setDispositivo] = useState([])

  const getDispositivo = async () => {
    const res = await fetch('/aires.json')
    let json = await res.json()
    setDispositivo(json)
    console.log(json)
  }

  useEffect(() => {
    getDispositivo()
  }, [])

  return (
    <>
      <Header></Header>
      {/*       {dispositivo.map((aire) => (
              <HomeItemLista aire={aire} key={aire.id} />
            ))}
 */}
      <HomeItemLista></HomeItemLista>
      <BtnAgregar></BtnAgregar>
      <Menu></Menu>
    </>
  )
}
