import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
     <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Hero/>
        <NavBar/>
     </main>
  )
}
