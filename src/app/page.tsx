import Header from "@/app/components/header";
import Hero from "@/app/components/hero";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="px-10 mt-10">
        <Hero/>
      </main>
      {/* <Footer/> */}
    </>
  );
}
