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
        <meta name="description" content="First Street coding assignment" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      {/* Hero */}
      <div className="mb-10 bg-hero-image bg-cover bg-center bg-no-repeat aspect-[21/9] flex flex-col">
        <nav className="flex justify-between items-center py-4 mx-4 md:mx-8 lg:mx-16">
          <Link href="/">
            <a>
              <Image src={logo} alt="Fake Site logo" />
            </a>
          </Link>
          <div className="flex gap-4 md:gap-8">
            <Link href="#">
              <a className="text-white hover:text-blackish active:text-blueish">Account</a>
            </Link>
            <Link href="#">
              <a className="text-white hover:text-blackish active:text-blueish">Help</a>
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

        <div className="mx-4 md:mx-8 lg:mx-16 pb-4 flex flex-col items-center justify-center text-center flex-grow">
          <h1 className="text-4xl md:text-5xl text-white mb-[22px]">The world&apos;s greatest fake site</h1>
          <p className="text-xl leading-7 md:text-[22px] text-white mb-[22px]">
            Create the world&apos;s greatest fake site and enjoy the breeze of fresh air when you complete it
          </p>
          <button
            className="min-h-[55px] text-white text-xl md:text-[22px] bg-redish px-4 rounded-full"
            onClick={() => {
              window.location = 'https://firststreet.org'
            }}
          >
            Do something awesome
          </button>
        </div>
      </div>

      <main className="mb-10">
        <div className="mx-4 md:mx-8 lg:mx-16">
          <VideoList videos={videos} />
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl leading-9 text-blackish mb-[22px]">
              Ready to have your cake and eat it too?
            </h2>
            <p className="text-xl md:text-[22px] leading-7 text-blackish">
              Start by designing the experience you have in mind. We&apos;ll guide you through each step. If your
              experience meets the quality standards, you&apos;ll hear more about what&apos;s next.
            </p>
          </div>
        </div>
      </main>

      <footer className="mx-4 md:mx-8 lg:mx-16">
        <div className="mb-10 text-center space-y-10 flex flex-col sm:flex-row sm:gap-16 sm:space-y-0 sm:text-left md:gap-32">
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
        <div className="flex justify-between items-center border-t border-[#e8e8e8] py-2">
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
