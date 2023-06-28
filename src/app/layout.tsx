import "./globals.css";
import { Poppins, Cairo } from "next/font/google";
import Providers from "../providers/recoil";

const cairo = Cairo({
  variable: "--font-cairo",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

const poppins = Poppins({
  adjustFontFallback: false,
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  let htmlClassNames = poppins.variable + " " + cairo.variable;
  return (
    <html lang="en" className={htmlClassNames}>
      <head />
      <body className="flex min-h-screen flex-col bg-neutral-900 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
