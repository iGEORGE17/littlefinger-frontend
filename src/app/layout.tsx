import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Montserrat_Subrayada as MontserratSubrayada } from "next/font/google";
import "./globals.css";
import { StarknetProvider } from "@/components/StarknetProvider";
import { Toaster } from "sonner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontMontserratSubrayada = MontserratSubrayada({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-montserrat-subrayada",
});

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fontMontserratSubrayada.variable} ${fontLato.variable} bg-regal-black text-white`}>
        <StarknetProvider>
          {children}
          <Toaster />
        </StarknetProvider>
      </body>
    </html>
  );
}
