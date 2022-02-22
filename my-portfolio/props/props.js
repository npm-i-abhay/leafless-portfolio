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
        description : 'Buzzy Bee is an organizer cross platform application primarily built with React native & php. The app uses a smart sorting algorithim to provide smart availability',
        route:'/projects/buzz'
    },

    {
        title:'EcoHow',
        link:'/caseStudies/ecoHow/ecoHowHero.png',
        techStack:[
            '/tech/react.png',
            '/tech/javascript.png',
            '/tech/styled.png',
            '/tech/Next.png',
            '/tech/Npm.png',
        ],
        description : 'EcoHow is an interactive web app built using ReactJs that teaches users on proper ways of recycling & composting in an interactive & gamified manner',
        route:'/projects/eco'

    },

    {
        title:'Mix Elixir',
        link:"/caseStudies/mixElix/mixElixir.png", 
        techStack:[
            '/tech/react.png',
            '/tech/Node.png',
            '/tech/mongo.png',
            '/tech/Npm.png',
        ],
        description :'Mix Elixir is a work in progress web app that generates cocktails based on Ingredients inputted by users filters drinks based on user preferences.',
    },

];


// carousel data for desktop work page 
    // dev
    export const devData = [
        {
            thumb:'/caseStudies/buzzy/buzzMock.png', 
            vid:'/videos/buzz/meeting.mp4',
            path:'/projects/buzz'
        },
        {
            thumb:'/caseStudies/ecohow/ecohowHero.png',
            vid:'/videos/eco/ecoGame.mp4',
            path:'/projects/eco'
        },
        {
            thumb:'/caseStudies/mixElix/mixElixir.png',
            vid:'/caseStudies/ecohow/ecohowHero.png',},
    
    ]

    export const designData = [
        {
            thumb:'/design/moog.png',
            vid:'/design/moog.png'
        },
        {
            thumb:'/design/photoshop1.png',
            vid:'/design/photoshop1.png'
        },
        {
            thumb:'/design/landscape.png',
            vid:'/design/landscape.png',},
        {
            thumb:'/design/logos1.png',
            vid:'/design/logos1.png',},
        {
            thumb:'/design/proms1.png',
            vid:'/design/proms1.png'},
        {
            thumb:'design/illustration.png',
            vid:'design/illustration.png'}
    
    ]
export const workDesignCarouselOne=[
'/design/moog.png',
'/design/photoshop1.png',
'/design/landscape.png',
'/design/logos1.png',
'/design/proms1.png',
'/design/illustration.png',
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