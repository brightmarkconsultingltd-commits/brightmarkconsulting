import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Brightmark Consulting Ltd | Clarity, Capability & Growth; partnership over prescription.",
  description:
    "Brightmark works with startups, SMEs, NGOs, and public and private institutions to bring clarity, build capability, and drive sustainable growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
