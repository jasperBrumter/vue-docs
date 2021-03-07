export interface Resource {
  title: string;
  url: string;
  id: string;
}

export interface Class {
  title: string;
  image: string;
  vue3: boolean;
  vue2: boolean;
  difficulty: string;
  externalLinks: string[];
  resources: Resource[];
}

export const todo = [
  'Touring Vue Router',
  'Unit Testing Vue 3',
  'Intro to State Management',
  'Real World Testing',
  'Real World Vue 3',
  'From Vue 2 to Vue 3',
  'Vue 3 Deep Dive with Evan You',
  'Vue 3 Forms',
  'Build a Gmail Clone with Vue 3',
  'Component Design Patterns',
  'Vue 3 Reactivity ----- lesson 3,4,5,6',
  'Mastering Vuex',
  'Scaling Vue with Nuxt.js',
  'Next Level Vue ----- Lesson Filters',
  'Animating Vue ----- Group Transitions',
  'Token-Based Authentication ---- Automatic Login',
];

export const data: Class[] = [
  {
    title: 'Next Level Vue',
    image: '1569439902643_4.png',
    difficulty: 'Beginner',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '299718108',
        title: 'Next-Level Vue: Orientation',
        url: 'https://player.vimeo.com/video/299718108?autoplay=1&app_id=122963',
      },
      {
        id: '297619886',
        title: 'Progress Bar Axios Interceptors',
        url: 'https://player.vimeo.com/video/297619886?autoplay=1&app_id=122963',
      },
      {
        id: '298208305',
        title: 'In-Component Route Guards',
        url: 'https://player.vimeo.com/video/298208305?autoplay=1&app_id=122963',
      },
      {
        id: '299962821',
        title: 'Global and Per-Route Guards',
        url: 'https://player.vimeo.com/video/299962821?autoplay=1&app_id=122963',
      },
      {
        id: '300838968',
        title: 'Completing our Progress Bar',
        url: 'https://player.vimeo.com/video/300838968?autoplay=1&app_id=122963',
      },
      {
        id: '302513491',
        title: 'Error Handling',
        url: 'https://player.vimeo.com/video/302513491?autoplay=1&app_id=122963',
      },
      {
        id: '304941787',
        title: 'Reusable Form Components: BaseInput',
        url: 'https://player.vimeo.com/video/304941787?autoplay=1&app_id=122963',
      },
      {
        id: '306582689',
        title: 'Reusable Form Components: BaseSelect',
        url: 'https://player.vimeo.com/video/306582689?autoplay=1&app_id=122963',
      },
      {
        id: '307592723',
        title: 'Reusable Form Components: BaseButton',
        url: 'https://player.vimeo.com/video/307592723?autoplay=1&app_id=122963',
      },
      {
        id: '308504709',
        title: 'Form Validation with Vue Validate Pt 1',
        url: 'https://player.vimeo.com/video/308504709?autoplay=1&app_id=122963',
      },
      {
        id: '311076056',
        title: 'Form Validation with Vue Validate Pt 2',
        url: 'https://player.vimeo.com/video/311076056?autoplay=1&app_id=122963',
      },
      {
        id: '312320460',
        title: 'Mixins',
        url: 'https://player.vimeo.com/video/312320460?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Animating Vue',
    image: '1570027224019_10.png',
    difficulty: 'Intermediate',
    vue3: true,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '351308397',
        title: 'Why animate',
        url: 'https://player.vimeo.com/video/351308397?autoplay=1&app_id=122963',
      },
      {
        id: '353909159',
        title: 'Transitions',
        url: 'https://player.vimeo.com/video/353909159',
      },
      {
        id: '358710484',
        title: 'Page Transitions',
        url: 'https://player.vimeo.com/video/358710484?autoplay=1&app_id=122963',
      },
      {
        id: '361550074',
        title: 'JS Hooks + Velocity',
        url: 'https://player.vimeo.com/video/361550074?autoplay=1&app_id=122963',
      },
      {
        id: '372000380',
        title: 'Intro to GSAP 3',
        url: 'https://player.vimeo.com/video/372000380?autoplay=1&app_id=122963',
      },
      {
        id: '375052563',
        title: 'State with GSAP',
        url: 'https://player.vimeo.com/video/375052563?autoplay=1&app_id=122963',
      },
      {
        id: '379804181',
        title: 'Timelines with GSAP',
        url: 'https://player.vimeo.com/video/379804181?autoplay=1&app_id=122963',
      },
      {
        id: '380155578',
        title: 'Nested Timelines',
        url: 'https://player.vimeo.com/video/380155578?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Unit Testing Vue 2',
    image: 'unittesting.png',
    difficulty: 'Intermediate',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '385713441',
        title: 'What to test',
        url: 'https://player.vimeo.com/video/385713441?autoplay=1&app_id=122963',
      },
      {
        id: '387189765',
        title: 'Writing a Unit test with Jest',
        url: 'https://player.vimeo.com/video/387189765?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Beautify with Vuetify',
    image: '1569440014103_7.png',
    difficulty: 'Intermediate',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '391719920',
        title: 'Getting Started',
        url: 'https://player.vimeo.com/video/391719920?autoplay=1&app_id=122963',
      },
      {
        id: '346032810',
        title: 'Components Part 1',
        url: 'https://player.vimeo.com/video/346032810?autoplay=1&app_id=122963',
      },
      {
        id: '350501837',
        title: 'Components Part 2',
        url: 'https://player.vimeo.com/video/350501837?autoplay=1&app_id=122963',
      },
      {
        id: '353308521',
        title: 'Layouts Grid System',
        url: 'https://player.vimeo.com/video/353308521?autoplay=1&app_id=122963',
      },
      {
        id: '357089986',
        title: 'Layouts Responsive Design',
        url: 'https://player.vimeo.com/video/357089986?autoplay=1&app_id=122963',
      },
      {
        id: '359661975',
        title: 'Forms: Fundamentals',
        url: 'https://player.vimeo.com/video/359661975?autoplay=1&app_id=122963',
      },
      {
        id: '362841967',
        title: 'Forms Validations',
        url: 'https://player.vimeo.com/video/362841967?autoplay=1&app_id=122963',
      },
      {
        id: '368669029',
        title: 'Directives',
        url: 'https://player.vimeo.com/video/368669029?autoplay=1&app_id=122963',
      },
      {
        id: '378430249',
        title: 'Themes',
        url: 'https://player.vimeo.com/video/378430249?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Token-Based Authentication',
    image: '1569439942942_8.png',
    difficulty: 'Intermediate',
    externalLinks: [],
    vue3: false,
    vue2: true,
    resources: [
      {
        id: '322541550',
        title: 'Intro to JWT',
        url: 'https://player.vimeo.com/video/322541550?autoplay=1&app_id=122963',
      },
      {
        id: '327559707',
        title: 'Project Structure',
        url: 'https://player.vimeo.com/video/327559707?autoplay=1&app_id=122963',
      },
      {
        id: '328952884',
        title: 'User Registration',
        url: 'https://player.vimeo.com/video/328952884?autoplay=1&app_id=122963',
      },
      {
        id: '331308258',
        title: 'User Login',
        url: 'https://player.vimeo.com/video/331308258?autoplay=1&app_id=122963',
      },
      {
        id: '336662859',
        title: 'User Logout',
        url: 'https://player.vimeo.com/video/336662859?autoplay=1&app_id=122963',
      },
      {
        id: '340259889',
        title: 'Handling Errors',
        url: 'https://player.vimeo.com/video/340259889?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Trello Clone',
    image: '1569439972753_6.png',
    difficulty: 'Intermediate',
    externalLinks: [],
    vue3: false,
    vue2: true,
    resources: [
      {
        id: '394498766',
        title: 'Tour of the App',
        url: 'https://player.vimeo.com/video/394498766?autoplay=1&app_id=122963',
      },
      {
        id: '327844370',
        title: 'Building our Board',
        url: 'https://player.vimeo.com/video/327844370?autoplay=1&app_id=122963',
      },
      {
        id: '329214344',
        title: 'Opening tasks in a modal',
        url: 'https://player.vimeo.com/video/329214344?autoplay=1&app_id=122963',
      },
      {
        id: '331459804',
        title: 'Adding and editing tasks',
        url: 'https://player.vimeo.com/video/331459804?autoplay=1&app_id=122963',
      },
      {
        id: '332476395',
        title: 'Drag & Dropping Tasks',
        url: 'https://player.vimeo.com/video/332476395?autoplay=1&app_id=122963',
      },
      {
        id: '332695521',
        title: 'Dragging columns',
        url: 'https://player.vimeo.com/video/332695521?autoplay=1&app_id=122963',
      },
      {
        id: '334001031',
        title: 'Adding New Columns',
        url: 'https://player.vimeo.com/video/334001031?autoplay=1&app_id=122963',
      },
      {
        id: '335300449',
        title: 'Extracting Components',
        url: 'https://player.vimeo.com/video/335300449?autoplay=1&app_id=122963',
      },
      {
        id: '335301632',
        title: 'Creating a mixin',
        url: 'https://player.vimeo.com/video/335301632?autoplay=1&app_id=122963',
      },
      {
        id: '336403919',
        title: 'Extracting Drag & Drop',
        url: 'https://player.vimeo.com/video/336403919?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Intro to Vue 3',
    image: 'intro_vue_3.png',
    difficulty: 'Beginner',
    externalLinks: ['https://github.com/Code-Pop/Intro-to-Vue-3'],
    vue3: true,
    vue2: false,
    resources: [
      {
        id: '429439600',
        title: 'Intro to Vue 3',
        url: 'https://player.vimeo.com/video/429439600',
      },
      {
        id: '430513164',
        title: 'Creating the Vue App',
        url: 'https://player.vimeo.com/video/430513164',
      },
      {
        id: '432257268',
        title: 'Attribute Binding',
        url: 'https://player.vimeo.com/video/432257268',
      },
      {
        id: '430892048',
        title: 'Conditional Rendering',
        url: 'https://player.vimeo.com/video/430892048',
      },
      {
        id: '436245555',
        title: 'List Rendering',
        url: 'https://player.vimeo.com/video/436245555',
      },
      {
        id: '436573740',
        title: 'Event Handling',
        url: 'https://player.vimeo.com/video/436573740',
      },
      {
        id: '437484985',
        title: 'Class & Style Binding',
        url: 'https://player.vimeo.com/video/437484985',
      },
      {
        id: '440157813',
        title: 'Computed Properties',
        url: 'https://player.vimeo.com/video/440157813',
      },
      {
        id: '440514041',
        title: 'Components & Props',
        url: 'https://player.vimeo.com/video/440514041',
      },
      {
        id: '441165140',
        title: 'Communicating Events',
        url: 'https://player.vimeo.com/video/441165140',
      },
      {
        id: '442485891',
        title: 'Forms & V-Model',
        url: 'https://player.vimeo.com/video/442485891',
      },
    ],
  },
  {
    title: 'Vue 3 Composition API',
    image: '1569440526519_11.png',
    difficulty: 'Advanced',
    externalLinks: [],
    vue3: true,
    vue2: false,
    resources: [
      {
        id: '336411746',
        title: 'Why the composition API',
        url: 'https://player.vimeo.com/video/336411746?autoplay=1&app_id=122963',
      },
      {
        id: '364111799',
        title: 'Setup & Reactive References',
        url: 'https://player.vimeo.com/video/364111799?autoplay=1&app_id=122963',
      },
      {
        id: '364140610',
        title: 'Methods',
        url: 'https://player.vimeo.com/video/364140610?autoplay=1&app_id=122963',
      },
      {
        id: '365085315',
        title: 'Computed Properties',
        url: 'https://player.vimeo.com/video/365085315?autoplay=1&app_id=122963',
      },
      {
        id: '365099441',
        title: 'The Reactive Syntax',
        url: 'https://player.vimeo.com/video/365099441?autoplay=1&app_id=122963',
      },
      {
        id: '365160899',
        title: 'Modularizing',
        url: 'https://player.vimeo.com/video/365160899?autoplay=1&app_id=122963',
      },
      {
        id: '365352006',
        title: 'Lifecycle Hooks',
        url: 'https://player.vimeo.com/video/365352006?autoplay=1&app_id=122963',
      },
      {
        id: '372753110',
        title: 'Watch',
        url: 'https://player.vimeo.com/video/372753110?autoplay=1&app_id=122963',
      },
      {
        id: '372755942',
        title: 'Sharing State',
        url: 'https://player.vimeo.com/video/372755942?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Vue 3 Reactivity',
    image: 'vue_3_reactivity.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '388752844',
        title: 'Intro - Building Reactivity',
        url: 'https://player.vimeo.com/video/388752844?autoplay=1&app_id=122963',
      },
      {
        id: '388759486',
        title: 'Proxy & Reflect',
        url: 'https://player.vimeo.com/video/388759486?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Advanced Components',
    image: '1569439707864_5.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '392347730',
        title: 'Intro',
        url: 'https://player.vimeo.com/video/392347730?autoplay=1&app_id=122963',
      },
      {
        id: '263589430',
        title: 'Build a Reactivity System',
        url: 'https://player.vimeo.com/video/263589430?autoplay=1&app_id=122963',
      },
      {
        id: '264113772',
        title: 'Evan You on Proxies',
        url: 'https://player.vimeo.com/video/264113772?autoplay=1&app_id=122963',
      },
      {
        id: '276288371',
        title: 'Reactivity in VueJS',
        url: 'https://player.vimeo.com/video/276288371?autoplay=1&app_id=122963',
      },
      {
        id: '264184004',
        title: 'Evan You on Vue Core',
        url: 'https://player.vimeo.com/video/264184004?autoplay=1&app_id=122963',
      },
      {
        id: '276302877',
        title: 'Template Compilation',
        url: 'https://player.vimeo.com/video/276302877?autoplay=1&app_id=122963',
      },
      {
        id: '265079382',
        title: 'Evan You on the Virtual DOM',
        url: 'https://player.vimeo.com/video/265079382?autoplay=1&app_id=122963',
      },
      {
        id: '277359426',
        title: 'Functional Components',
        url: 'https://player.vimeo.com/video/277359426?autoplay=1&app_id=122963',
      },
      {
        id: '265359995',
        title: 'Evan You on Functional Components',
        url: 'https://player.vimeo.com/video/265359995?autoplay=1&app_id=122963',
      },
      {
        id: '277362944',
        title: 'The mounting process',
        url: 'https://player.vimeo.com/video/277362944?autoplay=1&app_id=122963',
      },
      {
        id: '266460791',
        title: 'Evan You on the Mounting Process',
        url: 'https://player.vimeo.com/video/266460791?autoplay=1&app_id=122963',
      },
      {
        id: '277714650',
        title: 'Scoped Slots & Render Props',
        url: 'https://player.vimeo.com/video/277714650?autoplay=1&app_id=122963',
      },
    ],
  },
  {
    title: 'Vue 3 + TypeScript',
    image: 'typescript.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: ['https://github.com/Code-Pop/Real-World-Vue-3-TypeScript'],
    resources: [
      {
        id: '467481375',
        title: 'Why Vue & TypeScript',
        url: 'https://player.vimeo.com/video/467481375',
      },
      {
        id: '473662632',
        title: 'Setting Up Vue 3 & TypeScript',
        url: 'https://player.vimeo.com/video/473662632',
      },
      {
        id: '473998588',
        title: 'Creating Components with TypeScript',
        url: 'https://player.vimeo.com/video/473998588',
      },
      {
        id: '486226307',
        title: 'Type Fundamentals',
        url: 'https://player.vimeo.com/video/486226307',
      },
      {
        id: '492858617',
        title: 'Defining Custom Types',
        url: 'https://player.vimeo.com/video/492858617',
      },
      {
        id: '501230219',
        title: 'Data with Custom Types',
        url: 'https://player.vimeo.com/video/501230219',
      },
      {
        id: '505794251',
        title: 'Props with Types',
        url: 'https://player.vimeo.com/video/505794251',
      },
      {
        id: '510916818',
        title: 'Computed & Methods with Custom Types',
        url: 'https://player.vimeo.com/video/510916818',
      },
    ],
  },
];
