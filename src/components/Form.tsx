import { useForm } from 'react-hook-form'
import Error from './Error'
import { DraftPatient } from '../types'
import usePatientStore from '../store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Form = () => {
  
    const { addPatient, activeId, patients, updatePatient } = usePatientStore()
    const { register, handleSubmit, setValue, formState : { errors }, reset }  = useForm<DraftPatient>()
    
    useEffect(() => {
        if(activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)
        }
    }, [activeId])

    const patientRegister = (data : DraftPatient) => {

        if(activeId) {
            updatePatient(data)
            toast.success('Paciente Actualizado')
        } else {
            addPatient(data)
            toast.success('Paciente Registrado')

        }
        reset()
    } 


    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5 mt-4">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
  
          <p className="text-lg mt-4 text-center mb-4">
              Añade Pacientes y {''}
              <span className="text-emerald-500 font-bold">Administralos</span>
          </p>
  
          <form 
              className="bg-slate-900 shadow-md rounded-lg p-5"
              noValidate
              onSubmit={ handleSubmit(patientRegister) }
          >
                <div className="mb-2">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-2 border border-gray-600 outline-none bg-slate-700 rounded-md"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {...register('name', {
                            required: 'Este Campo es Obligatorio',


                        })}
                    />

                    { errors.name && (
                        <Error> { errors.name.message } </Error>
                    )
                    }

                </div>
  
                <div className="mb-2">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                      id="caretaker"
                      className="w-full p-2  borde outline-none border-gray-600 bg-slate-700 rounded-md"  
                      type="text" 
                      placeholder="Nombre del Propietario" 
                      {...register('caretaker', {
                        required: 'Este Campo es Obligatorio'
                    })}
                  />

                  {
                    errors.caretaker && (
                        <Error> { errors.caretaker.message } </Error>
                    )
                  }
                </div>
  
              <div className="mb-2">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-2  borde outline-none border-gray-600 bg-slate-700 rounded-md"  
                    type="email" 
                    placeholder="Email de Registro. ej: winterfell@dominio.com" 
                    {...register("email", {
                        required: "Este Campo es Obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Formato de Email no valido. ej: winterfell@dominio.com'
                        }
                      })} 
                />
                {
                    errors.email && (
                        <Error> { errors.email.message } </Error>
                    )
                }
              </div>

  
              <div className="mb-2">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-2  border outline-none border-gray-600 bg-slate-700 rounded-md"  
                      type="date"
                      {...register('date', {
                        required: 'Este Campo es Obligatorio'
                    })} 
                  />

                  {
                    errors.date && (
                        <Error> { errors.date.message } </Error>
                    )
                  }
              </div>
              
              <div className="mb-5">
                  <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                  Síntomas 
                  </label>
                  <textarea  
                      id="symptoms"
                      className="w-full p-2  border  outline-none border-gray-600 bg-slate-700 rounded-md"  
                      placeholder="Síntomas del paciente" 
                      {...register('symptoms', {
                        required: 'Este Campo es Obligatorio'
                    })} 
                  ></textarea>
                {
                    errors.symptoms && (
                        <Error> { errors.symptoms.message } </Error>
                    )
                }
              </div>
  
              <input
                  type="submit"
                  className="bg-emerald-600 w-full p-2 text-white uppercase font-bold hover:bg-emerald-800 cursor-pointer transition-colors rounded-md"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
  }

export default Form