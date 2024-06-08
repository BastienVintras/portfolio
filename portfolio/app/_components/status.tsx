/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import { Section } from "./section";
import { Spacing } from "./spacing";
import { Code } from "./hero";
import Link from "next/link";
import { AdaIcon } from "./icons/adaicon";
import { GmailIcon } from "./icons/gmailIcon";
import { LinkedinIcon } from "./icons/linkedinIcon";
import { CvIcon } from "./icons/cvIcon";
import { ReactIcon } from "./icons/reactIcon";
import { TailwindIcon } from "./icons/tailwindIcon";
import { JavaScriptIcon } from "./icons/javascriptIcon";
import { NodeIcon } from "./icons/nodeIcon";
import { Footer } from "./footer";

export const Status = () => {
  return (
    <Section>
    <div className=" flex max-md:flex-col items-start gap-4 py-5 ">
      <div className="flex-[3] w-full ">
        <Card className=" p-4 flex flex-col gap-2 w-full ">
          <div className="text-lg text-muted-foreground">
            <p className="flex justify-center mb-5 text-4xl">Projets</p>
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
                    Stack : <Code>Nextjs</Code> <Code>TypeScript</Code>{" "}
                    <Code>Tailwind</Code> <Code>Firebase</Code>
                  </p>
                  <p>
                    Création d'une application permettant le partage de projets
                    pour les éleves de Ada Tech School
                    <br />
                    Projet réalisé seul
                  </p>
                  <p>
                    Lien :{" "}
                    <Link
                      className="text-white"
                      href="http://afterada-front-end.vercel.app/"
                      target="_blank"
                    >
                      afterada-front-end.vercel.app/
                    </Link>
                  </p>
                </div>
              </div>
            </Card>
            <Spacing size="sm" />
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                Extension navigateur Chrome Météo
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
                  <p className="">
                    Stack : <Code>HTML</Code> <Code>JavaScript</Code>{" "}
                    <Code>CSS</Code>
                  </p>
                  <p className="">
                    Création d'une extension de navigateur Chrome permettant
                    d'avoir la météo par géolocalisation ou par recherche de
                    villes <br />
                    Utilisation de l'API OpenWeather <br />
                    Projet réalisé seul
                  </p>
                </div>
              </div>
            </Card>
            <Spacing size="sm" />
            <Card className="flex max-md:flex-col md:flex-row  items-center gap-4">
              <div className="flex-1 text-white text-center py-1 text-xl">
                Projet site e-commerce
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
                    Stack : <Code>Reactjs</Code> <Code>BootStrap</Code>{" "}
                    <Code>Nodejs</Code> <Code>Mongodb</Code>
                  </p>
                  <p className="">
                    Participation à la création d'un site de e-commerce coté
                    back :
                  </p>
                  <ul>
                    <li>
                      mise en place d'un serveur <Code>Express</Code>
                    </li>
                    <li>
                      Création et schématisation d'une base de données avec{" "}
                      <Code>Mongoose</Code>{" "}
                    </li>
                    <li>
                      Intégration des fonctionnalités Crud pour la gestion des
                      données
                    </li>
                  </ul>
                  <p>Projet réalisé en groupe de 5</p>
                </div>
              </div>
            </Card>
            <Spacing size="sm" />
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col h-full w-full gap-4">
        <Card className="p-4 flex-1">
          <p className="flex justify-center text-4xl">Ma formation</p>
          <p className="mt-4 text-lg text-muted-foreground">
            L'école <AdaIcon className="inline w-20 -mt-3" /> est une
            institution inclusive qui offre une formation structurée de 9 mois,
            axée sur l'apprentissage actif par le biais de projets de groupe.
            Ces projets couvrent divers langages de programmation et sont
            encadrés par des professionnels expérimentés. En plus des projets
            collectifs, les étudiants développent leurs compétences en
            autonomie, en se concentrant sur les technologies qui les
            intéressent le plus. Cette approche individuelle est renforcée par
            des exercices pratiques, des mini-projets en pair programming et des
            sessions régulières de revue de code, permettant ainsi à chaque
            étudiant de progresser à son rythme tout en bénéficiant d'un
            environnement collaboratif et bienveillant.
            <br />
            <Link
              className="text-white"
              target="_blank"
              href="https://adatechschool.fr/"
            >
              https://adatechschool.fr/
            </Link>
          </p>
        </Card>
        {/* <Spacing size="xs"/> */}

        <Card className="p-4 flex-1">
          <p className="flex justify-center text-4xl mb-5">Mon Cv</p>
          <iframe src="/imgcv.png" className="m-auto"></iframe>
          <Link href="/cv.pdf" target="_blank" passHref download="MonCV" className="text-xl text-white flex justify-center mt-2" >
          {/* <CvIcon size={20} className="inline mr-3 ml-5 "/> */}
         Télécharger mon CV
      </Link>
        </Card>
        {/* <Spacing size="xs"/> */}

        <Card className="p-4 flex-1">
          <p className="flex justify-center text-4xl">Contactez moi</p>
          <ul className="p-5">
            <li className=" text-lg">
              <GmailIcon size={20} className="inline -mt-1" />
              <Link
                className="text-white ml-3"
                target="_blank"
                href="mailto:bastvint@gmail.com?subject=Votre profil m'interesse&body=Bonjour,%0D%0AJe souhaite obtenir plus d'informations à propos de votre profil.%0D%0AMerci."
              >
                bastvint@gmail.com
              </Link>
            </li>
            <li className="mt-4 text-lg md: flex items-center">
              <LinkedinIcon size={20} className="md:inline -mt-1 sm:-mt-3 md:-mt-1 lg: xl:-mt-1   " />
              <Link
                className="text-white ml-3"
                href="https://www.linkedin.com/in/bastien-vintras-50b125270/"
                target="_blank"
              >
                www.linkedin.com/in/bastien-vintras
              </Link>
            </li>
          </ul>
        </Card>
        <Spacing/>
      </div>
      
    </div>
    <div className="flex flex-wrap mb-5">
  <div className="w-1/2 md:w-1/4 p-4">
    <ReactIcon className="animate-spin-slow w-full" size={100} />
  </div>
  <div className="w-1/2 md:w-1/4 p-4">
    <TailwindIcon className="w-full" size={100} />
  </div>
  <div className="w-1/2 md:w-1/4 p-4">
    <JavaScriptIcon className="w-full" size={100} />
  </div>
  <div className="w-1/2 md:w-1/4 p-4">
    <NodeIcon className="w-full" size={100} />
  </div>
</div>
<Spacing/>
<Footer/>

    </Section>
  );
};
