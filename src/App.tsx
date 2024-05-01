import Form from "./components/Form"
import List from "./components/List"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

const App = () => {
  return(
    <>
      <div className="container mx-auto mt-2">
          <h1 className="text-white font-black text-5xl text-center md:w-2/3 md:mx-auto">
            Seguimiento de Pacientes {''}
            <span className="text-emerald-500">
              Veterinaria
            </span>
          </h1>

          <div className="mt-8 md:flex text-white">
            <Form/>
            <List/>

          </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App