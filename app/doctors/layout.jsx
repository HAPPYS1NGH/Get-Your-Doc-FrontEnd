export const metadata = {
    title: "doctors",
    description: "Profile of the doctor"
};

export default function DoctorLayout({ children }) {
    return (
        <main >
            {children}
        </main>
    );
}