'use client'
import React from 'react'
import { useState } from 'react'
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite, } from 'wagmi'
function Doctors() {
    const { address } = useAccount()
    const [name, setName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [allergies, setAllergies] = useState('')

    return (
        <div>
            <h1>Create a New Profile</h1>
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                <br />
                <label htmlFor='gender'>Gender</label>
                <input type="text" name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                <br />
                <label htmlFor='bloodGroup'>Blood Group</label>
                <input type="text" name="bloodGroup" id="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} />
                <br />
                <label htmlFor='height'>Height (in cm)</label>
                <input type="number" name="height" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                <br />
                <label htmlFor='weight'>Weight (in kg)</label>
                <input type="number" name="weight" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <br />
                <label htmlFor='allergies'>Allergies</label>
                <input type="text" name="allergies" id="allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                <br />
                <button type="submit" className='bg-blue-500 p-3 ' >Store Data</button>
            </form>
        </div>
    )
}
export default Doctors