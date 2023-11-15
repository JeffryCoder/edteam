import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    setUsuario({
      nombre: 'Jeffry',
      apellido: 'Gonzalez',
      edad: 29,
      email: 'jeffrycoder@gmail.com',
      registeredAt: '15 de noviembre'
    })
  }, [])

  return (
    <UserContext.Provider value={usuario}>
      {children}
    </UserContext.Provider>
  )
}
export { UserContext, UserContextProvider }
