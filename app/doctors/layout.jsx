export const metadata = {
    title: "Doctors",
    description: "List of Doctors"
};

export default function DoctorLayout({ children }) {
    return (
        <main >
            {children}
        </main>
    );
}