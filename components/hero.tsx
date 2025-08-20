import Image from "next/image";
import Link from "next/link";
import Potrait from "public/images/socbuzz.jpg"

export default function Hero() {
   return (
      <div className="flex items-center h-max pt-20">
         <div className="container mx-auto px-6 flex flex-col justify-between items-center pb-4">
            <div className="flex flex-col">
               <Link href="/" className="mx-auto">
                  <Image
                     src={Potrait}
                     alt="Potrait"
                     width={1200}
                     height={0}
                     className="rounded-full w-28 md:w-44 mx-auto"
                  />
               </Link>
               <p className="md:text-3xl my-6 text-green-500 text-center">
                  Hi, I&#x27;m <Link href="https://samsulmuarrif.my.id" className=" underline underline-offset-8 hover:text-sky-500">Samsul Muarrif</Link>
               </p>
               <h4 className="max-w-3xl lg:text-2xl mx-auto dark:text-white text-zinc-600 text-center py-2">
                  Building digital products, brands, and experiences.
               </h4>
               <h5 className="mx-auto lg:text-base dark:text-white text-zinc-500">
                  Aceh, Indonesia
               </h5>
               <div className="flex flex-col items-center justify-center py-4">
                  <div className="capitalize py-2 mb-4 px-4 mt-6 bg-orange-500 rounded-full dark:bg-white text-zinc-50 dark:text-zinc-700">
                     Connect with me
                  </div>
                  <div className="flex gap-4">
                     <Link
                        href="mailto:samuarrif@gmail.com"
                        target="_blank"
                        className="flex gap-2 hover:text-sky-500"
                     >
                        <svg
                           className="w-5"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="52 42 88 66"
                        >
                           <path
                              fill="#4285f4"
                              d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                           />
                           <path
                              fill="#34a853"
                              d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                           />
                           <path
                              fill="#fbbc04"
                              d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                           />
                           <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                           <path
                              fill="#c5221f"
                              d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                           />
                        </svg>
                        <span className="dark:text-slate-200">Gmail</span>
                     </Link>
                     {/* <Link */}
                     {/*    href="https://wa.me/6285159606776?text=Hello+Samsul+Muarrif" */}
                     {/*    target="_blank" */}
                     {/*    className="flex gap-2 hover:text-sky-500" */}
                     {/* > */}
                     {/*    <svg className="w-5" viewBox="0 0 512 512"> */}
                     {/*       <rect width="512" height="512" rx="15%" fill="#25d366" /> */}
                     {/*       <path */}
                     {/*          fill="#25d366" */}
                     {/*          stroke="#fff" */}
                     {/*          strokeWidth="26" */}
                     {/*          d="M123 393l14-65a138 138 0 1150 47z" */}
                     {/*       /> */}
                     {/*       <path */}
                     {/*          fill="#fff" */}
                     {/*          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" */}
                     {/*       /> */}
                     {/*    </svg> */}
                     {/*    <span className="dark:text-slate-200">Whatsapp</span> */}
                     {/* </Link> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
