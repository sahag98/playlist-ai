// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.png";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={1063}
          height={319}
          alt="Website Logo"
          className="not-prose md:w-1/2 w-full mb-6 dark:invert md:mb-8"
        />
        <h1 className="!mb-0 font-bold text-6xl">
          <Balancer>Playlist Share</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Create and share playlists with friends and family.
          </Balancer>
        </h3>
        <div className="not-prose flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/playlists">
              <Camera className="mr-2" />
              Get Started
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href="/posts">Learn more{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
