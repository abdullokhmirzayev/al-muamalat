import { FacebookIcon } from './icons/facebook-icon'
import { InstagramIcon } from './icons/instagram-icon'
import { TwitterXIcon } from './icons/twitterx-icon'
import { YoutubeIcon } from './icons/youtube-icon'

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Service', href: '/service' },
	{ label: 'Contact Us', href: '/contact' },
]

const socials = [
	{ icon: YoutubeIcon, href: '#' },
	{ icon: FacebookIcon, href: '#' },
	{ icon: TwitterXIcon, href: '#' },
	{ icon: InstagramIcon, href: '#' },
]

export function Footer() {
	return (
		<footer className='w-full bg-[#009688]'>
			<div className='container mx-auto px-6 py-10 flex flex-col items-center gap-6'>
				{/* Logo */}
				<a href='/' className='relative w-36 h-20'>
					<image
						src='/images/footer-logo.png'
						alt='Footer Logo'
						fill
						className='object-contain'
					/>
				</a>

				{/* Nav links */}
				<nav className='flex items-center gap-8'>
					{navLinks.map(link => (
						<a
							key={link.label}
							href={link.href}
							className='text-white/90 text-lg font-normal hover:text-white transition-colors'
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Social icons */}
				<div className='flex items-center gap-5'>
					{socials.map(({ icon: Icon, href }, i) => (
						<a
							key={i}
							href={href}
							className='text-white/80 hover:text-white transition-colors'
						>
							<Icon />
						</a>
					))}
				</div>

				{/* Divider */}
				<div className='w-full border-t border-white' />

				{/* Copyright */}
				<p className='text-white/70 text-sm'>Copyright Satyam Studio</p>
			</div>
		</footer>
	)
}
