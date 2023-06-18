'use client'
import { useState } from "react"
import { useAccount, useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import { ABI, contractAddress } from "../../../public/utils/contract"


function MakeAppointment() {
    const [doctorId, setDoctorId] = useState('')
    const [patientId, setPatientId] = useState('')
    const [doctorFee, setDoctorFee] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: ABI,
        functionName: 'makeAppointment',
        args: [parseInt(doctorId), parseInt(patientId), parseInt(appointmentTime)],
        value: doctorFee,
    })

    const { data: doctorFees } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorFeesById',
        args: [parseInt(doctorId)]
    })

    const { write: makeAppointment } = useContractWrite(config)

    function submitHandler(e) {
        e.preventDefault()
        setDoctorFee(parseInt(doctorFees))
        console.log(doctorFees)
        console.log(doctorFee)
        makeAppointment()
    }
    return (
        <div className="container mx-auto px-4">
            <form className="max-w-sm mx-auto mt-8" onSubmit={submitHandler}>
                <h1 className="text-2xl font-bold mb-4">Make Appointment</h1>
                <div className="mb-4">
                    <label htmlFor="doctorId" className="block text-gray-700">Doctor ID</label>
                    <input type="number" name="doctorId" id="doctorId" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="form-input mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="patientId" className="block text-gray-700">Patient ID</label>
                    <input type="number" name="patientId" id="patientId" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="form-input mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="appointmentTime" className="block text-gray-700">Appointment Time</label>
                    <input type="number" name="appointmentTime" id="appointmentTime" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} className="form-input mt-1" />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
        </div>
    )
}

export default MakeAppointment