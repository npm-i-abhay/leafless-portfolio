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

// HOME PAGE DATA

export const animPaths =[
    '/animation/react.json',
    '/animation/js.json',
    '/animation/node.json',
    '/animation/css3.json',
    '/animation/figma.json',
    '/animation/adobe.json',
    
    ]
    export const techStackOne= 
    [  
    '/tech/react.png',
    '/tech/javascript.png',
    '/tech/php.png',
    '/tech/expo.png',
    '/tech/styled.png',
    '/tech/Next.png',
    '/tech/Node.png',
    '/tech/Npm.png',
    ]
    export const techStackTwo= 
    [  
    '/tech/react.png',
    '/tech/javascript.png',
    '/tech/styled.png',
    '/tech/Next.png',
    '/tech/Node.png',
    '/tech/Npm.png',
    '/tech/story.png',
    ]
    export const techStackThree = [
        '/tech/react.png',
        '/tech/Node.png',
        '/tech/mongo.png',
        '/tech/Npm.png',
    ]

    export const designStack =[
        '/designStack/figma.png',
        '/designStack/illustrator.png',
        '/designStack/indesign.png',
        '/designStack/photoshop.png',
        '/designStack/sketch.png',
        '/designStack/motion.png',
    ]
// ANIMATION VARIANTS
export const mainVariants = {
    hidden:{
    x:2000
    },
    visible:{
    x:0,
    transition:{ 
        type:'spring', 
        duration:1,
        when:"beforeChildren",
        staggerChildren:1
    } 
    
    }
}

export const imgVariants = {
    hidden:{
    y:-1000,
    x:-1500
    },
    visible:{
    y: [0,-300,0,-200,0,-150,0,-100,0,-50,0,-30,0,-20,0,-10,0,-5,0],
    scale:[.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,.2,1,],
    x:0,
    rotate: [0, 0, 270, 270, 0],
    transition:{
        duration:2.5, 
        type:'spring', 
        damping:10

    }
    }
    ,
hover:{
    rotate: [0, 0, 270, 270, 0],
    transition:{duration:1, type:'spring'}
}
}



export const AboutData = {
    homeIntro:`A visionary using front-end development to augment the way communities consume virtual experiences and create innovative and cross-platform solutions for complex and technical problems. 
    I'm a well versed developer with a robust understanding of developing cross-platform full-stack solutions within a team environment with the ability to lead and delegate tasks effectively. 
    I'm also professionally trained in user interface and user experience design that compliments my technical skills during solution design.`,
    homeIntroMob:`I'm a well versed developer with a robust understanding of developing cross-platform full-stack solutions within a team environment with the ability to lead and delegate tasks effectively. 
    I'm also professionally trained in user interface and user experience design that compliments my technical skills during solution design.` ,
    heroImage:'/about/PPortrait.jpeg',
    intro: `My name is Abhay Bakshi (ub-hey). I’m a full stack developer and designer specializing in streamlined interactive development. I have a keen interest in building engaging solutions that helps communities across the globe. I’m a consistent learner and I aspire to augment digital experiences `,
    saImg1:[],
    saText:`Outside of my core academia, I serve as a Vice President External for the BCITSA promoting positive relationship with external stake holders, and all levels of governments. I advocate for student concerns and bring them forward to our country's leaders to bring awareness and encourage actions around them `,
    saText2:`The BCIT Student Association closed 2021 with a very successful lobby week in Ottawa, where we met with MPs, Senators, and government staffers. As the VP External, I presented our policy priorities to elected officials from all parties, accompanied by the SA’s talented Government Relations Strategist Stewart McGillivray.
    The Association’s main goals related to student financial assistance, including eliminating student loans interest. The chief objective of the lobbying was the government’s temporary three-year expansion of Canada Student Grants. `,
    animPathOne:'/animation/lead.json',
    saImg2:["/about/ot4.jpg","/about/ot2.jpg","/about/ot5.jpg","/about/ot1.png","/about/ot6.jpg","/about/ot3.jpg" ],
    musicImg1:'',
    musicIntro:`I have an immense passion for music and I have spent years playing music professionally. I'm formally trained in string instruments and music production. These days, I play music as a hobby and I still get inspired form my musical side. It's a gift and time that I cherish when I'm not coding. `,
    musicImg2:"/about/music2.jpeg",
    mobMusicImg:['/about/music3.jpeg',"/about/music2.jpeg", "/about/music.jpeg", "/about/synth.png"]
}



