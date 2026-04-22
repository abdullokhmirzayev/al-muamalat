import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { KeyRound, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <>
      <h1 className='text-[86px] font-black text-slate-900 mb-10 leading-tight'>
        Get started
      </h1>

      <div className='flex flex-col gap-4'>
        <div className='relative'>
          <Input type='email' placeholder='Enter your email' className='pr-10 h-14 rounded-[10px] placeholder:text-xl' />
          <Mail className='absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400' />
        </div>

        <div className='relative'>
          <Input type='password' placeholder='Password' className='pr-10 h-14 rounded-[10px] placeholder:text-xl' />
          <KeyRound className='absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400' />
        </div>

        <Button className='h-14 rounded-[10px] bg-[#009688] hover:bg-teal-700 text-white font-semibold'>
          Sign in
        </Button>
      </div>

      <p className='text-center text-xl text-slate-500 mt-5'>
        Create a new account! <Link to='/sign-up' className='text-[#009688] font-medium hover:underline'>Sign up</Link>
      </p>
    </>
  )
}

export default SignInPage