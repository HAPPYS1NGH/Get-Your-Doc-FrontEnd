'use client'
import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, } from 'wagmi'
import { Web3Storage } from 'web3.storage'
import { ABI, contractAddress } from "../../../public/utils/contract"

function Profile() {
    const { address } = useAccount()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [allergies, setAllergies] = useState('')
    const [cid, setCid] = useState('')

    function getAccessToken() {
        return process.env.NEXT_PUBLIC_WEB3_API_KEY
    }

    function makeStorageClient() {
        return new Web3Storage({ token: getAccessToken() })
    }
    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: ABI,
        functionName: 'addPatient',
        args: [cid]
    })
    const { write: addPatientData } = useContractWrite(config)

    const { data: patientId } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getTotalPatients',
    })


    async function onSubmitHandler(event) {
        event.preventDefault();
        const allergiesArray = allergies.split(',').map((allergy) => allergy.trim());
        await getPatientData()
        const formData = {
            id,
            name,
            date_of_birth: dateOfBirth,
            gender,
            blood_group: bloodGroup,
            height: parseInt(height),
            weight: parseInt(weight),
            allergies: allergiesArray,
        };
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        const client = makeStorageClient()
        const blob = new Blob([jsonData], {
            type: "application/json",
        });
        const files = [
            new File([blob], `${name}-${address}.json`)
        ]
        const cidData = await client.put(files)
        setCid(cidData);
        console.log('stored files with cid:', cid)
        addPatientData()
    }

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

    async function retrieve(cid) {
        const client = makeStorageClient()
        const res = await client.get("bafybeie35ghet357ejuvognlhnnjjzldex5nrzinod2tezgzo5723qay24")
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
            throw new Error(`failed to get ${cid}`)
        }
        const files = await res.files();
        const file = files[0];
        const jsonData = await readBlobData(file);
        console.log(jsonData);
    }
    async function getPatientData() {
        console.log(parseInt(patientId))
        setId(parseInt(patientId))
    }

    return (
        <div className='px-24'>
            <h1 className='text-3xl text-center font-bold'>Create a New Patient Profile</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">
                        Gender
                    </label>
                    <input
                        type="text"
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="bloodGroup" className="block text-gray-700 font-semibold mb-2">
                        Blood Group
                    </label>
                    <input
                        type="text"
                        name="bloodGroup"
                        id="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className="block text-gray-700 font-semibold mb-2">
                        Height (in cm)
                    </label>
                    <input
                        type="number"
                        name="height"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">
                        Weight (in kg)
                    </label>
                    <input
                        type="number"
                        name="weight"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="allergies" className="block text-gray-700 font-semibold mb-2">
                        Allergies
                    </label>
                    <input
                        type="text"
                        name="allergies"
                        id="allergies"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmitHandler}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                >
                    Store Data
                </button>
            </form>

            <h1 className='m-10 text-2xl'>Retrieve Profile</h1>
            <button onClick={getPatientData} >REtrive</button>
        </div>
    )
}

export default Profile