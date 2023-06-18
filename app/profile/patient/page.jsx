'use client'
import { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'
import { Web3Storage } from 'web3.storage'
import { ABI, contractAddress } from "../../../public/utils/contract"
import Link from 'next/link'

export default function PatientProfile() {
    const [id, setId] = useState()
    const [jsonData, setJsonData] = useState('')
    const [fetchPatientData, setFetchPatientData] = useState(false)

    const { address } = useAccount()

    function getAccessToken() {
        return process.env.NEXT_PUBLIC_WEB3_API_KEY
    }

    function makeStorageClient() {
        return new Web3Storage({ token: getAccessToken() })
    }

    const { data: patientData } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getPatientById',
        args: [id]
    })

    const { data: getPatientIdByAddress } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getPatientIdByAddress',
        args: [address]
    })

    async function readBlobData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const arrayBuffer = reader.result;
                const decoder = new TextDecoder("utf-8");
                const jsonStr = decoder.decode(arrayBuffer);
                const jsonData = JSON.parse(jsonStr);
                resolve(jsonData);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    async function retrieve() {
        try {
            const cid = patientData.uri;
            console.log(cid)
            const client = makeStorageClient()
            const res = await client.get(cid)
            console.log(`Got a response! [${res.status}] ${res.statusText}`)
            if (!res.ok) {
                throw new Error(`failed to get ${cid}`)
            }
            const files = await res.files();
            const file = files[0];
            const jsonData = await readBlobData(file);
            jsonData.address = patientData.address
            jsonData.appointments = patientData.appointments
            console.log(jsonData);
            setJsonData(jsonData)
            if (jsonData.name) {
                setFetchPatientData(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        while (!address) {
            console.log(address)
        }
        console.log(getPatientIdByAddress)
        setId(getPatientIdByAddress)
        retrieve()
    }, [getPatientIdByAddress, address])


    return (
        <div class="container mx-auto px-4 py-8">
            {fetchPatientData ? (
                <div>
                    <h1 class="text-3xl font-bold mb-4">Patient Name: {jsonData.name}</h1>
                    <h1 class="text-lg">Patient Date of Birth: {jsonData.date_of_birth}</h1>
                    <h3 class="text-lg">Patient Gender: {jsonData.gender}</h3>
                    <h3 class="text-lg">Patient Blood Group: {jsonData.blood_group}</h3>
                    <h3 class="text-lg">Patient Height: {jsonData.height}</h3>
                    <h3 class="text-lg">Patient Weight: {jsonData.weight}</h3>
                    <h3 class="text-lg">Patient Allergies: {jsonData.allergies}</h3>
                </div>
            ) : (
                <button onClick={retrieve} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300">
                    Fetch for this Account
                </button>
            )}
        </div>

    )
}

