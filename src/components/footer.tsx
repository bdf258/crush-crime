import JoinCampaign from "./join-campaign";

export default function Footer() {
    return (
        <footer className="!w-[100vw] flex justify-between items-center flex-col md:flex-row md:px-24 px-4">
            <div className="flex flex-col gap-2 justify-left">
                <h1 className="text-2xl font-semibold text-left">Crush Crime</h1>
                <p className="text-left">Contact us at hello@crushcrime.org</p>
                <p className="text-left">© 2025 Crush Crime</p>
            </div>
            <JoinCampaign/>
        </footer>
    )
}
