// import { useUser } from '@auth0/nextjs-auth0/client'
import Link from "next/link";
import Image from "next/image";
import { Logo } from '../components/Logo';
//import HeroImage from '../public/hero.webp';


export default function Home() {
  // const {user} = useUser();
  // console.log('first', user)
  return (
  <div className="w-screen h-screen overflow-hidden flex justify-center items-start relative">
      <Image src="https://aarp-content.brightspotcdn.com/dims4/default/ec15888/2147483647/strip/true/crop/1279x704+0+0/resize/876x482!/format/webp/quality/90/?url=http%3A%2F%2Faarp-brightspot.s3.amazonaws.com%2Fcontent%2F9a%2Faa%2F12dbbe904ebc9b666d31ef7a7ec6%2Fkeytohappiness-by-elizabeth-brockway-1280x704.gif" alt="Hero" fill className="absolute" />
      {/* image credit - https://www.thegirlfriend.com/lifestyle/the-one-thing-more-important-than-happiness */}
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          AI-powered solution to generate SEO-optimized blog posts in minutes.
        </p>
        <Link href="/post/new" className="btn">
          Begin
        </Link>
      </div>
    </div>
    );
}
