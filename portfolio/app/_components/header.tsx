import { buttonVariants } from "@/components/ui/button"
import { Section } from "./section"
import { GithubIcon } from "./icons/githubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { GmailIcon } from "./icons/gmailIcon"
import { LinkedinIcon } from "./icons/linkedinIcon"

export const Header = () => {
    return(
<header className=" py-4">
        <Section className="flex items-baseline">
            <h1 className="text-lg font-bold text-primary">
                bastvint.com
            </h1>
            <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link
                    href="https://github.com/BastienVintras"
                    target="_blank"
                     className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                        <GithubIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link
                    href="mailto:bastvint@gmail.com?subject=Votre profil m'interesse&body=Bonjour,%0D%0AJe souhaite obtenir plus d'informations à propos de votre profil.%0D%0AMerci."                  
                    className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                        <GmailIcon size={16} className="text-foreground"/>
                    </Link>
                    <Link
                    href="https://www.linkedin.com/in/bastien-vintras-50b125270/"
                    target="_blank"
                     className={cn(buttonVariants({variant:"outline"}),"size-6 p-0")}>
                        <LinkedinIcon size={16} className="text-foreground"/>
                    </Link>
                </ul>
            
        </Section>
</header>
    )
}