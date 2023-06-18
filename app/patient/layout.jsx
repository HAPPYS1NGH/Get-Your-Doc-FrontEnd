export const metadata = {
    title: "Profile",
    description: "Profile of the user"
};

export default function PatientLayout({ children }) {
    return (
        <main >
            {children}
        </main>
    );
}