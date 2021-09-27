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
  'Touring Vue Router TBD -- 10 Global guards, 11 lazy loading routes',
  'Intro to State Management',
  'Vuex fundamentals TBD',
  'Real World Testing TBD',
];

export const data: Class[] = [
  {
    title: 'Intro to Vite',
    image: 'vite.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '570298143',
        title: 'Intro to Vite',
        url: 'https://player.vimeo.com/video/570298143',
      },
      {
        id: '574222564',
        title: 'CSS & Debugging',
        url: 'https://player.vimeo.com/video/574222564',
      },
      {
        id: '574224291',
        title: 'Working with assets',
        url: 'https://player.vimeo.com/video/574224291',
      },
      {
        id: '574224535',
        title: 'Getting working with Vite',
        url: 'https://player.vimeo.com/video/574224535',
      },
      {
        id: '574225014',
        title: 'Moving to Vite',
        url: 'https://player.vimeo.com/video/574225014',
      },
    ],
  },
  {
    title: 'Intro to Vue 2',
    image: 'vue2.png',
    difficulty: 'Beginner',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '258707456',
        title: 'The Vue instance',
        url: 'https://player.vimeo.com/video/258707456?autoplay=1',
      },
      {
        id: '258874670',
        title: 'Attribute binding',
        url: 'https://player.vimeo.com/video/258874670?autoplay=1',
      },
      {
        id: '300867455',
        title: 'Conditional rendering',
        url: 'https://player.vimeo.com/video/300867455?autoplay=1',
      },
      {
        id: '258889657',
        title: 'List rendering',
        url: 'https://player.vimeo.com/video/258889657?autoplay=1',
      },
      {
        id: '259211539',
        title: 'Event handling',
        url: 'https://player.vimeo.com/video/259211539?autoplay=1',
      },
      {
        id: '259233921',
        title: 'Class & Style binding',
        url: 'https://player.vimeo.com/video/259233921?autoplay=1',
      },
      {
        id: '259937361',
        title: 'Computed properties',
        url: 'https://player.vimeo.com/video/259937361?autoplay=1',
      },
      {
        id: '263051367',
        title: 'Components',
        url: 'https://player.vimeo.com/video/263051367?autoplay=1',
      },
      {
        id: '263911367',
        title: 'Communicating events',
        url: 'https://player.vimeo.com/video/263911367?autoplay=1',
      },
      {
        id: '264692706',
        title: 'Forms & v-model',
        url: 'https://player.vimeo.com/video/264692706?autoplay=1',
      },
      {
        id: '267299472',
        title: 'Tabs',
        url: 'https://player.vimeo.com/video/267299472?autoplay=1',
      },
    ],
  },
  {
    title: 'Next Level Vue 2',
    image: '1569439902643_4.png',
    difficulty: 'Beginner',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '299718108',
        title: 'Next-Level Vue: Orientation',
        url: 'https://player.vimeo.com/video/299718108?autoplay=1',
      },
      {
        id: '297619886',
        title: 'Progress Bar Axios Interceptors',
        url: 'https://player.vimeo.com/video/297619886?autoplay=1',
      },
      {
        id: '298208305',
        title: 'In-Component Route Guards',
        url: 'https://player.vimeo.com/video/298208305?autoplay=1',
      },
      {
        id: '299962821',
        title: 'Global and Per-Route Guards',
        url: 'https://player.vimeo.com/video/299962821?autoplay=1',
      },
      {
        id: '300838968',
        title: 'Completing our Progress Bar',
        url: 'https://player.vimeo.com/video/300838968?autoplay=1',
      },
      {
        id: '302513491',
        title: 'Error Handling',
        url: 'https://player.vimeo.com/video/302513491?autoplay=1',
      },
      {
        id: '304941787',
        title: 'Reusable Form Components: BaseInput',
        url: 'https://player.vimeo.com/video/304941787?autoplay=1',
      },
      {
        id: '306582689',
        title: 'Reusable Form Components: BaseSelect',
        url: 'https://player.vimeo.com/video/306582689?autoplay=1',
      },
      {
        id: '307592723',
        title: 'Reusable Form Components: BaseButton',
        url: 'https://player.vimeo.com/video/307592723?autoplay=1',
      },
      {
        id: '308504709',
        title: 'Form Validation with Vue Validate Pt 1',
        url: 'https://player.vimeo.com/video/308504709?autoplay=1',
      },
      {
        id: '311076056',
        title: 'Form Validation with Vue Validate Pt 2',
        url: 'https://player.vimeo.com/video/311076056?autoplay=1',
      },
      {
        id: '312320460',
        title: 'Mixins',
        url: 'https://player.vimeo.com/video/312320460?autoplay=1',
      },
      {
        id: '315508073',
        title: 'Filters',
        url: 'https://player.vimeo.com/video/315508073?autoplay=1',
      },
    ],
  },
  {
    title: 'Mastering Vuex',
    image: 'vuex.png',
    difficulty: 'Beginner',
    vue3: false,
    vue2: true,
    externalLinks: [],
    resources: [
      {
        id: '297516469',
        title: 'Intro to vuex',
        url: 'https://player.vimeo.com/video/297516469?autoplay=1',
      },
      {
        id: '299290718',
        title: 'Mastering Vuex Orientation',
        url: 'https://player.vimeo.com/video/299290718?autoplay=1',
      },
      {
        id: '296998483',
        title: 'State & Getters',
        url: 'https://player.vimeo.com/video/296998483?autoplay=1',
      },
      {
        id: '297183312',
        title: 'Mutations & actions Part 1',
        url: 'https://player.vimeo.com/video/297183312?autoplay=1',
      },
      {
        id: '297215375',
        title: 'Mutations & actions Part 2',
        url: 'https://player.vimeo.com/video/297215375?autoplay=1',
      },
      {
        id: '294957628',
        title: 'Modules',
        url: 'https://player.vimeo.com/video/294957628?autoplay=1',
      },
      {
        id: '296095457',
        title: 'Success & Error Notifications',
        url: 'https://player.vimeo.com/video/296095457?autoplay=1',
      },
    ],
  },
  {
    title: 'Scaling Vue with Nuxt.js',
    image: 'nuxt.png',
    difficulty: 'Intermediate',
    vue3: false,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '311756540',
        title: 'Why use nuxt.js?',
        url: 'https://player.vimeo.com/video/311756540?autoplay=1',
      },
      {
        id: '314572866',
        title: 'Creating a nuxt app',
        url: 'https://player.vimeo.com/video/314572866?autoplay=1',
      },
      {
        id: '316653566',
        title: 'Universal mode',
        url: 'https://player.vimeo.com/video/316653566?autoplay=1',
      },
      {
        id: '317105776',
        title: 'SEO with vue-meta',
        url: 'https://player.vimeo.com/video/317105776?autoplay=1',
      },
      {
        id: '320633290',
        title: 'File-based routing',
        url: 'https://player.vimeo.com/video/320633290?autoplay=1',
      },
      {
        id: '324333004',
        title: 'API calls with axios',
        url: 'https://player.vimeo.com/video/324333004?autoplay=1',
      },
      {
        id: '325496815',
        title: 'Async/await & Progress bar',
        url: 'https://player.vimeo.com/video/325496815?autoplay=1',
      },
      {
        id: '333888973',
        title: 'Using vuex',
        url: 'https://player.vimeo.com/video/333888973?autoplay=1',
      },
      {
        id: '337883799',
        title: 'Universal mode deployment',
        url: 'https://player.vimeo.com/video/337883799?autoplay=1',
      },
      {
        id: '343242377',
        title: 'Static site generated deployment',
        url: 'https://player.vimeo.com/video/343242377?autoplay=1',
      },
    ],
  },
  {
    title: 'Unit Testing Vue 3',
    image: 'unittesting.png',
    difficulty: 'Beginner',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '510489703',
        title: 'What to test',
        url: 'https://player.vimeo.com/video/510489703',
      },
      {
        id: '514104358',
        title: 'Writing a unit test with jest',
        url: 'https://player.vimeo.com/video/514104358',
      },
      {
        id: '514106269',
        title: 'Testing props & User interaction',
        url: 'https://player.vimeo.com/video/514106269',
      },
      {
        id: '514344677',
        title: 'Testing emitted events',
        url: 'https://player.vimeo.com/video/514344677',
      },
      {
        id: '518376232',
        title: 'Testing API calls',
        url: 'https://player.vimeo.com/video/518376232',
      },
      {
        id: '518384316',
        title: 'Stubbing child components',
        url: 'https://player.vimeo.com/video/518384316',
      },
    ],
  },
  {
    title: 'Touring Vue Router',
    image: 'router.png',
    difficulty: 'Beginner',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '471197070',
        title: 'Introduction',
        url: 'https://player.vimeo.com/video/471197070',
      },
      {
        id: '471553156',
        title: 'Receiving URL parameters',
        url: 'https://player.vimeo.com/video/471553156',
      },
      {
        id: '475248686',
        title: 'Building pagination',
        url: 'https://player.vimeo.com/video/475248686',
      },
      {
        id: '482846883',
        title: 'Nested routes',
        url: 'https://player.vimeo.com/video/482846883',
      },
      {
        id: '489490162',
        title: 'Redirect & Alias',
        url: 'https://player.vimeo.com/video/489490162',
      },
      {
        id: '498189741',
        title: 'Programmatic navigation',
        url: 'https://player.vimeo.com/video/498189741',
      },
      {
        id: '503618233',
        title: 'Error handling and 404s',
        url: 'https://player.vimeo.com/video/503618233',
      },
      {
        id: '510430996',
        title: 'Flash messages',
        url: 'https://player.vimeo.com/video/510430996',
      },
      {
        id: '522434741',
        title: 'In-component route guards',
        url: 'https://player.vimeo.com/video/522434741',
      },
    ],
  },
  {
    title: 'Real world vue 3',
    image: 'vue3.png',
    difficulty: 'Beginner',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '462853296',
        title: 'Orientation',
        url: 'https://player.vimeo.com/video/462853296',
      },
      {
        id: '462876299',
        title: 'Vue CLI - Creating the project',
        url: 'https://player.vimeo.com/video/462876299',
      },
      {
        id: '470251780',
        title: 'Single file components',
        url: 'https://player.vimeo.com/video/470251780',
      },
      {
        id: '472810738',
        title: 'Vue Router essentials',
        url: 'https://player.vimeo.com/video/472810738',
      },
      {
        id: '477765119',
        title: 'API calls with Axios',
        url: 'https://player.vimeo.com/video/477765119',
      },
      {
        id: '488382833',
        title: 'Dynamic Routing',
        url: 'https://player.vimeo.com/video/488382833',
      },
      {
        id: '490917120',
        title: 'Deploying with Render',
        url: 'https://player.vimeo.com/video/490917120',
      },
      {
        id: '494544547',
        title: 'Scaling the app',
        url: 'https://player.vimeo.com/video/494544547',
      },
    ],
  },
  {
    title: 'Vue 3 Forms',
    image: 'forms.png',
    difficulty: 'Intermediate',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '457363869',
        title: 'Introduction',
        url: 'https://player.vimeo.com/video/457363869',
      },
      {
        id: '458419816',
        title: 'Base Input',
        url: 'https://player.vimeo.com/video/458419816',
      },
      {
        id: '459058559',
        title: 'Base Select',
        url: 'https://player.vimeo.com/video/459058559',
      },
      {
        id: '467985438',
        title: 'Auto-importing components',
        url: 'https://player.vimeo.com/video/467985438',
      },
      {
        id: '478759502',
        title: 'Base Checkbox',
        url: 'https://player.vimeo.com/video/478759502',
      },
      {
        id: '480558076',
        title: 'Base Radio',
        url: 'https://player.vimeo.com/video/480558076',
      },
      {
        id: '493121878',
        title: 'BaseRadioGroup',
        url: 'https://player.vimeo.com/video/493121878',
      },
      {
        id: '505012138',
        title: 'Submitting Forms',
        url: 'https://player.vimeo.com/video/505012138',
      },
      {
        id: '517344724',
        title: 'Basic a11y for your components',
        url: 'https://player.vimeo.com/video/517344724',
      },
    ],
  },
  {
    title: 'Build a Gmail Clone with Vue 3',
    image: 'mail.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '417686205',
        title: 'Tour the project',
        url: 'https://player.vimeo.com/video/417686205',
      },
      {
        id: '418119086',
        title: 'Building the inbox',
        url: 'https://player.vimeo.com/video/418119086',
      },
      {
        id: '424719912',
        title: 'Async setup and suspense',
        url: 'https://player.vimeo.com/video/424719912',
      },
      {
        id: '432334269',
        title: 'Axios & JSON Server',
        url: 'https://player.vimeo.com/video/432334269',
      },
      {
        id: '432334539',
        title: 'Opening an email',
        url: 'https://player.vimeo.com/video/432334539',
      },
      {
        id: '432334746',
        title: 'Email modal',
        url: 'https://player.vimeo.com/video/432334746',
      },
      {
        id: '435917211',
        title: 'Keyboard shortcuts',
        url: 'https://player.vimeo.com/video/435917211',
      },
      {
        id: '435925588',
        title: 'useKeydown Composable',
        url: 'https://player.vimeo.com/video/435925588',
      },
      {
        id: '439008950',
        title: 'Email action bar',
        url: 'https://player.vimeo.com/video/439008950',
      },
      {
        id: '439009520',
        title: 'Flexible Events',
        url: 'https://player.vimeo.com/video/439009520',
      },
      {
        id: '441251067',
        title: 'Multi-select with Reactive Sets',
        url: 'https://player.vimeo.com/video/441251067',
      },
      {
        id: '441252800',
        title: 'App-wide non-persisted state',
        url: 'https://player.vimeo.com/video/441252800',
      },
      {
        id: '449574598',
        title: 'Select-all checkbox',
        url: 'https://player.vimeo.com/video/449574598',
      },
      {
        id: '449582938',
        title: 'Bulk actions',
        url: 'https://player.vimeo.com/video/449582938',
      },
      {
        id: '450616466',
        title: 'Archived view',
        url: 'https://player.vimeo.com/video/450616466',
      },
      {
        id: '455342339',
        title: 'Conclusion',
        url: 'https://player.vimeo.com/video/455342339',
      },
    ],
  },
  {
    title: 'Component Design Patterns',
    image: 'components.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '394725602',
        title: 'Introduction',
        url: 'https://player.vimeo.com/video/394725602',
      },
      {
        id: '394498766',
        title: 'Props: Fundamentals',
        url: 'https://player.vimeo.com/video/394498766',
      },
      {
        id: '399734836',
        title: 'Props: custom validation',
        url: 'https://player.vimeo.com/video/399734836',
      },
      {
        id: '409867593',
        title: 'The problem with props',
        url: 'https://player.vimeo.com/video/409867593',
      },
      {
        id: '424213580',
        title: 'Slots: Fundamentals',
        url: 'https://player.vimeo.com/video/424213580',
      },
      {
        id: '431605455',
        title: 'Slots: Techniques',
        url: 'https://player.vimeo.com/video/431605455',
      },
      {
        id: '437260447',
        title: 'Scoped slots: Part 1',
        url: 'https://player.vimeo.com/video/437260447',
      },
      {
        id: '441489357',
        title: 'Scoped slots: Part 1',
        url: 'https://player.vimeo.com/video/441489357',
      },
      {
        id: '448610522',
        title: 'One object to rule them all',
        url: 'https://player.vimeo.com/video/448610522',
      },
    ],
  },
  {
    title: 'From Vue 2 to Vue 3',
    image: 'vue23.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '424215562',
        title: 'From Vue 2 to Vue 3',
        url: 'https://player.vimeo.com/video/424215562',
      },
      {
        id: '425339512',
        title: 'The new v-model',
        url: 'https://player.vimeo.com/video/425339512',
      },
      {
        id: '427585737',
        title: 'Multi v-model bindings',
        url: 'https://player.vimeo.com/video/427585737',
      },
      {
        id: '433041737',
        title: 'V-model modifiers',
        url: 'https://player.vimeo.com/video/433041737',
      },
      {
        id: '438959871',
        title: 'The new $attrs',
        url: 'https://player.vimeo.com/video/438959871',
      },
      {
        id: '442885410',
        title: 'Multi root components',
        url: 'https://player.vimeo.com/video/442885410',
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
        url: 'https://player.vimeo.com/video/351308397?autoplay=1',
      },
      {
        id: '353909159',
        title: 'Transitions',
        url: 'https://player.vimeo.com/video/353909159',
      },
      {
        id: '358710484',
        title: 'Page Transitions',
        url: 'https://player.vimeo.com/video/358710484?autoplay=1',
      },
      {
        id: '361550074',
        title: 'Group Transitions',
        url: 'https://player.vimeo.com/video/361550074?autoplay=1',
      },
      {
        id: '367390374',
        title: 'JS Hooks + Velocity',
        url: 'https://player.vimeo.com/video/367390374?autoplay=1',
      },
      {
        id: '372000380',
        title: 'Intro to GSAP 3',
        url: 'https://player.vimeo.com/video/372000380?autoplay=1',
      },
      {
        id: '375052563',
        title: 'State with GSAP',
        url: 'https://player.vimeo.com/video/375052563?autoplay=1',
      },
      {
        id: '379804181',
        title: 'Timelines with GSAP',
        url: 'https://player.vimeo.com/video/379804181?autoplay=1',
      },
      {
        id: '380155578',
        title: 'Nested Timelines',
        url: 'https://player.vimeo.com/video/380155578?autoplay=1',
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
        url: 'https://player.vimeo.com/video/385713441?autoplay=1',
      },
      {
        id: '387189765',
        title: 'Writing a Unit test with Jest',
        url: 'https://player.vimeo.com/video/387189765?autoplay=1',
      },
      {
        id: '391719920',
        title: 'Testing props & user interaction',
        url: 'https://player.vimeo.com/video/391719920?autoplay=1',
      },
      {
        id: '398001031',
        title: 'Testing emitted events',
        url: 'https://player.vimeo.com/video/398001031?autoplay=1',
      },
      {
        id: '404668293',
        title: 'Testing API calls',
        url: 'https://player.vimeo.com/video/404668293?autoplay=1',
      },
      {
        id: '414881728',
        title: 'Stubbing child components',
        url: 'https://player.vimeo.com/video/414881728?autoplay=1',
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
        url: 'https://player.vimeo.com/video/391719920?autoplay=1',
      },
      {
        id: '350501837',
        title: 'Components Part 1',
        url: 'https://player.vimeo.com/video/350501837?autoplay=1',
      },
      {
        id: '353308521',
        title: 'Components Part 2',
        url: 'https://player.vimeo.com/video/353308521?autoplay=1',
      },
      {
        id: '357089986',
        title: 'Layouts: Grid System',
        url: 'https://player.vimeo.com/video/357089986?autoplay=1',
      },
      {
        id: '359661975',
        title: 'Layouts: Responsive Design',
        url: 'https://player.vimeo.com/video/359661975?autoplay=1',
      },
      {
        id: '362841967',
        title: 'Forms: Fundamentals',
        url: 'https://player.vimeo.com/video/362841967?autoplay=1',
      },
      {
        id: '368669029',
        title: 'Forms: Validations',
        url: 'https://player.vimeo.com/video/368669029?autoplay=1',
      },
      {
        id: '378430249',
        title: 'Directives',
        url: 'https://player.vimeo.com/video/378430249?autoplay=1',
      },
      {
        id: '380861996',
        title: 'Themes',
        url: 'https://player.vimeo.com/video/380861996?autoplay=1',
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
        url: 'https://player.vimeo.com/video/322541550?autoplay=1',
      },
      {
        id: '327559707',
        title: 'Project Structure',
        url: 'https://player.vimeo.com/video/327559707?autoplay=1',
      },
      {
        id: '328952884',
        title: 'User Registration',
        url: 'https://player.vimeo.com/video/328952884?autoplay=1',
      },
      {
        id: '331308258',
        title: 'User Login',
        url: 'https://player.vimeo.com/video/331308258?autoplay=1',
      },
      {
        id: '336662859',
        title: 'User Logout',
        url: 'https://player.vimeo.com/video/336662859?autoplay=1',
      },
      {
        id: '340259889',
        title: 'Handling Errors',
        url: 'https://player.vimeo.com/video/340259889?autoplay=1',
      },
      {
        id: '345127910',
        title: 'Automatic Login',
        url: 'https://player.vimeo.com/video/345127910?autoplay=1',
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
        id: '327844370',
        title: 'Tour of the App',
        url: 'https://player.vimeo.com/video/327844370?autoplay=1',
      },
      {
        id: '329214344',
        title: 'Building our Board',
        url: 'https://player.vimeo.com/video/329214344?autoplay=1',
      },
      {
        id: '331459804',
        title: 'Opening tasks in a modal',
        url: 'https://player.vimeo.com/video/331459804?autoplay=1',
      },
      {
        id: '332476395',
        title: 'Adding and editing tasks',
        url: 'https://player.vimeo.com/video/332476395?autoplay=1',
      },
      {
        id: '332695521',
        title: 'Drag & Dropping Tasks',
        url: 'https://player.vimeo.com/video/332695521?autoplay=1',
      },
      {
        id: '334001031',
        title: 'Dragging columns',
        url: 'https://player.vimeo.com/video/334001031?autoplay=1',
      },
      {
        id: '335300449',
        title: 'Adding New Columns',
        url: 'https://player.vimeo.com/video/335300449?autoplay=1',
      },
      {
        id: '335301632',
        title: 'Extracting Components',
        url: 'https://player.vimeo.com/video/335301632?autoplay=1',
      },
      {
        id: '336403919',
        title: 'Creating a mixin',
        url: 'https://player.vimeo.com/video/336403919?autoplay=1',
      },
      {
        id: '336411746',
        title: 'Extracting Drag & Drop',
        url: 'https://player.vimeo.com/video/336411746?autoplay=1',
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
        id: '364111799',
        title: 'Why the composition API',
        url: 'https://player.vimeo.com/video/364111799?autoplay=1',
      },
      {
        id: '364140610',
        title: 'Setup & Reactive References',
        url: 'https://player.vimeo.com/video/364140610?autoplay=1',
      },
      {
        id: '365085315',
        title: 'Methods',
        url: 'https://player.vimeo.com/video/365085315?autoplay=1',
      },
      {
        id: '365099441',
        title: 'Computed Properties',
        url: 'https://player.vimeo.com/video/365099441?autoplay=1',
      },
      {
        id: '365160899',
        title: 'The Reactive Syntax',
        url: 'https://player.vimeo.com/video/365160899?autoplay=1',
      },
      {
        id: '365352006',
        title: 'Modularizing',
        url: 'https://player.vimeo.com/video/365352006?autoplay=1',
      },
      {
        id: '372753110',
        title: 'Lifecycle Hooks',
        url: 'https://player.vimeo.com/video/372753110?autoplay=1',
      },
      {
        id: '372755942',
        title: 'Watch',
        url: 'https://player.vimeo.com/video/372755942?autoplay=1',
      },
      {
        id: '375785689',
        title: 'Sharing State',
        url: 'https://player.vimeo.com/video/375785689?autoplay=1',
      },
      {
        id: '420508038',
        title: 'Suspense',
        url: 'https://player.vimeo.com/video/420508038?autoplay=1',
      },
      {
        id: '424955491',
        title: 'Teleport',
        url: 'https://player.vimeo.com/video/424955491?autoplay=1',
      },
    ],
  },
  {
    title: 'Advanced Components',
    image: '1569439707864_5.png',
    difficulty: 'Advanced',
    vue3: false,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '263589430',
        title: 'Intro',
        url: 'https://player.vimeo.com/video/263589430?autoplay=1',
      },
      {
        id: '264113772',
        title: 'Build a Reactivity System',
        url: 'https://player.vimeo.com/video/264113772?autoplay=1',
      },
      {
        id: '276288371',
        title: 'Evan You on Proxies',
        url: 'https://player.vimeo.com/video/276288371?autoplay=1',
      },
      {
        id: '264184004',
        title: 'Reactivity in VueJS',
        url: 'https://player.vimeo.com/video/264184004?autoplay=1',
      },
      {
        id: '276302877',
        title: 'Evan You on Vue Core',
        url: 'https://player.vimeo.com/video/276302877?autoplay=1',
      },
      {
        id: '265079382',
        title: 'Template Compilation',
        url: 'https://player.vimeo.com/video/265079382?autoplay=1',
      },
      {
        id: '277359426',
        title: 'Evan You on the Virtual DOM',
        url: 'https://player.vimeo.com/video/277359426?autoplay=1',
      },
      {
        id: '265359995',
        title: 'Functional Components',
        url: 'https://player.vimeo.com/video/265359995?autoplay=1',
      },
      {
        id: '277362944',
        title: 'Evan You on Functional Components',
        url: 'https://player.vimeo.com/video/277362944?autoplay=1',
      },
      {
        id: '266460791',
        title: 'The mounting process',
        url: 'https://player.vimeo.com/video/266460791?autoplay=1',
      },
      {
        id: '277714650',
        title: 'Evan You on the Mounting Process',
        url: 'https://player.vimeo.com/video/277714650?autoplay=1',
      },
      {
        id: '272766967',
        title: 'Scoped Slots & Render Props',
        url: 'https://player.vimeo.com/video/272766967?autoplay=1',
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
      {
        id: '516377523',
        title: 'Next steps',
        url: 'https://player.vimeo.com/video/516377523',
      },
      {
        id: '519596515',
        title: 'Bonus: Composition API & Typescript',
        url: 'https://player.vimeo.com/video/519596515',
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
        title: 'Vue 3 Reactivity',
        url: 'https://player.vimeo.com/video/388752844?autoplay=1',
      },
      {
        id: '388759486',
        title: 'Proxy & Reflect',
        url: 'https://player.vimeo.com/video/388759486?autoplay=1',
      },
      {
        id: '392347730',
        title: 'activeEffect & ref',
        url: 'https://player.vimeo.com/video/392347730?autoplay=1',
      },
      {
        id: '400699168',
        title: 'Computed values & Vue 3 Source',
        url: 'https://player.vimeo.com/video/400699168?autoplay=1',
      },
      {
        id: '397194972',
        title: 'Q&A with Evan You',
        url: 'https://player.vimeo.com/video/397194972?autoplay=1',
      },
      {
        id: '397197076',
        title: 'Reading Source Code with Evan You',
        url: 'https://player.vimeo.com/video/397197076?autoplay=1',
      },
    ],
  },
  {
    title: 'Vue 3 Deep Dive with Evan You',
    image: 'evanyou.png',
    difficulty: 'Advanced',
    vue3: true,
    vue2: false,
    externalLinks: [],
    resources: [
      {
        id: '413320671',
        title: 'Vue 3 Overview',
        url: 'https://player.vimeo.com/video/413320671',
      },
      {
        id: '413172106',
        title: 'Virtual DOM & Render functions',
        url: 'https://player.vimeo.com/video/413172106',
      },
      {
        id: '410406205',
        title: 'How to use render functions',
        url: 'https://player.vimeo.com/video/410406205',
      },
      {
        id: '410199064',
        title: 'Compiler & Renderer API',
        url: 'https://player.vimeo.com/video/410199064',
      },
      {
        id: '410256224',
        title: 'Creating a Mount function',
        url: 'https://player.vimeo.com/video/410256224',
      },
      {
        id: '410291443',
        title: 'Creating a Patch function',
        url: 'https://player.vimeo.com/video/410291443',
      },
      {
        id: '410676185',
        title: 'Intro to Reactivity',
        url: 'https://player.vimeo.com/video/410676185',
      },
      {
        id: '410680764',
        title: 'Building reactivity from scratch',
        url: 'https://player.vimeo.com/video/410680764',
      },
      {
        id: '410687425',
        title: 'Building the reactive API',
        url: 'https://player.vimeo.com/video/410687425',
      },
      {
        id: '410711530',
        title: 'Creating a Mini Vue',
        url: 'https://player.vimeo.com/video/410711530',
      },
      {
        id: '410715243',
        title: 'The Composition API',
        url: 'https://player.vimeo.com/video/410715243',
      },
      {
        id: '410722048',
        title: 'Code Organization',
        url: 'https://player.vimeo.com/video/410722048',
      },
      {
        id: '411046002',
        title: 'Logic reuse',
        url: 'https://player.vimeo.com/video/411046002',
      },
      {
        id: '411053073',
        title: 'Composition API examples',
        url: 'https://player.vimeo.com/video/411053073',
      },
      {
        id: '411057133',
        title: 'Parting words',
        url: 'https://player.vimeo.com/video/411057133',
      },
    ],
  },
];
