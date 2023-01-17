import Link from "next/link"

export default function Projects() {
   return (
      <div className="space-y-6">
         <h3>Recent Project</h3>
         <div className="flex gap-4">
            <YearTag>2023</YearTag>
            <div className="space-y-4 my-1">
               <ProjectItem title="Rampagoe Aerial Surveys" source="rampago.github.io">
                  Halaman web untuk promosi bisnis.
               </ProjectItem>
            </div>
         </div>
         <div className="flex gap-4">
            <YearTag>2022</YearTag>
            <div className="space-y-4 my-1">
               <ProjectItem title="DQA Dokumentasi" source="https://doc.dqa.sch.id/">
                  Sebuah aplikasi web untuk mengelola dokumentasi terhadap aplikasi web <Link
                     className="hover:text-sky-500"
                     href="https://dqa.sch.id//"
                  >
                     (Darul Quran Aceh)
                  </Link> pada halaman Admin.
               </ProjectItem>
               <ProjectItem
                  title="Open Journal Systems (Journal Jeumpa)"
                  source="ejurnalunsam.id/index.php/jempa/index"
               >
                  Sebuah aplikasi untuk mengelola jurnal-jurnal ilmiah secara
                  lebih rapi dan dengan alur kerja yang sudah terstruktur.
                  Aplikasi ini memudahkan penulis untuk mempublikasikan
                  jurnalnya dan juga memudahkan publisher dalam mengelola
                  jurnal. Aplikasi ini dibangun dengan menggunakan cms OJS
                  &nbsp;
                  <Link
                     className="hover:text-sky-500"
                     href="https://pkp.sfu.ca/ojs/"
                  >
                     (Open Journal Systems)
                  </Link>
                  .
               </ProjectItem>
               <ProjectItem
                  title="Catalog App (Rids Blades)"
                  source="ridsblades.com"
               >
                  Sebuah aplikasi yang dapat menampilkan barang-barang
                  dagangan. Sehingga penjual atau pengusaha dapat memamerkan
                  barang dagangan secara lebih luas dan dapat menjangkau
                  pembeli lebih banyak.
               </ProjectItem>
               <ProjectItem
                  title="Personal Profil (Samsul Muarrif)"
                  source="samsulmuarrif.me"
               >
                  Aplikasi web yang merupakan static site menggunakan <i>Github Pages</i>.
                  Sebuah personal profil dan blog yang dapat menjadi sebagai wadah <em>self branded</em> dan wadah untuk menyampaikan inspirasi-isnpirasi serta berbagi ilmu.
               </ProjectItem>
            </div>
         </div>
         <div className="flex gap-4">
            <YearTag>2021</YearTag>
            <ProjectItem title="Catalog App (Octo Poin)" source="octopoin.com">
               Sebuah aplikasi yang dapat menampilkan barang-barang dagangan
               dan juga terdapat <em>content management</em> untuk
               menampilkan postingan. Sehingga penjual atau pengusaha dapat
               memamerkan barang dagangan secara lebih luas dan dapat
               menjangkau pembeli lebih banyak dan juga menampilkan{" "}
               <em>insight</em>.
            </ProjectItem>
         </div>
         <div className="flex gap-4">
            <YearTag>2020</YearTag>
            <ProjectItem title="Blog App (Perahu Media)" source="perahumedia.herokuapp.com">
               Sebuah blog sederhana yang dibuat menggunakan Django
               Framework.
            </ProjectItem>
         </div>
      </div>
   )
}

function YearTag({ children }: { children: any }) {
   return (
      <div className="my-1 p-2 text-xs font-semibold rounded-full bg-orange-400 w-max h-max">
         {children}
      </div>
   )
}

function ProjectItem({ children, title, source }: { children: any, title: string, source: string }) {
   return (
      <div>
         <h5 className="font-semibold flex flex-col">
            {title}
            <Link
               className="text-sm font-light hover:text-sky-500"
               href={`https://${source}/`}
               target="_blank"
            >
               {source}
            </Link>
         </h5>
         <p className="text-sm md:text-base">
            {children}
         </p>
      </div>
   )
}