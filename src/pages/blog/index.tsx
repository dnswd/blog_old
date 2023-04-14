import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header className="py-8">
        <h1 className="text-center text-6xl m-6">Dennis Walangadi</h1>

        <nav>
          <ul className="flex flex-row justify-center align-center gap-8">
            <li>About</li>
            <li>Archive</li>
            <li>Series</li>
            <li>Source Code</li>
            <li>Kambing</li>
          </ul>
        </nav>
      </header>
      <main className="max-w-screen-md m-auto p-6">
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
        <div className="relative pb-7">
          <span className="absolute -left-14 top-1 text-right slashed-zero lining-nums tabular-num">
            01/01
            <br />
            2023
          </span>
          <div className="font-bold text-2xl pb-2">
            Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            harum neque modi odit, sit sapiente voluptatum quo nihil sed,
            deleniti quasi placeat! Nam architecto quam, libero illum esse
            repudiandae dignissimos.
          </div>
          <span className="text-ellipsis">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            dicta odio cumque laboriosam! Adipisci maxime corrupti eos cum
            officia. Soluta corporis et repellendus corrupti, quod tenetur rem
            accusamus nostrum eius.
          </span>
        </div>
      </main>
    </div>
  );
}
