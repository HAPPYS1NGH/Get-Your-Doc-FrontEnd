'use client'
import { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { ABI, contractAddress, NFTContractAddress, NFTContractABI } from "../../public/utils/contract"
import Image from 'next/image'
import { formatEther } from 'viem'
import Link from 'next/link'
import Doctor from '../components/Doctor'

export default function Doctors() {
    const [tokenURIs, setTokenURIs] = useState([]);
    const [jsonData, setJsonData] = useState([])
    const [id, setId] = useState(0)
    const [doctorAddresses, setDoctorAddresses] = useState([])
    const [getDoctorFees, setDoctorFees] = useState([])

    const { data: tokenUriData } = useContractRead({
        address: NFTContractAddress,
        abi: NFTContractABI,
        functionName: 'tokenURI',
        args: [parseInt(id)]
    })

    const { data: doctorAddress } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorAddressById',
        args: [parseInt(id)]
    })
    const { data: doctorFees } = useContractRead({
        address: contractAddress,
        abi: ABI,
        functionName: 'getDoctorFeesById',
        args: [parseInt(id)]
    })



    async function fetchDoctorsUri() {
        try {
            do {
                const data = tokenUriData
                console.log(data)
                const uri = data.replace('ipfs://', '');
                setTokenURIs(prevData => [...prevData, uri])
                setDoctorAddresses(prevData => [...prevData, doctorAddress])
                setDoctorFees(prevData => [...prevData, doctorFees])
                setId(prevId => prevId + 1)
            }
            while (data != null)
        }
        catch (error) {
            console.log(error)
        }
    }

    async function retrieve(cid, id) {
        const gatewayURL = `https://gateway.ipfs.io/ipfs/${cid}`;
        let dataS;
        console.log(cid)
        try {
            const response = await fetch(gatewayURL);
            const data = await response.json();

            const img = data.image.replace('ipfs://', '');
            data.image = `https://gateway.ipfs.io/ipfs/${img}`;
            data.address = doctorAddresses[id];
            data.fees = formatEther(getDoctorFees[id]);
            data.id = id;
            console.log(data);
            setJsonData(prevData => [...prevData, data]);
        } catch (error) {
            console.error('Error fetching metadata:', error);
        }
    }

    async function fetchDoctorData() {
        await fetchDoctorsUri()
        for (let i = 0; i <= tokenURIs.length; i++) {
            console.log(tokenURIs[i])
            await retrieve(tokenURIs[i], i)
        }
        { console.log(jsonData) }
        // const uniqueArray = jsonData.reduce((accumulator, value) => {
        //     if (!accumulator.includes(value)) {
        //         accumulator.push(value);
        //     }
        //     return accumulator;
        // }, []);
        // setJsonData(uniqueArray)
    }

    const DoctorCard = jsonData.map((data, index) => {
        return (
            <div key={index}>
                <Doctor jsonData={data} />
            </div>
        )
    })


    return (
        <div className='px-24'>
            <Link href='/doctors/register'>Register New Doctor</Link>
            <h1 className='text-3xl text-center font-bold'>Our Doctors</h1>
            <h1 className='m-10 text-2xl'>Retrieve Profile</h1>
            <button onClick={fetchDoctorData} >REtrive</button>
            {
                DoctorCard
            }

        </div>
    )
}

