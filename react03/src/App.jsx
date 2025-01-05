import Cards from './components/cards'
import './App.css'

function App() {

  return (
    <>
      <h1 className=' text-3xl bg-green-500 p-3 rounded-md'>Hwllo Vite</h1>
      <h1>Hwllo Vite</h1>
      <Cards username="hello123456" />
      <Cards myArr={[1,2,3]}/>
      <Cards />
    </>
  )
}

export default App

