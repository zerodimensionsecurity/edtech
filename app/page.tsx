import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
     <>
      {/* <Helmet>
        <title>HackenProof - Web3 Bug Bounty & Crowdsourced Audit Platform</title>
        <meta
          name="description"
          content="Expert web3 bug bounty and crowdsourced audit platform. Secure your blockchain projects with our community of security researchers."
        />
      </Helmet> */}
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </>
  );
}
