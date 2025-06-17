import "../globals.css";
import Navigation from "@/components/Navigation";
import { Noto_Serif } from "next/font/google";

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});
export const metadata = {
  title: "My Blog Post",
  description: "Learn Next.js SEO Metadata",
  authors: [
    {
      name: "Avi Makwana",
      url: "https://yourwebsite.com/about",
    },
  ],
  creator: "Avi Makwana", // optional, like 'by Avi Makwana'
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${notoSerif.variable}`}>
        {/* <h1>Hello Layout</h1> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
