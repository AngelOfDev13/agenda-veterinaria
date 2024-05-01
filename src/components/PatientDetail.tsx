import { Patient } from "../types"
import PatientItem from "./PatientItem"
import usePatientStore from "../store"
import { toast } from "react-toastify"

type PatientDetailProps = {
    patient: Patient
}

const PatientDetail = ({ patient }: PatientDetailProps) => {

    const { deletePatient, getPatientId } = usePatientStore()

    return(
        <div className="mx-5 mb-10 p-4 py-10 bg-slate-900 shadow-md rounded-xl">

            <PatientItem label="ID" data={patient.id} />
            <PatientItem label="Nombre" data={patient.name} />
            <PatientItem label="Propietario" data={patient.caretaker} />
            <PatientItem label="Email" data={patient.email} />
            <PatientItem label="Fecha de Alta" data={patient.date.toString()} />
            <PatientItem label="Sintomas" data={patient.symptoms} />

            <div className="flex flex-col md:flex-row gap-4 justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-6 bg-emerald-600 hover:bg-emerald-800 text-white font-bold uppercase rounded-lg transition-colors"
                    onClick={ () => getPatientId(patient.id)}>
                    Editar
                </button>
                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg transition-colors"
                    onClick={ () => {
                        deletePatient(patient.id)
                        toast.error('Paciente Eliminado')
                        } }>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default PatientDetail