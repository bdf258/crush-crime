import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
