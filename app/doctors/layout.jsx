import Link from "next/link";
export const metadata = {
    title: "Doctors",
    description: "List of Doctors"
};

export default function DoctorLayout({ children }) {
    return (
        <main >
            <div className="flex justify-center items-center px-4 py-4  border-b-2 border-gray-100 space-x-4 mb-10">
                <div className="flex items-center space-x-4">
                    <Link href='/doctors/register' className="text-center  bg-teal-100 rounded-2xl  p-2 text-lg">Register New Doctor</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href='/doctors' className="text-center  bg-teal-100 rounded-2xl  p-2 text-lg">Get Doctors</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href='/doctors/makeAppointment ' className="text-center  bg-teal-100 rounded-2xl  p-2 text-lg">Make Appointment</Link>
                </div>
            </div>
            {children}
        </main>
    );
}