import Link from 'next/link'

function Profile() {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Choose Your Role</h1>

      <div class="flex space-x-12">
        <Link href="/profile/doctor" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300">Doctor</Link>
      </div>

      <div class="flex space-x-12 mt-4">
        <Link href="/profile/patient" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors duration-300">Patient</Link>
      </div>
    </div>

  )
}

export default Profile