import { buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Github } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://raw.githubusercontent.com/devitq/devitq/main/logo.png",
    name: "ITQ",
    position: "Backend & Frontend Developer & Dev OPS",
    socialNetworks: [
      { name: "GitHub", url: "https://github.com/devitq" },
    ],
  },
  {
    imageUrl: "https://cdn.discordapp.com/avatars/745800190413373472/db4cd19e6d80f9cfa29e09a43ddbcb28",
    name: "Pigeon",
    position: "Backend Developer",
    socialNetworks: [],
  },
  {
    imageUrl: "https://cdn.discordapp.com/avatars/875043365815717888/2a6ddca40c178c5e91a55c52889f8a98",
    name: "Timkaoch",
    position: "Backend Developer",
    socialNetworks: [],
  },
  {
    imageUrl: "https://cdn.discordapp.com/avatars/743444918197944400/6dcfc04c3931fa5c89e9580eb5f7c655",
    name: "Data Name ID",
    position: "Backend Developer",
    socialNetworks: [],
  },
  {
    imageUrl: "https://cdn.discordapp.com/avatars/545655609005965345/78d2c594eb858d3bb393928a67ef8731",
    name: "OMGKawaiiQueli!",
    position: "Frontend Developer",
    socialNetworks: [],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <Github size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Our team Animulichki contains 5 dedicated web developers
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p></p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
