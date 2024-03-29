
import React from 'react'
import { Navbar } from './components/Navbar'
import Logo from '../assets/FTClogo.png'
import NewFooter from './components/Footer'

export default function Example() {
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
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden bg-amber-100 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-red-900">FOR THE</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">CULTURE</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-red-800" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="lg:object-cover md:object-cover xl:object-cover object-center"
                    src={Logo}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-900">
                    <svg className='h-5 w-5 flex-none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M15.993 1.385a1.87 1.87 0 012.623 2.622l-4.03 5.27a12.749 12.749 0 01-4.237 3.562 4.508 4.508 0 00-3.188-3.188 12.75 12.75 0 013.562-4.236l5.27-4.03zM6 11a3 3 0 00-3 3 .5.5 0 01-.72.45.75.75 0 00-1.035.931A4.001 4.001 0 009 14.004V14a3.01 3.01 0 00-1.66-2.685A2.99 2.99 0 006 11z" />
                    </svg>
                  <span className="ml-2">Logo av Andreas Mørland</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-900">
              I år spiller vi for kulturen! 
              Vi spiller ikke på engelsk nei dessverre, men det var kult i tittelen. Whatever liksom! 
              Do it for the culture! Come and see at river hill this march! 
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-lg text-gray-900 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              Elvebakkenrevyen er litt ekstra spesiell ja.. De sier så i alle fall. 
              Vi ser frem til å lage noe skikkelig STORT liksom. For det er et stort ansvar å lage en elvebakkenrevy. 
              Vi er rett og slett litt annerledes enn de andre skolerevyene og sånn har det alltid vært. Vi må gjøre det for kulturen.
              </p>
              <p className='text-black'>Eller…..?</p>
              <p>
              Vil du finne ut hva det vil si å gjøre noe For The Culture bør du komme og se Elvebakkenrevyen 2023 hver dag fra 1-12. Mars!
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  )
}
