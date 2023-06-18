'use client'
import { useState } from 'react'
import { useAccount, useContractWrite, usePrepareContractWrite, } from 'wagmi'
import { NFTStorage, File } from 'nft.storage'
import { ABI, contractAddress } from "../../../public/utils/contract"
import Image from 'next/image'
import { parseEther } from 'viem'

export default function Doctors() {
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [education, setEducation] = useState('')
    const [gender, setGender] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [languages, setLanguages] = useState('')
    const [description, setDescription] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [experience, setExperience] = useState('')
    const [fees, setFees] = useState('')
    const [cid, setCid] = useState('')
    const [mintingNFT, setMintingNFT] = useState(false)


    function getAccessToken() {
        return process.env.NEXT_PUBLIC_NFT_API_KEY;
    }

    function makeStorageClient() {
        return new NFTStorage({ token: getAccessToken() })
    }
    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: ABI,
        functionName: 'addDoctor',
        args: [cid, fees],
        value: parseEther('0.1'),
    })

    const { write: addDoctorData } = useContractWrite(config)

    async function onSubmitHandler(event) {
        event.preventDefault();
        console.log(config)
        setMintingNFT(true)
        try {
            // const allergiesArray = allergies.split(',').map((allergy) => allergy.trim());

            const formData = {
                description: description,
                image: new File([imageUrl], `${name}-image.jpg`, { type: 'image/jpg' }),
                name: `${name}`,
                attributes: [
                    {
                        trait_type: "name",
                        value: name
                    },
                    {
                        trait_type: "date_of_birth",
                        value: dateOfBirth
                    },
                    {
                        trait_type: "education",
                        value: education
                    },
                    {
                        trait_type: "gender",
                        value: gender
                    },
                    {
                        trait_type: "languages",
                        value: languages
                    },
                    {
                        trait_type: "specialization",
                        value: specialization
                    }
                ]
            };
            const client = makeStorageClient()
            const metadata = await client.store(formData)
            console.log('Metadata URI: ', metadata.url)
            setCid(metadata.url);
            await addDoctorData();
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setMintingNFT(false)
        }
    }

    // async function retrieve(cid) {
    //     const metadataCID = 'bafyreihbney7fwhfvmcwdsis2nxy4am56dsbubmup4zyebw5zahcssbh6a';
    //     const gatewayURL = `https://gateway.ipfs.io/ipfs/${metadataCID}/metadata.json`;
    //     let dataS;
    //     fetch(gatewayURL)
    //         .then(response => response.json())
    //         .then(data => {
    //             dataS = data;
    //             console.log(data);
    //             // Access and use the data as needed
    //         })
    //         .catch(error => {
    //             console.error('Error fetching metadata:', error);
    //         });
    //     const gatewayURL2 = `https://gateway.ipfs.io/ipfs/${dataS.image}/metadata.json`;

    // }

    return (
        <div className='px-24 '>
            <h1 className='text-3xl text-center font-bold'>Create a New Profile</h1>
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
                        required={true}
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
                    <label htmlFor="education" className="block text-gray-700 font-semibold mb-2">
                        Education                    </label>
                    <input
                        type="text"
                        name="education"
                        id="education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                        Description                    </label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="languages" className="block text-gray-700 font-semibold mb-2">
                        Languages
                    </label>
                    <input
                        type="text"
                        name="languages"
                        id="languages"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fees" className="block text-gray-700 font-semibold mb-2">
                        Fees (in Wei)
                    </label>
                    <input
                        type="number"
                        name="fees"
                        id="fees"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="specialization" className="block text-gray-700 font-semibold mb-2">
                        Specialisation
                    </label>
                    <input
                        type="text"
                        name="specialization"
                        id="specialization"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">
                        Experience
                    </label>
                    <input
                        type="text"
                        name="experience"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => setImageUrl(e.target.files[0])}
                        accept="image/*"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    onClick={onSubmitHandler}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md font-semibold"
                    disabled={mintingNFT}
                >{
                        mintingNFT ?
                            "Minting NFT..."
                            :
                            "Mint NFT"
                    }
                </button>
            </form>

        </div>
    )
}

