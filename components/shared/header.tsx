'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='fixed top-0 w-full border-b bg-white z-50'>
			<div className='container mx-auto flex h-20 items-center justify-between px-4'>
				{/* Logo Qismi */}
				<Link
					href='/'
					className='flex items-center gap-2 group relative w-59.75 h-14'
				>
					<Image
						src='/images/logo.png'
						alt='Logo'
						fill
						className='object-contain'
					/>
				</Link>

				{/* Markaziy Menyu */}
				<NavigationMenu className='hidden lg:flex'>
					<NavigationMenuList className='gap-1'>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href='/'
									className={cn(
										navigationMenuTriggerStyle(),
										'text-[#1b2120] font-medium hover:text-[#00897B] focus:text-[#00897B]',
									)}
								>
									Home
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuTrigger className='text-gray-600 font-medium hover:text-[#00897B] transition-colors'>
								Programs
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								{/* Konteyner o'lchamlarini moslashtiramiz */}
								<ul className='w-72'>
									{/* O'ng tomondagi boyagi ro'yxat qismi */}
									<div className='flex flex-col'>
										{[
											{
												title: 'International educational programs',
												href: '/p1',
												active: false,
											},
											{ title: 'Specialized courses', href: '/p2' },
											{ title: 'Islamic Finance Literacy Course', href: '/p3' },
											{ title: 'Certification program', href: '/p4' },
										].map((item, index, array) => (
											<li key={index} className='w-full'>
												<NavigationMenuLink asChild>
													<Link
														href={item.href}
														className={`
                  block select-none py-3 px-3 no-underline outline-none transition-colors rounded-sm
                  hover:bg-slate-50 group
                  ${index !== array.length - 1 ? 'border-b border-gray-100' : ''}
                `}
													>
														<span
															className={`text-[14px] font-medium leading-none transition-colors ${
																item.active
																	? 'text-[#00897B]'
																	: 'text-gray-500 group-hover:text-[#00897B]'
															}`}
														>
															{item.title}
														</span>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</div>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href='/finance'
									className={cn(
										navigationMenuTriggerStyle(),
										'text-gray-600 font-medium hover:text-[#00897B]',
									)}
								>
									Finance tools
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									href='/contact'
									className={cn(
										navigationMenuTriggerStyle(),
										'text-gray-600 font-medium hover:text-[#00897B]',
									)}
								>
									Contact
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				{/* O'ng tomon: Til va Sign In */}
				<div className='flex items-center gap-2'>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant='ghost'
								className='flex items-center gap-2 px-2 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent group'
							>
								<div className='relative w-6 h-4 overflow-hidden rounded-xs border border-gray-100'>
									<Image
										src='/images/en.png'
										alt='English'
										fill
										className='object-cover'
									/>
								</div>
								<span className='font-semibold text-[14px] text-gray-700 uppercase'>
									Eng
								</span>
								<ChevronDown className='h-4 w-4 text-gray-400 group-data-[state=open]:rotate-180 transition-transform' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end' className='min-w-30'>
							<DropdownMenuItem className='flex items-center gap-3 cursor-pointer py-2'>
								<Image
									src='/images/uzb.png'
									alt='Uzbek'
									width={22}
									height={14}
									className='rounded-[1px]'
								/>
								<span className='text-sm font-medium'>UZB</span>
							</DropdownMenuItem>
							<DropdownMenuItem className='flex items-center gap-3 cursor-pointer py-2 border-t'>
								<Image
									src='/images/en.png'
									alt='English'
									width={22}
									height={14}
									className='rounded-[1px]'
								/>
								<span className='text-sm font-medium'>ENG</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<div className='h-8 w-[1.5px] bg-gray-200 mx-3' />

					<Link href='/sign-in'>
						<Button className='bg-[#00897B] hover:bg-[#00796B] text-white px-7 py-5 rounded-[10px] text-[15px] font-medium transition-all shadow-sm active:scale-95 curpo'>
							Sign in
						</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
