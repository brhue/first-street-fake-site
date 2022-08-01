import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import VideoList from '../components/videoList'
import logo from '../public/assets/logo.png'

export default function Home({ videos }) {
  return (
    <div>
      <Head>
        <title>Real Fake Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-between items-center py-4 -mb-[86px]">
        <Link href="/">
          <a>
            <Image src={logo} alt="Fake Site logo" />
          </a>
        </Link>
        <div className="flex gap-8">
          <Link href="#">
            <a>Account</a>
          </Link>
          <Link href="#">
            <a>Help</a>
          </Link>
          <Link href="#">
            <a>
              <div className="border border-white rounded-full w-[30px] h-[30px]">
                <Image
                  src={videos[0].user_portrait_small}
                  width="30px"
                  height="30px"
                  alt="User portrait"
                  className="rounded-full"
                />
              </div>
            </a>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-[86px] mb-10 bg-hero-image bg-cover bg-center bg-no-repeat aspect-[21/9] flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white mb-[22px]">The world&apos;s greatest fake site</h1>
        <p className="text-[22px] leading-7 text-white mb-[22px]">
          Create the world&apos;s greatest fake site and enjoy the breeze of fresh air when you complete it
        </p>
        <button className="min-h-[55px] text-white text-[22px] bg-redish px-4 rounded-full">
          Do something awesome
        </button>
      </div>

      <main className="mb-10">
        <VideoList videos={videos} />
        <div className="text-center">
          <h2 className="text-4xl leading-9 text-blackish mb-[22px]">Ready to have your cake and eat it too?</h2>
          <p className="text-[22px] leading-7 text-blackish">
            Start by designing the experience you have in mind. We&apos;ll guide you through each step. If your
            experience meets the quality standards, you&apos;ll hear more about what&apos;s next.
          </p>
        </div>
      </main>

      <footer>
        <div className="grid mb-10 text-center space-y-10">
          <div>
            <h3 className="font-bold text-redish">Fakesite</h3>
            <ul>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">About us</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Press</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Policies</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Help</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-redish">Account</h3>
            <ul>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Edit Profile</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Friends</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Social</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-blueish hover:text-blackish active:text-blueish">Delete Profile</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Fake Site logo" />
          <div className="flex gap-4">
            <Link href="#">
              <a className="text-blueish hover:text-blackish active:text-blueish">Terms</a>
            </Link>
            <Link href="#">
              <a className="text-blueish hover:text-blackish active:text-blueish">Privacy</a>
            </Link>
            <Link href="#">
              <a className="text-blueish hover:text-blackish active:text-blueish">Site Map</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  let res = await fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json')
  let videos = await res.json()

  return {
    props: {
      videos,
    },
  }
}
