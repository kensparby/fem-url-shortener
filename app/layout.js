import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
});

export const metadata = {
  title: "Shortly | Frontend Mentor",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f0f1f6] min-h-screen flex flex-col relative ${poppins.className}`}
      >
        <Header />
        <main className="flex flex-col">{children}</main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}