import NewFooter from "./components/Footer"
import { Navbar } from "./components/Navbar"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const sjef = [
  {
    name: 'REVYSJEFER',
    role: 'Nora, Ellie, Sylvester og Nicolas',
    imageUrl:
      'https://i.imgur.com/I3dTCqm.jpeg',
  },
]

const people = [
    {
      name: 'SCENE',
      role: 'Mateo, Hennie & Kristian',
      imageUrl:
        'https://i.imgur.com/JeUIVcY.jpg',
    },
    {
      name: 'FEZT',
      role: 'Selma, Filip & Lisa',
      imageUrl:
        'https://i.imgur.com/iVJJtMV.jpg',
    },
    {
      name: 'HÆNDY',
      role: 'Ena, Simen & Liza',
      imageUrl:
        'https://i.imgur.com/l0WkL8K.jpg',
    },
    {
      name: 'KOSTYME',
      role: 'Gro, Olivia & Henry',
      imageUrl:
        'https://i.imgur.com/ITM3PFR.jpg',
    },
    {
      name: 'LYD OG LYS',
      role: 'Jesper, Stella & Théodore',
      imageUrl:
        'https://i.imgur.com/fqq6zmz.jpg',
    },
    {
      name: 'MAT',
      role: 'Carmen, Håkon & Milla',
      imageUrl:
        'https://i.imgur.com/pqQT6RI.jpg',
    },
    {
      name: 'MP',
      role: 'Maren, Edith & Eirill',
      imageUrl:
        'https://i.imgur.com/5mztVAZ.jpg',
    },
    {
      name: 'PR',
      role: 'Ingrid, Max & Emeli',
      imageUrl:
        'https://i.imgur.com/b8MYM7F.jpg',
    },
    {
      name: 'SØPPEL',
      role: 'Maria',
      imageUrl:
        'https://i.imgur.com/aDSJ4XS.jpg',
    },
  ]

const groups = [
    {
      name: 'SCENE',
      role: 'Når lysene slukkes og musikken starter, smelter verden bort og man er igjen med kun deg, scenen, rekvisittene og kulturen. Det er der lidenskapelige kunstnere går ut av sin komfortsone og skaper noe som aldri før har eksistert - for the culture!',
      imageUrl:
        'https://i.imgur.com/p5q0Rzx.jpg',
    },
    {
      name: 'FEZT',
      role: 'Party culture all the way, that is why we always slay! For the CULT.',
      imageUrl:
        'https://i.imgur.com/3IYxhDr.jpg',
    },
    {
      name: 'HÆNDY',
      role: 'Kan kulturen bygges? Klart Hændy kan!',
      imageUrl:
        'https://i.imgur.com/z7Gwf3y.jpg',
    },
    {
      name: 'KOSTYME',
      role: 'Haha de mente vel for the costumes',
      imageUrl:
        'https://i.imgur.com/pEekpb4.jpg',
    },
    {
      name: 'LYD OG LYS',
      role: 'Kall oss sjeiker fordi vi regjerer Audi-Arabia',
      imageUrl:
        'https://i.imgur.com/c4w6K36.jpg',
    },
    {
      name: 'MAT',
      role: 'Food for thought, thought for culture, food for culture, FOR THE CULTUREr',
      imageUrl:
        'https://i.imgur.com/yA5tlnK.jpg',
    },
    {
      name: 'MP',
      role: 'If you dont know me im M to the P',
      imageUrl:
        'https://i.imgur.com/LOmB3xS.jpg',
    },
    {
      name: 'PR',
      role: 'Alle forguder oss, og vi forguder bikkja;)',
      imageUrl:
        'https://i.imgur.com/ELnoVD1.jpg',
    },
]
  
  export default function Groups() {
    return (
        <div className="isolate h-full bg-amber-100">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#65000a" />
              <stop offset={1} stopColor="#9f0014" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Navbar />
      {/* Revysjefer */}
      <div className="py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Revysjefer</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                På denne nettsiden kan du se gruppebilder av både sjefer og medlemmer, og få et innblikk i den fantastiske gruppen som står bak årets revyproduksjon
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {sjef.map((person) => (
              <li key={person.name}>
                <Zoom>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                </Zoom>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Gruppesjefer */}
      <div className="-mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gruppesjefer</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Zoom>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                </Zoom>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Grupper */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grupper</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {groups.map((person) => (
              <li key={person.name}>
                <Zoom>
                <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                </Zoom>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    )
  }
  