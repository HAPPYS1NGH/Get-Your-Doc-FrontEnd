import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Header from "./components/Header";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Get Your Doctor",
  description: "An app to help you find your doctor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-teal-50 from-teal-50 to-warm-gray-100 ${montserrat.className}`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
