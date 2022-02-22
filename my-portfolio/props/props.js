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



// mobile work page carousel data
export const WorkCarouselData =
[
    {
        title:'Buzzy Bee',
        link:'/caseStudies/buzzy/buzzMock.png',
        techStack:[
            '/tech/react.png',
            '/tech/javascript.png',
            '/tech/php.png',
            '/tech/expo.png',
            '/tech/Node.png',

        ],
        description : 'this is a project card for mobile size ',
    },

    {
        title:'EcoHow',
        link:'/caseStudies/ecoHow/ecohowHero.png',
        techStack:[
            '/tech/react.png',
            '/tech/javascript.png',
            '/tech/styled.png',
            '/tech/Next.png',
            '/tech/Node.png',
            '/tech/Npm.png',
        ],
        description : 'this is a project card for mobile size ',
    },

    {
        title:'Buzzy Bee',
        link:"https://placekitten.com/500/500", 
        techStack:[
        "https://placekitten.com/500/500",
        "https://placekitten.com/500/500",
        "https://placekitten.com/500/500",
        ],
        description : 'this is a project card for mobile size ',
    },

];


// carousel data for desktop work page 
    // dev
    export const devData = [
        {
            thumb:'/caseStudies/buzzy/buzzMock.png', 
            vid:'/caseStudies/ecohow/ecoDev1.png',
            path:'/projects/buzz'
        },
        {
            thumb:'/caseStudies/ecohow/ecohowHero.png',
            vid:'/caseStudies/buzzy/buzzMock.png',
            path:'/projects/eco'
        },
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
    
    ]

    export const designData = [
        {
            thumb:'/caseStudies/buzzy/buzzMock.png', 
            vid:'/caseStudies/ecohow/ecohowDev1.png'
        },
        {
            thumb:'/caseStudies/ecohow/ecohowHero.png',
            vid:'/caseStudies/buzzy/buzzMock.png'
        },
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
    
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
        gif1:'/caseStudies/ecohow/ecoDev1.png',
        gif2:'/caseStudies/ecohow/ecoDev2.png'

        
    }
]
export const ProjectData2 =[
    {   
        projectCol:"",
        projectTitle:<ProjectHero src="/caseStudies/ecohow/logo.png"/>,
        titleCol:'',
        subHead:'One Step Closer to Sustainability',
        subHeadCol:'#63B0BC',
        description:`EcoHow is a intuitive web applicaton education users on proper ways of recycyling and composting`,
        mockSource:'/caseStudies/ecohow/ecoHero.png',
        descriptionCol:"#A5C955",
        processImage:'/caseStudies/ecohow/ecoProcess.png',
        researchImage:'/caseStudies/buzzy/buzzyUserResearch.png',
        persona1:'/caseStudies/ecohow/ecoPerson1.png',
        persona2:'/caseStudies/ecohow/ecoPerson2.png',
        solutionDesign:`Buzzy Bee is a native organizer application that fetches data from the school’s portal (mocked) and automatically adds the student’s course schedule to the built in calendar. The user can: create groups and the app will compare members’ schedules and provide the user with times when everyone is available.create tasks ( Personal, Academic, Group) and add them to the built-in calendar.`,
        solutionProcess1:'/caseStudies/ecohow/ecoLofi.png',
        solutionProcess2:'/caseStudies/ecohow/ecoHifi.png',
        gif1:'/caseStudies/ecohow/ecoDev1.png',
        gif2:'/caseStudies/ecohow/ecoDev2.png'

    }
]