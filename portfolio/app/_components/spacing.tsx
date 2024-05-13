import { cn } from "@/lib/utils";

export type SpacingProps = {
    size?: "xs" | "sm" | "md" | "lg" ;

}

export const Spacing = ( {size = "md"}: SpacingProps) => {
  return (
    <div className={cn({
        "h-4 lg:h-6" : size=== "xs",
        "h-8 lg:h-16": size === "sm",
        "h16 lg:h-24": size === "md",
        "h24 lg:h-32": size === "lg"
    })}/>
 );
};
