import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

let props = {
    title : "Stop prolific offenders from committing more crimes",
    description : "10% of criminals commit half of all crime. We need to tackle this properly, by insisting on prison sentences for people with more than 50 previous offences.",
    button : "Stop career criminals"
}

export default function TopCard({props}: {props: any}) {
    return (
<Card className="!mb-0 !pb-0 h-[320px] justify-between w-[32%]">
  <CardHeader>
    <CardTitle className="text-left text-xl">{props.title}</CardTitle>
  </CardHeader>
  <CardContent>
  <CardDescription className="text-left text-md text-[#eee]">{props.description}</CardDescription>
  </CardContent>
  <CardAction className="bg-primary w-full h-12 flex mb-0 items-center justify-center font-sembold">{props.button}</CardAction>
</Card>
    )
}
