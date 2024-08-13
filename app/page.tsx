import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pictures from "@/components/Pictures";
import Picture from "@/components/Pictures";
import Image from "next/image";

export default function Home() {
  return (
     <main className="overflow-y-hidden text-neutral-200 antialiased">
        <Hero/>
        <NavBar/>
     </main>
  )
}
