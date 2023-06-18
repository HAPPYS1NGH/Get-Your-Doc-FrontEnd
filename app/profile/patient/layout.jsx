export const metadata = {
    title: "Patient Profile",
    description: "Profile of the patient"
};

export default function PatientProfileLayout({ children }) {
    return (
        <main >
            {children}
        </main>
    );
}