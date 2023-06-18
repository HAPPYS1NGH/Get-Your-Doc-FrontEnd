'use client'
import { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'
import { Web3Storage } from 'web3.storage'
import { ABI, contractAddress } from "../../public/utils/contract"
import Link from 'next/link'
import lit from '@/app/lit'

function Patient() {
    const [id, setId] = useState()
    const [jsonData, setJsonData] = useState('')
    const [fetchPatientData, setFetchPatientData] = useState(false)

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

    async function retrieve(event) {
        event.preventDefault();
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

        console.log(jsonData);
        setJsonData(jsonData)
        if (jsonData.name) {
            setFetchPatientData(true)
        }
    }


    return (
        <div>
            <Link href="/patient/register" className='text-center text-lg'>Register New Patient</Link>
            {
                fetchPatientData
                    ?
                    <div>
                        <h1>Patient Name: {jsonData.name}</h1>
                        <h1>Patient Date of Birth: {jsonData.date_of_birth}</h1>
                        <h3>Patient Gender: {jsonData.gender}</h3>
                        <h3>Patient Blood Group: {jsonData.blood_group}</h3>
                        <h3>Patient Height: {jsonData.height}</h3>
                        <h3>Patient Weight: {jsonData.weight}</h3>
                        <h3>Patient Allergies: {jsonData.allergies}</h3>
                    </div>
                    :
                    <form >
                        <label htmlFor="id">Patient Id</label>
                        <input type="text" placeholder="Enter Patient Id" onChange={(e) => setId(e.target.value)} />
                        <button onClick={retrieve}>
                            Click
                        </button>
                    </form>
            }
        </div>
    )
}

export default Patient