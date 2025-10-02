import Image from 'next/image'
import grainImage from '@/assets/grain.webp'
import { Header } from '@/sections/Header'
export default function Home() {
	return (
		<>
			<Header />
			<section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-linear-to-l from-my-primary/95 to-my-primary/80 overflow-x-clip'>
				<div className=' flex min-h-screen flex-col items-center justify-center p-24'>
					<div
						className='absolute inset-0 -z-30 opacity-60'
						style={{ backgroundImage: `url(${grainImage.src})` }}
					></div>
					<h1 className='font-normal tracking-widest font-angst text-6xl text-my-accent uppercase'>
						rura dance academy
					</h1>
					<h1 className='font-normal tracking-widest font-angst text-6xl text-my-secondary uppercase'>
						about us
					</h1>
				</div>
			</section>
		</>
	)
}
