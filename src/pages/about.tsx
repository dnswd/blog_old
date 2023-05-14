import NavBar from "@/components/NavBar";
import Link from "next/link"

export default function About() {
  return (
    <div className="relative text-rose-50">
      <NavBar />
      <main className="h-screen">
        <div className="absolute top-0 left-0 w-full overflow-hidden bg-dark-canvas">
        <div className="relative mx-auto my-40 sm:my-4/16 xl:my-2/16 w-screen-65">
            <div className="w-screen-50 prose prose-rose text-lg">
              <p>
                Hi I’m Dennis and I’m a software engineer. I got into coding since I was 10 years old, when 
                I discovered my <Link href="https://www.computinghistory.org.uk/det/7088/The-Computer-Tutor-A-Complete-Masterclass-for-Your-Micro/">grandpa’s book about BASIC</Link>.
                Then, I was obsessed about computer malwares and ended up learning how malwares cleverly made and ways to reverse engineer them.
              </p>
              <p>
                Later on, I started to jump into more and more languages, technologies, 
                and projects. I joined University of Indonesia and met lots of awesome
                friends and professors. There are so much stuffs I learned in the past
                two decades and I wanted a place to share all of my thoughts, so I
                built this site!
              </p>
            </div>
          </div>
          <section className="flex flex-col justify-between mx-auto mb-40 sm:flex-row my-10 sm:mt-10 w-screen-65 sm:gap-0">
            <article className="flex flex-col w-full text-lg sm:text-lg prose prose-rose">
              <h2>Quick Bio</h2>
              <table>
                <tr>
                  <td>Name:</td>
                  <td>Dennis A. Walangadi</td>
                </tr>
                <tr>
                  <td>Timezone:</td>
                  <td>ICT (UTC +7)</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>Jakarta, Indonesia</td>
                </tr>
                <tr>
                  <td>Hotel:</td>
                  <td>Trivago</td>
                </tr>
              </table>
              <h2>Reach me on the Internet</h2>
              <table>
                <tr>
                  <td className="align-top">Email(s):</td>
                  <td>
                    <ul className="m-0">
                      <li className="m-0"><Link href="mailto:dennis@halcyon.id">dennis@halcyon.id</Link></li>
                      <li className="m-0"><Link href="mailto:dennis.al@ui.ac.id">dennis.al@ui.ac.id</Link></li>
                      <li className="m-0"><Link href="mailto:dennis.walangadi@gmail.com">dennis.walangadi@gmail.com</Link></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>GitHub:</td>
                  <td><Link href="https://github.com/dnswd">dnswd</Link></td>
                </tr>
                <tr>
                  <td>GitLab:</td>
                  <td><Link href="https://gitlab.com/Artemis1872">Artemis1872</Link></td>
                </tr>
                <tr>
                  <td>Codewars:</td>
                  <td><Link href="https://www.codewars.com/users/dennisaw">dennisaw</Link></td>
                </tr>
                <tr>
                  <td>Twitter (mostly complaints):</td>
                  <td><Link href="https://twitter.com/dnnswd">dnnswd</Link></td>
                </tr>
              </table>
            </article>
          </section>
          <div className="grain"></div>
        </div>
      </main>
    </div>
  );
}
