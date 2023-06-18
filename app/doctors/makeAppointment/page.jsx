'use client'
import { useState } from "react"
import { useAccount, useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi'
import { ABI, contractAddress } from "../../../public/utils/contract"


function MakeAppointment() {
    const [doctorId, setDoctorId] = useState('')
    const [patientId, setPatientId] = useState('')
    const [doctorFee, setDoctorFee] = useState('')
    const [meetingLink, setMeetingLink] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')
    const { address } = useAccount()

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: ABI,
        functionName: 'makeAppointment',
        args: [parseInt(doctorId), parseInt(patientId), parseInt(appointmentTime), meetingLink],
        value: doctorFee,
    })

    const { data: doctorFees } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorFeesById',
        args: [parseInt(doctorId)]
    })


    const { write: makeAppointment } = useContractWrite(config)

    const createIframeRoom = async () => {
        const API_KEY = process.env.NEXT_PUBLIC_HUDDLE_API_KEY;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({
                title: 'Huddle01-Test',
                roomLocked: true,
                hostWallets: [address],
            }),
        };

        try {
            const response = await fetch('https://api.huddle01.com/api/v1/create-iframe-room', requestOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error calling Huddle API:', error);
            throw error;
        }
    };


    async function submitHandler(e) {
        e.preventDefault()

        try {
            const roomData = await createIframeRoom();
            console.log('Room created:', roomData);
            console.log(roomData.data.roomId);
            setMeetingLink(roomData.data.roomId)
            // Do something with the room data
        } catch (error) {
            // Handle error
            console.error('Error creating room:', error);
        }
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