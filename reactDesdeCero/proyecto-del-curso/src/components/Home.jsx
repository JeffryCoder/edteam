import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='px-6 py-20 h-screen text-center text-neutral-200'>
        <h1 className='mb-6 text-5xl font-bold'>CriptoFrixzito | Bienvenido</h1>
        <h3 className='mb-8 text-3xl font-bold'>¡Conoce las 100 criptomonedas más famosas!</h3>
        <Link
          className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
          data-te-ripple-init
          data-te-ripple-color='light'
          to='/criptomonedas'
          role='button'
        >
          Ver Criptomonedas
        </Link>
      </div>
    </>
  )
}
export default Home
