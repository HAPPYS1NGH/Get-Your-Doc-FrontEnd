export const metadata = {
    title: "Profile",
    description: "Profile of the user"
};

export default function ProfileLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}