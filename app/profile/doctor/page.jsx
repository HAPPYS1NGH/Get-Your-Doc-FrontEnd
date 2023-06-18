'use client'
import { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'
import { ABI, contractAddress, NFTContractAddress, NFTContractABI } from "../../../public/utils/contract"
import { formatEther } from 'viem'
import Doctor from "../../components/Doctor"

export default function Doctors() {
    const [tokenURIs, setTokenURIs] = useState();
    const [jsonData, setJsonData] = useState()
    const [id, setId] = useState()
    const [getDoctorFees, setDoctorFees] = useState()
    const { address } = useAccount()
    const [dataFetch, setDataFetch] = useState(false)

    const { data: tokenUriData } = useContractRead({
        address: NFTContractAddress,
        abi: NFTContractABI,
        functionName: 'tokenURI',
        args: [parseInt(id)]
    })

    const { data: doctorFees } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorFeesById',
        args: [parseInt(id)]
    })

    const { data: getDoctorID } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorIdByAddress',
        args: [address]
    })

    async function fetchDoctorsUri() {
        try {
            const data = tokenUriData
            console.log(data)
            const uri = data.replace('ipfs://', '');
            setTokenURIs(uri)
            setDoctorFees(doctorFees)
        }
        catch (error) {
            console.log(error)
        }
    }

    async function retrieve(cid) {
        const gatewayURL = `https://gateway.ipfs.io/ipfs/${cid}`;
        console.log(cid)
        try {
            const response = await fetch(gatewayURL);
            const data = await response.json();
            const img = data.image.replace('ipfs://', '');
            data.image = `https://gateway.ipfs.io/ipfs/${img}`;
            data.address = address;
            data.fees = formatEther(getDoctorFees);
            data.id = id;
            setJsonData(data);
        } catch (error) {
            console.error('Error fetching metadata:', error);
        }
    }

    async function fetchDoctorData() {
        setId(getDoctorID)
        await fetchDoctorsUri()
        await retrieve(tokenURIs)
        console.log(jsonData)
        if (jsonData) {
            setDataFetch(true)
        }
    }

    return (
        <div class="container mx-auto px-4 py-8">
            <div class="px-24">
                {dataFetch ? (
                    <Doctor jsonData={jsonData} />
                ) : (
                    <button onClick={fetchDoctorData} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300">
                        Fetch Your Profile
                    </button>
                )}
            </div>
        </div>

    )
}

