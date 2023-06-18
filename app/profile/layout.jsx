export const metadata = {
    title: "Profile",
    description: "Profile of the user"
};

export default function ProfileLayout({ children }) {
    return (
        <main >
            {children}
        </main>
    );
}