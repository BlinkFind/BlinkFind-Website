import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const poppins = Poppins({
//   weight: ['400', '500', '700'],  // Define the font weights you need
//   subsets: ['latin'],
// });

// const inter = Inter({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
// });

export const metadata = {
  title: "QuickFinds",
  description: "QuickFinds is transforming into a cutting-edge startup dedicated to identifying and solving realworld problems through innovative solutions. Our focus is on addressing challenges faced by users, businesses, and communities by developing faster, more secure, and optimized applications, websites, AI-driven solutions, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
