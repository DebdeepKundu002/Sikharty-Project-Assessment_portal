import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
    <form className='flex flex-col gap-4'>
      <input
        type='email'
        placeholder='Email'
        className='border p-3 rounded-lg'
        id='email'
      />
      <input
        type='password'
        placeholder='Password'
        className='border p-3 rounded-lg'
        id='password'
      />
      <button
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
      Sign In
      </button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to='/signup'>
        <span className='text-blue-700'>Sign up</span>
      </Link>
    </div>    
  </div>
  )
}

export default Login