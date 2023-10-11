import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";

import Categories from "@/components/categories";

export const metadata: Metadata = {
  title: "Migrado Libre",
  description: "La tienda de Don Miguel, libre de amarillos",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]">
          <Link href="/">Migrado Libre</Link>
        </header>
        <div className="flex">
          <aside className="w-40">
            <Categories />
          </aside>
          <main className="w-full py-8">{children}</main>
        </div>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Don Miguel
        </footer>
      </body>
    </html>
  );
}
