import {Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingShapes } from "@/components/FloatingShapes";

export const metadata = {
  title: "VarPlex",
  description: "Ai Photo Editor",
};

const inter = Inter({subsets : ["latin"]});
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* {header} */}
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
              <FloatingShapes />
              <Toaster richColors />
              {children}
            </main>
            
          </ThemeProvider>
      </body>
    </html>
  );
}
