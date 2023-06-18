import Link from "next/link";
import Image from "next/image";
import { RxClock } from 'react-icons/rx';
import { BsFlag } from 'react-icons/bs';
import { TfiBag } from 'react-icons/tfi'
export default function Home() {
  return <main>
    <div className="flex  justify-center align-middle">
      <div className="w-1/2 py-20 pr-36 space-y-4">
        <h3 className="text-xl">EXPERT MEDICAL TREATMENT</h3>
        <h1 className=" text-6xl font-bold">We Follow a holistic approach to Health Care.</h1>
        <p>This is an online platform which provides a video appointment with your renowned doctors without the need of an intermediary.</p>
        <div className="py-3">
          <Link href="/doctors/makeAppointment" className="bg-blue-500 py-3  px-5 rounded-lg text-white ">Book an Appointment</Link>
        </div>
      </div>
      <div className="relative my-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 transform -skew-y-6 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        <div className="relative">
          <Image src="/images/doctor1.png" alt="doctor" width={500} height={500} />
        </div>
      </div>

    </div>
    <footer className="bg-blue-900 flex py-20">
      <div className="flex justify-between items-center py-4 px-24">
        <div className="flex">
          <div className="py-8 bg-white px-4 rounded-full">
            <RxClock className="text-blue-900" />
          </div>
          <div className="px-4 space-y-2 w-48">
            <h1 className="text-white text-lg">24 Hour Service</h1>
            <p className="text-gray-300 text-sm">This is open to everyone and everyday.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-24">
        <div className="flex">
          <div className="py-8 bg-white px-4 rounded-full">
            <TfiBag className="text-blue-900" />
          </div>
          <div className="px-4 space-y-2 w-48">
            <h1 className="text-white text-lg">Experienced</h1>
            <p className="text-gray-300 text-sm">This is open to everyone and everyday.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 px-24">
        <div className="flex">
          <div className="py-8 bg-white px-4 rounded-full">
            <BsFlag
              className="text-blue-900" />
          </div>
          <div className="px-4 space-y-2 w-48">
            <h1 className="text-white text-lg">Quality Service</h1>
            <p className="text-gray-300 text-sm">This is open to everyone and everyday.</p>
          </div>
        </div>
      </div>
    </footer>
  </main>;
}
