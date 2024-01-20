import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abanoub Meseha | Portofolio",
  description: "I am Abanoub Meseha a Junior Fullstack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="Abanoub3.png"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        <div className="pageContent">
          {children}
        </div>
      </body>
    </html>
  );
}
