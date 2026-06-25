import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Saad Iqbal | Portfolio",
  description: "Full Stack Developer & Game Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* CRITICAL FIX: 
      - Removed 'h-full' from html.
      - Added 'overflow-x-hidden' to prevent horizontal layout bleeding.
      - Added 'suppressHydrationWarning' to cleanly bypass extension conflicts.
    */
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      {/* CRITICAL FIX:
        - Removed 'min-h-full' or 'h-full'.
        - Set 'min-h-screen' here so the document canvas naturally fills the viewport.
        - Ensured NO nested overflow-y behaviors exist on the body layer.
      */}
      <body className="min-h-screen w-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30 font-sans antialiased overflow-x-hidden">
        
        {/* Dynamic Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/5 blur-[120px] pointer-events-none z-0" />
        
        <NavBar />

        {/* The main shell should seamlessly expand downwards without restricting height bounds */}
        <div className="relative z-10 flex-1 flex flex-col w-full">
          {children}
        </div>
      </body>
    </html>
  );
}