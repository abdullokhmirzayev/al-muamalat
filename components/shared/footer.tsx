import Image from 'next/image'
import Link from 'next/link'
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
				<Link href='/' className='relative w-36 h-20'>
					<Image
						src='/images/footer-logo.png'
						alt='Footer Logo'
						fill
						className='object-contain'
					/>
				</Link>

				{/* Nav links */}
				<nav className='flex items-center gap-8'>
					{navLinks.map(link => (
						<Link
							key={link.label}
							href={link.href}
							className='text-white/90 text-lg font-normal hover:text-white transition-colors'
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Social icons */}
				<div className='flex items-center gap-5'>
					{socials.map(({ icon: Icon, href }, i) => (
						<Link
							key={i}
							href={href}
							className='text-white/80 hover:text-white transition-colors'
						>
							<Icon />
						</Link>
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
