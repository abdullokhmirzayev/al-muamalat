const Verify = () => {

	const verifySubmit = () => {
		const submitData  = {
			
		}
	}

	return (
		<div className='w-full'>
			<h2 className='text-4xl font-bold mb-4'>Verify your email</h2>
			<p className='text-slate-400 mb-8 text-lg'>
				We've sent a 6-digit code to your email. Please enter it below.
			</p>

			<form>
				{/* 6 talik kod uchun inputlar bu yerga keladi */}
				<div className='flex gap-4 mb-8'>
					{[1, 2, 3, 4, 5, 6].map((_, i) => (
						<input
							key={i}
							type='text'
							maxLength='1'
							className='w-14 h-16 border-2 border-slate-200 rounded-xl text-center text-2xl font-bold focus:border-[#009688] outline-none'
						/>
					))}
				</div>

				<button className='w-full bg-[#009688] text-white py-4 rounded-xl text-xl font-semibold hover:bg-[#00796b] transition-all'>
					Verify Account
				</button>
			</form>

			<p className='mt-8 text-center text-slate-500 text-lg'>
				Didn't receive a code?{' '}
				<span className='text-[#009688] cursor-pointer font-medium'>
					Resend
				</span>
			</p>
		</div>
	)
}
export default Verify
