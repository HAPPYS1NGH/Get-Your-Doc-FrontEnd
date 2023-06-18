import Link from "next/link";

export const metadata = {
    title: "Profile",
    description: "Profile of the user"
};

export default function PatientLayout({ children }) {
    return (
        <main className="py-4 px-24 h-full">
            <div className="flex justify-center items-center px-4 py-4  border-b-2 border-gray-100 space-x-4">
                <div className="flex items-center space-x-4">
                    <Link href="/patient/register" className="text-center  bg-teal-100 rounded-2xl  p-2 text-lg"> New Patient</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/patient" className="text-center  bg-teal-100 rounded-2xl p-2 text-lg">Get Patient</Link>
                </div>
            </div>
            {children}
        </main>

    );
}