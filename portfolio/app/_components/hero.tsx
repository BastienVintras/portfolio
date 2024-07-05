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
    <span className={cn("bg-secondary font-mono border hover:bg-accent/50 transition-colors border-secondary px-1 py-0.5 rounded-sm text-white",className)}
    {...props}/>
 );
};


export const Hero = ( ) => {
  return (
  <Section className="flex max-md:flex-col items-start gap-4">
    <div className="flex-[3] flex flex-col gap-2">
        <h1 className="font-caption text-6xl text-primary text-center">Vintras Bastien</h1>
        <Spacing size="xs"/>
        <h3 className="text-3xl text-white font-caption md:text-4xl text-center">Je me forme à concocter des applications avec différentes technologies</h3>

        <Spacing size="sm"/>
        <h3 className="text-2xl text-primary ">
        Après plusieurs années d’expérience en tant que chef de cuisine, j’ai décidé de me lancer avec passion dans le développement web . Je prépare donc un BAC +3 RNCP niveau VI en alternance . Après 9 mois de formation au sein de l’école ADA Tech School <AdaIcon className=" inline w-20 -mt-2"/>, je recherche une alternance à partir de Juillet 2024 .
        </h3>
    </div>
    
    <div className="flex-[2] max-md:m-auto ml-auto relative">
        <div className="relative z-10">
          <Image
            src="/profil8.png"
            alt="photo de profil"
            className="w-full h-auto rounded-full max-w-xs max-md:w-56"
            width={200}
            height={200}
          />
        </div>
        <div className="absolute top-0 left-0 transform md:translate-x-64 md:translate-y-64 z-0 hidden md:block">
          <Image
            src="/chefdecode7.png"
            alt="chefdecode"
            className="w-full h-auto max-w-xs max-md:w-56"
            width={200}
            height={200}
          />
        </div>
      </div>
  </Section>
  );
};
