import Image from 'next/image'
// import ArrowRight from '../assets/arrow-right.svg'
import Logo from '../assets/dancing-logo1.png'
// import MenuIcon from '../assets/menu.svg'

export const Header = () => {
	return (
		<header className=' bg-my-secondary z-20 '>
			<div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
				<p className='text-white/60 hidden md:block'>
					Streamline your workflow and boost your productivity
				</p>
				<div className='inline-flex gap-1 items-center'>
					<p>Get started for free</p>
					{/* <ArrowRight className='w-4 h-4 inline-flex justify-center items-center' /> */}
				</div>
			</div>
			<div className='py-5'>
				<div className='container mx-auto'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<Image
								src={Logo}
								alt='Saas Logo'
								height={50}
								width={50}
								className=''
							/>
							<div className='flex flex-col items-stretching leading-5'>
								<p className='uppercase mx-auto font-bold text-center tracking-widest'>
									rura
								</p>
								<p className='uppercase me-auto tracking-tight font-semibold'>
									dance
								</p>
							</div>
						</div>
						{/* <MenuIcon className='w-5 h-5 md:hidden' /> */}
						<nav className='hidden md:flex gap-6 text-black/60 items-center'>
							<a href=''>Features</a>
							<a href=''>About</a>
							<a href=''>Testimonials</a>
							<a href=''>Prices</a>
							<a href=''>FAQ</a>
							<button className='bg-black hover:bg-my-accent text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight'>
								Book a Class
							</button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
