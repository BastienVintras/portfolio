/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import { Section } from "./section";
import { Spacing } from "./spacing";
import { Code } from "./hero";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4 py-5">
      <div className="flex-[3] w-full ">
        <Card className=" p-4 flex flex-col gap-2 w-full">
          <div className="text-lg text-muted-foreground">
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                After Ada
                <div className="w-full flex justify-center">
                  <video
                    controls
                    playsInline
                    width={200}
                    className="py-4"
                    src="/testADA.webm"
                  />
                </div>
              </div>
              <div className="flex-[3] w-full flex items-center justify-center">
              <div className=" mx-auto text-left ml-3">
                <p className="">
                Stack : <Code>Nextjs</Code> <Code>TypeScript</Code> <Code>Tailwind</Code> <Code>Firebase</Code>
                </p>
                <p>
                    Création dune application permettant le partage de projets pour les éleves de Ada Tech School<br/>
                    Projet réalisé seul
                </p>
                <p >
                Lien :{" "}
                <Link className="text-white"  href="http://afterada-front-end.vercel.app/" target="_blank">
                     afterada-front-end.vercel.app/
                </Link>
                </p>
                </div>           
              </div>
            </Card>
            <Spacing size="sm" />
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                After Ada
                <div className="w-full flex justify-center">
                  <video
                    controls
                    playsInline
                    width={200}
                    className="py-4"
                    src="/testMeteo.webm"
                  />
                </div>
              </div>
              <div className="flex-[3] w-full flex items-center justify-center">
              <div className=" mx-auto text-left ml-3">
                <p>
                    Stack : <Code>HTML</Code> <Code>JavaScript</Code> <Code>CSS</Code>
                </p>
                <p className="">
                Création d'une extention de navigateur Chrome permettant d'avoir la météo par géolocalisation ou par recherche de villes <br/>
                Utilisation de l'API OpenWeather <br/>
                Projet réalisé seul
                </p>    
                </div>           
              </div>
            </Card>
            <Spacing size="sm" />
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                After Ada
                <div className="w-full flex justify-center">
                  <video
                    controls
                    playsInline
                    width={200}
                    className="py-4"
                    src="/testMeubles.webm"
                  />
                </div>
              </div>
              <div className="flex-[3] w-full flex items-center justify-center">
              <div className=" mx-auto text-left ml-3">
                <p>
                    Stack : <Code>Reactjs</Code> <Code>BootStrap</Code> <Code>Nodejs</Code> <Code>Mongodb</Code>
                </p>
                <p className="">
               Participation à la création d'un site de e-commerce coté back :
               </p> 
               <ul>
                <li>mise en place d'un serveur <Code>Express</Code></li>
                <li>Création et schématisation d'une base de données avec <Code>Mongoose</Code> </li>
                <li>Intégration des fonctionnalité Crud pour la gestion des données</li>
               </ul>
               <p>
               Projet réalisé en groupe de 5
                </p>    
                </div>           
              </div>
            </Card>
            <Spacing size="sm" />
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                After Ada
                <div className="w-full flex justify-center">
                  <video
                    controls
                    playsInline
                    width={200}
                    className="py-4"
                    src="/testADA.webm"
                  />
                </div>
              </div>
              <div className="flex-[3] w-full flex items-center justify-center">
              <div className=" mx-auto text-left ml-3">
                <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                ad esse repudiandae dolorem, quisquam, explicabo non temporibus
                nostrum sed ratione assumenda sint maiores praesentium corrupti
                consectetur quam nobis quaerat nihil. 
                </p>    
                </div>           
              </div>
            </Card>
            
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col h-full w-full gap-4">
        <Card className="p-4 flex-1">Après plusieurs année d’expérience en restauration, j’ai décidé de me consacrer à ma passion pour le développement web . Je prépare donc un BAC +3 RNCP niveau VI en alternance . Après 9 mois de formation au sein de l’école ADA Tech School, je recherche une alternance à partir de Juillet 2024 .</Card>
        <Card className="p-4 flex-1">contact me</Card>
      </div>
    </Section>
  );
};
