// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera, Music } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/public/logo.png";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-3 text-center">
        <Image
          src={Logo}
          width={1063}
          height={319}
          alt="Website Logo"
          className="not-prose md:w-1/2 w-full mb-5 dark:invert md:mb-5"
        />
        <h1 className="font-bold text-4xl md:text-7xl">
          <Balancer>Playlist Share</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Create and share playlists with friends and family.
          </Balancer>
        </h3>
        <div className="not-prose flex gap-2 mt-3">
          <Button asChild>
            <Link className="space-x-3" href="/playlists">
              <Music />
              {/* <Camera className="mr-2" /> */}
              <span>Get Started</span>
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
