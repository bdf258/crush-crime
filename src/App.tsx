import './App.css'
import '@fontsource/dm-sans';
import Navbar from './components/navbar';
import TopCard from './components/top-card';
import Footer from './components/footer';

function App() {
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
    description : "Thousands of children, in dozens of British cities, have been abused by organised gangs spanning decades. We must demand a high-powered, transparent, and time-limited inquiry.",
    button : "Demand an inquiry"
}

  return (
    <>
      <Navbar />
      <div id="hero" className="w-full h-[80vh] flex justify-center items-center">
        <div className="flex w-full flex-col justify-center gap-4 h-full">
          <h1 className="text-6xl font-semibold text-left mb-8">The criminal justice system is broken.</h1>
          <h1 className="text-6xl font-normal text-left">Unlike other British problems,</h1>
          <h1 className="text-6xl font-normal text-left text-primary mb-8">crime is not complicated.</h1>
          <p className="text-left text-2xl max-w-[50vw]">Crush crime exists to pressure policymakers into adopting solutions they know work.</p>
        </div>
      </div>
      <div id="campaigns" className="w-full flex justify-center items-center">
        <div className="flex md:flex-row flex-col w-full justify-between max-w-[90vw]">
          <TopCard props={careerCriminals}/>
          <TopCard props={courtCaseloads}/>
          <TopCard props={groomingGangs}/>
        </div>
      </div>
      <div id="about" className="w-full flex justify-center items-center flex-col mt-24 gap-8">
        <h1 className="text-4xl font-bold">Our actions so far</h1>
        <p className="text-left text-md px-4 md:max-w-[80vw] 2xl:max-w-[40vw]">Britain is terrorised by a tiny number of career criminals. Just 10% of offenders are responsible for at least HALF of all crime in Britain. These career criminals are guilty of dozens or even hundreds of offences but our courts are routinely giving them short sentences - or letting them avoid prison altogether. This has to END. If the government focuses on taking career criminals off our streets and into prison, we can crush crime rates by up to 90%.
        <br />
        <br />
        Since CRUSH CRIME began in late November of 2024 we've had several big wins:
        <br />
        <br />
        Speaking in Parliament, the Shadow Justice Secretary urged MPs to combat the rising epidemic of phone thefts in London by locking up career criminals
        The Shadow Justice Secretary has adopted Crush Crime’s position on court opening days to crush the backlog.
        Following the media publication of Crush Crime’s research into the court backlogs and the Court Spotlight UK website, the Government suddenly increased sitting days by 2000 for the year.
        Built a coalition of Labour and Reform members to carry forward a bill mandating a national inquiry to grooming gangs.
        An array of viral pieces on bike theft, gangs, and career criminals.
        </p>
        <div className="w-full md:max-w-[80vw] 2xl:max-w-[40vw]">
            <iframe width="100%" height="338" src="https://www.youtube.com/embed/6zM6bnSaz3o" title="Theft is legal in Britain" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <div id="join" className="w-full flex mt-24 gap-8">
        <Footer />
      </div>
    </>
  )
}

export default App
