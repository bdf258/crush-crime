import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
// import { Form } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

export default function JoinCampaign() {
    return (
        <Card className="w-full max-w-[600px]">
            <CardHeader>
                <CardTitle>Join the campaign</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <Label className="hidden">Email</Label>
                <Input className="bg-background" placeholder="Email" type="email"/>
                <Label className="hidden">First name</Label>
                <Input className="bg-background" placeholder="First name" type="text"/>
                <Label className="hidden">Last name</Label>
                <Input className="bg-background" placeholder="Last name" type="text"/>
                <div className="flex items-center gap-2 mt-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent">Send me updates</Label>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Join</Button>
            </CardFooter>
        </Card>
    )
}
