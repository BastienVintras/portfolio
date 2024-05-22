import Image from "next/image";
import { Section } from "./section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/githubIcon";
import { AdaIcon } from "./icons/adaicon";
import Link from "next/link";
import { Spacing } from "./spacing";


export const Code  = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span className={cn("bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 rounded-sm text-primary",className)}
    {...props}/>
 );
};


export const Hero = ( ) => {
  return (
  <Section className="flex max-md:flex-col items-start gap-4">
    <div className="flex-[3] flex flex-col gap-2">
        <h1 className="font-caption text-6xl text-primary text-center">Vintras Bastien</h1>
        <h2 className="text-4xl text-white font-caption md:text-5xl text-center">Apprenti Developpeur Full Stack</h2>
        <Spacing size="sm"/>
        <h3 className="text-2xl">
        Après plusieurs années d’expérience en tant que chef de cuisine, j’ai décidé de me lancer avec passion dans le développement web . Je prépare donc un BAC +3 RNCP niveau VI en alternance . Après 9 mois de formation au sein de l’école ADA Tech School <AdaIcon className=" inline w-20 -mt-2"/>, je recherche une alternance à partir de Juillet 2024 .
        </h3>
    </div>
    <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
        src="/profil4.jpg"
        alt="photo de profil"
        className="w-full h-auto rounded-full max-w-xs max-md:w-56"
        width={200}
        height={200}
        />       
    </div>
  </Section>
  );
};