// mobile work page carousel data
export const WorkCarouselData =
[
    {
        title:'Buzzy Bee',
        link:'/caseStudies/buzzy/buzzMockup.png',
        techStack:[
            '/tech/react.png',
            '/tech/javascript.png',
            '/tech/php.png',
            '/tech/expo.png',
            '/tech/Node.png',

        ],
        description:'Buzzy Bee is a cross platform organizer application primarily built with React native & php. The app uses a smart sorting algorithim to provide smart availability',
        route:'/projects/buzz'
    },

    {
        title:'EcoHow',
        link:'/caseStudies/ecohow/ecoHowHero.png',
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


// Data for designCategory
export const designCatData ={
    designStack :[
        '/designStack/figma.png',
        '/designStack/illustrator.png',
        '/designStack/indesign.png',
        '/designStack/photoshop.png',
        '/designStack/sketch.png',
        '/designStack/motion.png',
    ],
        description :`Digital Design & Development program has equipped with a wide array of skills. I'm professionally trained and experienced in designing meaningful solutions using modern tool and technologies. I have a robust understanding of UI/UX as well as graphic design and I'm fluent in industry standard softwares and program to build aesthetically pleasing and seamless solutions.`,
    }


// carousel data for desktop work page 
    // dev
    export const devData = [
        {
            thumb:'/caseStudies/buzzy/buzzMockup.png', 
            vid:'/videos/buzz/meeting.mp4',
            path:'/projects/buzz'
        },
        {
            thumb:'/caseStudies/ecohow/ecoHowHero.png',
            vid:'/videos/eco/ecoGame.mp4',
            path:'/projects/eco'
        },
        // {
        //     thumb:'/caseStudies/mixElix/mixElixir.png',
        //     vid:'/caseStudies/ecohow/ecohowHero.png',},
    
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
'/design/logos1.png',
'/design/proms1.png',
'/design/illustration.png',
]
export const workDesignCarouselTwo=[
'/design/moog.png',
'/design/photoshop1.png',
'/design/landscape.png',
]
// ==============buzzyBee
export const ProjectData =[
    {
        projectCol:"#0D0D0D",
        projectTitle:'BuzzyBee',
        titleCol:'#94BDD4',
        subHead:'Helping You Find Time To Do What You Love',
        subHeadCol:'#63B0BC',
        description:`Buzzy Bee is a cross platform organizer application primarily built with React native, php & mySQL. The app uses a smart sorting algorithm to provide availability for times when each and all members within a group are available to meet
        `,
        description2:`The user can:
        create groups and the app will compare members’ schedules and provide the user with times when everyone is available. Create tasks ( Personal, Academic, Group) and add them to the built-in calendar. Message your group members within an application that's your One-Stop-Shop-Solution For Your Productivity needs `,
        descriptionCol:"#94BDD4",
        mockSource:'/caseStudies/buzzy/buzzMockup.png',
        heroVideo:'/videos/buzz/task.mp4',
        solVideo1:'/videos/buzz/task.mp4',
        solVideo2:'/videos/buzz/meeting.mp4',
        solVideo3:'/videos/buzz/chat.mp4',
        devVideo:'/videos/buzz/buzzDevProcess.mp4',
        processImage:'/caseStudies/buzzy/buzzyProcess.png',
        researchImage:'/caseStudies/buzzy/buzzUserResearch.png',
        persona1:'/caseStudies/buzzy/buzzyPerson1.png',
        persona2:'/caseStudies/buzzy/buzzyPerson2.png',
        problemIdentification:`From our research, it was clear that in this day and age, we're trying to get more done by doing less. We spend a lot of time sorting the logistics for any particular task and more often than not, a lot of time is lost in that transition. This resulted in overwhelm, burnout and reduced productivity. There had to be a better way. `,
        problemImage:'/caseStudies/buzzy/groupChat.png',
        solutionDesign:`After Extensive research on the need analysis, our team critically drafted scenarios using task models and steps our target audience would go through while exploring our solutions. We built several mind maps & prototypes from Lo Fidelity to Hi-Fidelity based off of our data gathered in research. We then tested our prototypes using a rule based written scripts and gathered essential data. Finally we made changes to our prototype based on the feedback and results from our user testing. `,
        solutionProcess1:'/caseStudies/buzzy/buzzyModOne.png',
        solutionProcess2:'/caseStudies/buzzy/buzzyModTwo.png',
        devProcess:'We divided the application into components and pages. We dissected each component into extensive detail and laid down all the potential "props", "handler functions", "States" etc. Consecutively, we built several mind maps for each and every possible flow/user journey in our application considering functionality and how the user would progress after each step.',
        devProcess2:'Before even touching the code, our team made sure the aforementioned processes were robust. As a lead developer, I discussed guidelines, naming conventions, commit messages, and other rules to encourage optimized development within our development team. Everyday we would hit a wall that seemed impossible to get over in the moment. We ran into issues such as differences in opinion, preferences; however, good leadership, unity, and a focus on common goal within our team helped us achieve breakthroughs and go beyond what seemed unreachable.',
        devProArray:[
            '/caseStudies/buzzy/buzzPro1.png',
            '/caseStudies/buzzy/buzzPro2.png',
            '/caseStudies/buzzy/buzzPro3.png',
            '/caseStudies/buzzy/buzzPro4.png',
        ],
        gif1:'/caseStudies/ecohow/ecoDev1.png',
        gif2:'/caseStudies/ecohow/ecoDev2.png',
        test:['/caseStudies/buzzy/buzzTest.png']
        
    }
]
export const ProjectData2 =[
    {   
        projectCol:"",
        projectTitle:<ProjectHero width='50vw' src="/caseStudies/ecohow/logo.png"/>,
        titleCol:'',
        subHead:'One Step Closer to Sustainability',
        subHeadCol:'#63B0BC',
        description:`EcoHow is a intuitive web application education users on proper ways of recycling and composting`,
        mockSource:'/caseStudies/ecohow/ecoHowHero.png',
        heroVideo:'/videos/eco/ecoHero.mp4',
        solVideo1:'/videos/eco/ecoSubcat.mp4',
        solVideo2:'/videos/eco/ecoQuiz.mp4',
        solVideo3:'/videos/eco/ecoPark.mp4',
        devVideo:'',
        descriptionCol:"#A5C955",
        processImage:'/caseStudies/ecohow/ecoProcess.png',
        researchImage:'/caseStudies/ecohow/ecoUserResearch.png',
        persona1:'/caseStudies/ecohow/ecoPerson1.png',
        persona2:'/caseStudies/ecohow/ecoPerson2.png',
        problemIdentification:'Learning is challending',
        problemImage:'/caseStudies/ecohow/ecoPro.png',
        solutionDesign:`Our team critically researched the learning curve for our target demographic and identified what enhances the learning experience. We designed an intuitive application where the user goes through a journey where they get a chance to learn and reflect on their habits. Finally to incentivize and enhance the value of our application, we added a sorting game that asked the users to sort the waste in the correct bins. This encouraged engagement and enhanced the learning experience. `,
        solutionProcess1:'/caseStudies/ecohow/ecoMod1.png',
        solutionProcess2:'/caseStudies/ecohow/ecoHifi.png',
        devProcess:'We started off by identifying the Most Valuable components and functions and delegated work to each team members based on their strengths and challenges they wanted to take on. At every milestone, we tested our code through every possible scenario and made sure the functions work seamlessly. Every time our team would encounter a challenge, we took it as an opportunity to learn and persevered to eventually solve it. By the end we had built a robust web app that encourages engagement and enhances the overall learning experience in order to help communities live a sustainable life.',
        devProArray:[
            '/caseStudies/ecohow/ecoPro1.png',
            '/caseStudies/ecohow/ecoPro2.png',
            '/caseStudies/ecohow/ecoPro3.png',
            '/caseStudies/ecohow/ecoPro4.png',
        ],
        gif1:'',
        gif2:'',
        test:['/caseStudies/ecohow/ecoTest1.png','/caseStudies/ecohow/ecoTest2.png']
    }
]

export const mixElixir={
    techStack:[
    '/tech/react.png',
    '/tech/Node.png',
    '/tech/mongo.png',
    '/tech/Npm.png',
],
    description:'Mix Elixir is a work in progress web app that generates cocktails based on Ingredients inputted by users filters drinks based on user preferences'
}

