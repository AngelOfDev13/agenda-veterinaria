import usePatientStore from "../store"
import PatientDetail from "./PatientDetail"

const List = () => {

    // const patients = usePatientStore(state => state.patients)
    const { patients } = usePatientStore()
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll scrollbar-hide mt-4">
            {patients.length ? ( 
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-4 mb-4 text-center">
                        Administra tus {''}
                        <span className="text-emerald-500 font-bold">Pacientes y Citas</span>
                    </p>

                    {patients.map(patient => (
                        <PatientDetail 
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ) : (
                <>
                <h2 className="font-black  text-3xl text-center">No Hay Pacientes</h2>

                <p className="text-lg mt-4 text-center mb-4">
                    Comienza Agregando {''}
                    <span className="text-emerald-500 font-bold">Pacientes y Citas</span>
               </p>
                </>
            )}
        </div>
    ) 
}

export default List