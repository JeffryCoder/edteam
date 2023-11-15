import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    setUsuario({
      nombre: 'William',
      apellido: 'Mendoza',
      edad: 48,
      email: 'jeffrycoder@gmail.com',
      registeredAt: '15 de noviembre del 2023'
    })
  }, [])

  return (
    <UserContext.Provider value={usuario}>
      {children}
    </UserContext.Provider>
  )
}
export { UserContext, UserContextProvider }
