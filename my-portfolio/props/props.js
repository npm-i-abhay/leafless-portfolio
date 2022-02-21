import { ProjectHero } from "@/components/ProjectHero"
import { comp_theme } from "@/utils/variables"
import { useTheme } from "@/utils/provider"



export const data = [
    {title:'JavaScript', width:"100%"},
    {title:'React', width:"80%"},
    {title:'ReactNative', width:"75%"},
    {title:'HTML', width:"100%"},
    {title:'CSS', width:"100%"},
]

// export const info={
//     buzzyBee:`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar.
//     The user can:
//     create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar. `
// }

export const buzzDesign =[
"/caseStudies/buzzy/buzzLow.png",
"/caseStudies/buzzy/buzzHigh1.png",
"/caseStudies/buzzy/buzzHigh2.png",
]


// ==============buzzyBee
export const ProjectData =[
    {
        projectCol:"#0D0D0D",
        projectTitle:'BuzzyBee',
        titleCol:'#94BDD4',
        subHead:'Helping You Find Time To Do What You Love',
        subHeadCol:'#63B0BC',
        description:`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar.
        The user can:
        create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar. `,
        descriptionCol:"#94BDD4",
        mockSource:'/caseStudies/buzzy/buzzMock.png',
        processImage:'/caseStudies/buzzy/buzzyProcess.png',
        researchImage:'/caseStudies/buzzy/buzzyUserResearch.png',
        persona1:'/caseStudies/buzzy/buzzyPerson1.png',
        persona2:'/caseStudies/buzzy/buzzyPerson2.png',
        solutionDesign:`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar. The user can: create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar.`,
        solutionProcess1:'/caseStudies/buzzy/buzzyModOne.png',
        solutionProcess2:'/caseStudies/buzzy/buzzyModTwo.png',
        
    }
]
export const ProjectData2 =[
    {   
        projectCol:"#2C4B40",
        projectTitle:<ProjectHero src="/caseStudies/ecohow/logo.svg"/>,
        titleCol:'',
        subHead:'One Step Closer to Sustainability',
        subHeadCol:'#63B0BC',
        description:`EcoHow is a intuitive web applicaton education users on proper ways of recycyling and composting`,
        mockSource:'',
        descriptionCol:"#A5C955",
        processImage:'/caseStudies/ecohow/ecoProcess.png',
        researchImage:'/caseStudies/buzzy/buzzyUserResearch.png',
        persona1:'/caseStudies/ecohow/ecoPerson1.png',
        persona2:'/caseStudies/ecohow/ecoPerson2.png',
        solutionDesign:`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar. The user can: create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar.`,
        solutionProcess1:'/caseStudies/ecohow/ecoLofi.png',
        solutionProcess2:'/caseStudies/ecohow/ecoHifi.png'

    }
]