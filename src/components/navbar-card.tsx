import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

let props = {
    title : "Stop prolific offenders from committing more crimes",
    description : "10% of criminals commit half of all crime. We need to tackle this properly, by insisting on prison sentences for people with more than 50 previous offences.",
    button : "Stop career criminals"
}

export default function NavbarCard({props}: {props: any}) {
return (
<Card className=" xl:w-[40vw] w-[80vw] flex flex-col border-none h-fit justify-between">
  <CardHeader className="flex flex-col md:flex-row w-full !gap-4 md:justify-between gap-12 items-center">
    <CardTitle className="text-left">{props.title}</CardTitle>
    <CardAction>
    <Button>{props.button}</Button>
    </CardAction>
  </CardHeader>
  <CardDescription className="text-left w-full text-white px-6 text-sm">{props.description}</CardDescription>
</Card> 
)}