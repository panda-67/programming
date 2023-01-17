import Link from "next/link";

export default function Language() {
   return (
      <div>
         <h3>Languages</h3>
         <p className="text-sm md:text-base">
            HTML, CSS{" "}
            <Link
               className="hover:text-sky-400"
               href="https://tailwindcss.com/"
            >
               (Tailwindcss)
            </Link>
            , Javascript/Typescript (
            <Link
               className="hover:text-sky-400"
               href="https://www.gatsbyjs.com/"
            >
               Gatsbyjs
            </Link>{" "}
            &{" "}
            <Link className="hover:text-sky-400" href="https://nextjs.org/">
               Nextjs
            </Link>
            ) , PHP{" "}
            <Link className="hover:text-sky-400" href="https://laravel.com/">
               (Laravel)
            </Link>
            , Phyton{" "}
            <Link
               className="hover:text-sky-400"
               href="https://www.djangoproject.com/"
            >
               (Django)
            </Link>{" "}
            .
         </p>
      </div>
   )
}