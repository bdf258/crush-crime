import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  import NavbarCard from "./navbar-card"
  import { Button } from "@/components/ui/button"

export default function Navbar() {
    let careerCriminals = {
        title : "Stop prolific offenders from committing more crimes",
        description : "10% of criminals commit half of all crime. We need to tackle this properly, by insisting on prison sentences for people with more than 50 previous offences.",
        button : "Stop career criminals"
    }
    let courtCaseloads = {
        title : "End the court backlogs which currently prevent justice",
        description : "The average court case takes 2 years to resolve. We must ensure justice is swift by increasing the capacity of courts, improving legal aid, and ensuring there are enough prison places.",
        button : "End court backlogs"
    }
    let groomingGangs = {
        title : "Bring the grooming gangs, and their enablers, to justice",
        description : "Thousands of children, in dozens of British cities, have been abused by organised gangs spanning decades. We must demand a high-powered, transparent, and time-limited inquiry into the grooming gangs.",
        button : "Demand an inquiry"
    }

let showNav = window.innerWidth > 600;

    return (
        <NavigationMenu className="flex relative flex-row w-full justify-between items-center">
  <h1 className="font-bold text-left">Crush Crime</h1>
  <div className="flex gap-2">
    {showNav ? (
      <NavigationMenuList className="flex justify-center items-center">
      <NavigationMenuItem>
        <NavigationMenuTrigger>Career criminals</NavigationMenuTrigger>
        <NavigationMenuContent className="border-none bg-card-background">
          <NavbarCard props={careerCriminals}/>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Court Caseloads</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card-background">
          <NavbarCard props={courtCaseloads}/>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Grooming Gangs</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-card-background">
          <NavbarCard props={groomingGangs}/>
        </NavigationMenuContent>
      </NavigationMenuItem>
  
    </NavigationMenuList>
    ) : (
        <NavigationMenuItem>
        <NavigationMenuTrigger className="!pl-0">Campaigns</NavigationMenuTrigger>
        <NavigationMenuContent className="border-none flex flex-col gap-2 bg-white !border-none !shadow-none">
          <NavbarCard props={careerCriminals}/>
          <NavbarCard props={courtCaseloads}/>
          <NavbarCard props={groomingGangs}/>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )}
  
  </div>
  <Button>Sign up</Button>
</NavigationMenu>
    )
}
