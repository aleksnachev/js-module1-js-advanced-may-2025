class SpaceAgency {
    constructor (agencyName,mission){
        this.agencyName = agencyName
        this.mission = mission
        this.candidates = []
    }
    acceptApplications(applications){
        let finalNames = []
        for (const application of applications) {
            let [name,education,flightHours] = application.split('-')
            flightHours = Number(flightHours)

            let isItFound = false
                for (let c of this.candidates){
                    if (c.name === name){
                        isItFound = true
                        if (c.flightHours > flightHours){
                            c.flightHours = flightHours
                            return
                        }
                    }
                }
                if (!isItFound){
                    let newCandidate = {
                        name,
                        education,
                        flightHours
                    }
                    this.candidates.push(newCandidate)
                    if (!finalNames.includes(name)){
                        finalNames.push(name)
                    }
                }
        }
        
        return `You successfully added candidates: ${finalNames.join(', ').trim()}.`
    }
    chooseForMission(candidateInfo){
        let [name,minFlightHours] = candidateInfo.split("-")
        minFlightHours = Number(minFlightHours)
        let isItFound = false
        let selected = {}
        for (let c of this.candidates) {
            if (c.name === name){
                isItFound = true
                selected = c
            }
        }
        if (!isItFound){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (selected.flightHours<minFlightHours){
            throw new Error(`${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${minFlightHours} hours.`)
        }

        selected.flightHours = 'selected'
        return `Congratulations, ${name} will participate in the ${this.mission} mission!`
    }
    trainingBonus(name){
        let isItFound = false
        let selected = {}
        for (let c of this.candidates) {
            if (c.name === name){
                isItFound = true
                selected = c
            }
        }
        if (!isItFound){
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (selected.education === 'Pilot'){
            return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $100,000!`
        }else if (selected.education === 'Engineer'){
            return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $120,000!`
        }else {
            return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $80,000!`
        }
    }
    candidatesReport(){
        let message = ''
        if(this.candidates.length === 0){
            throw new Error("Candidate database is empty!")
        }
        message += 'Candidates list:\n'
        this.candidates.sort((a,b) => a.name.localeCompare(b.name))
        for (const el of this.candidates) {
            message += `${el.name}-${el.flightHours}\n`
        }
        return message.trim()
    }
}
let agency = new SpaceAgency("NASA", "Mars Exploration");
console.log(agency.acceptApplications([
  "Neil Armstrong-Pilot-1200",
  "Margaret Hamilton-Engineer-800",
  "Mae Jemison-Biologist-700"
]));
console.log(agency.chooseForMission("Neil Armstrong-1000"));
console.log(agency.trainingBonus("Mae Jemison"));
console.log(agency.candidatesReport());



