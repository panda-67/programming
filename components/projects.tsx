import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="space-y-6">
        <h3>Current Project</h3>
        <div className="flex gap-4">
          <YearTag>{new Date().getFullYear()}</YearTag>
          <div className="space-y-8 my-1">
            <ProjectItem title="Notivra" source="notivra.com">
              Notivra is a modern Laravel + React business platform designed
              for: Managing services and client requests Running courses and
              lessons Generating invoices and integrating with online payments
              Delivering content via a Markdown-powered blog Supporting
              communication through email and ticketing This architecture makes
              it flexible for both academic services and general client-based
              projects.
            </ProjectItem>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h3>Recent Project</h3>
        <div className="flex gap-4">
          <YearTag>2024</YearTag>
          <div className="space-y-8 my-1">
            <ProjectItem
              title="Jroh Tijarah App"
              source="kuliner.jrohtijarah.com"
            >
              Aplikasi outlet perdagangan.
              <br />
              <small>
                (<em>under development</em>)
              </small>
            </ProjectItem>
            <ProjectItem title="Jroh Tijarah Klien" source="jrohtijarah.com">
              Aplikasi klien (owner) perdagangan.
              <br />
              <small>
                (<em>under development</em>)
              </small>
            </ProjectItem>
            <ProjectItem title="Umarhmu" source="app.umrahmu.com">
              The travel and membership app to help people to do hajj & umrah.
              Member will get mentoring session to advanced course and daily
              task about how to gain extra income and prepare themself to go to
              makkah.{" "}
            </ProjectItem>
          </div>
        </div>
        <div className="flex gap-4">
          <YearTag>2023</YearTag>
          <div className="space-y-8 my-1">
            <ProjectItem title="Graptail" source="graptail.net">
              <em>Re-layout</em> tampilan aplikasi web graptail, yang merupakan
              sebuah aplikasi web untuk menjual produk-produk kreatif (
              <em>market place</em>).
            </ProjectItem>
            <ProjectItem title="WebFont" source="creative.timoh.net">
              Menambahkan bebeapa fitur pada aplikasi WebFont, yang merupakan
              sebuah aplikasi web untuk menjual produk-produk kreatif (
              <em>market place</em>).
            </ProjectItem>
            <ProjectItem
              title="WebFont Documentation"
              source="doc.creative.timoh.net"
            >
              Sebuah aplikasi web untuk mengelola dokumentasi terhadap aplikasi
              web{" "}
              <Link
                className="hover:text-sky-500"
                href="https://creative.timoh.net/"
              >
                (Creative Platform)
              </Link>
              .
            </ProjectItem>
          </div>
        </div>
        <div className="flex gap-4">
          <YearTag>2022</YearTag>
          <div className="space-y-8 my-1">
            <ProjectItem title="DQA Dokumentasi" source="doc.dqa.sch.id">
              Sebuah aplikasi web untuk mengelola dokumentasi terhadap aplikasi
              web{" "}
              <Link className="hover:text-sky-500" href="https://dqa.sch.id/">
                (Darul Quran Aceh)
              </Link>{" "}
              pada halaman Admin.
            </ProjectItem>
            <ProjectItem
              title="Open Journal Systems (Journal Jeumpa)"
              source="ejurnalunsam.id/index.php/jempa/index"
            >
              Sebuah aplikasi untuk mengelola jurnal-jurnal ilmiah secara lebih
              rapi dan dengan alur kerja yang sudah terstruktur. Aplikasi ini
              memudahkan penulis untuk mempublikasikan jurnalnya dan juga
              memudahkan publisher dalam mengelola jurnal. Aplikasi ini dibangun
              dengan menggunakan cms OJS &nbsp;
              <Link
                className="hover:text-sky-500"
                href="https://pkp.sfu.ca/ojs/"
              >
                (Open Journal Systems)
              </Link>
              .
            </ProjectItem>
            <ProjectItem title="Catalog App (Rids Blades)" source="">
              Sebuah aplikasi yang dapat menampilkan barang-barang dagangan.
              Sehingga penjual atau pengusaha dapat memamerkan barang dagangan
              secara lebih luas dan dapat menjangkau pembeli lebih banyak.
            </ProjectItem>
            <ProjectItem
              title="Personal Profil (Samsul Muarrif)"
              source="panda-67.github.io"
            >
              Aplikasi web yang merupakan static site menggunakan{" "}
              <i>Github Pages</i>. Sebuah personal profil dan blog yang dapat
              menjadi sebagai wadah <em>self branded</em> dan wadah untuk
              menyampaikan inspirasi-isnpirasi serta berbagi ilmu.
            </ProjectItem>
          </div>
        </div>
        {/* <div className="flex gap-4">
            <YearTag>2021</YearTag>
            <ProjectItem title="Catalog App (Octo Poin)" source="octopoin.com">
               Sebuah aplikasi yang dapat menampilkan barang-barang dagangan
               dan juga terdapat <em>content management</em> untuk
               menampilkan postingan. Sehingga penjual atau pengusaha dapat
               memamerkan barang dagangan secara lebih luas dan dapat
               menjangkau pembeli lebih banyak dan juga menampilkan{" "}
               <em>insight</em>.
            </ProjectItem>
         </div> */}
      </div>
    </>
  );
}

function YearTag({ children }: { children?: any }) {
  return (
    <div className="my-1 pt-2 pl-2 text-xs font-semibold border-t border-l rounded-tl-2xl border-orange-500 text-stone-800 dark:border-amber-100 dark:text-amber-100 w-max h-max">
      {children}
    </div>
  );
}

function ProjectItem({
  children,
  title,
  source,
}: {
  children: any;
  title: string;
  source: string;
}) {
  return (
    <div className="border-l border-t rounded-tl-2xl border-emerald-800 pt-4 pl-4">
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
      <p className="text-sm md:text-base">{children}</p>
    </div>
  );
}
