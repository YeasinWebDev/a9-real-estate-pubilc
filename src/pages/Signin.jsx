import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { AuthContext } from "../Provider/ContextProvider"
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


export default function App() {
    const [see, setSee] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { signIn, logInByGoogle, logInByGithub } = useContext(AuthContext)


    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(e => {
                navigate(location.state || '/'),
                    toast('signIn succesfull')
            })
            .catch(e => toast(e.message))
        reset()
    }

    const googleSignIn = () => {
        logInByGoogle()
            .then(e => {
                navigate(location.state || '/'),
                    toast('signIn succesfull')
            })
            .catch(e => toast(e.message))
    }

    const gitHubSignIn = () => {
        logInByGithub()
            .then(e => {
                navigate(location.state || '/'),
                    toast('signIn succesfull')
            })
            .catch(e => toast(e.message))
    }


    return (
        <div className="flex flex-col justify-center items-center  border-2 w-fit mx-auto px-10 py-10 my-5 rounded-xl">
            <h2 className='text-4xl font-semibold mb-5 text-[#016022]'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='text-black outline-none border-b-2 w-full  bg-transparent text-xl mb-5 pr-20'
                    {...register("email", { required: true })}
                    type="email"
                    placeholder='Email'
                />
                <br />
                {errors.password && <span className="text-red-600">Email is required</span>}
                <br />
                <div className="flex">
                    <input
                        {...register("password", { required: true })}
                        className='text-black outline-none border-b-2 w-full  bg-transparent text-xl mb-5 pr-20'
                        type={!see ? "password" : 'text'}
                        placeholder='Password'
                    />
                    <div>
                        {see ? <span className="cursor-pointer" onClick={() => setSee(!see)}><FaRegEyeSlash size={20} /></span> : <span className="cursor-pointer" onClick={() => setSee(!see)}><FaRegEye size={20} /></span>}
                    </div>

                </div>
                <br />
                {errors.password && <span className="text-red-600">Password is required</span>}
                <div className='flex gap-[69px] mt-10'>
                    <label>
                        <input
                            type="checkbox"
                            {...register("checkbox", { required: true })}
                        />
                        <span className="ml-2">Remember Me</span>
                    </label>
                    <h1 className='border-b-2 border-[#016022] text-[#016022]'><Link>Forgot Password</Link></h1>
                </div>
                {errors.checkbox && <span className="text-red-600">Please check the box</span>}
                <button className='bg-[#016022] text-white w-full p-2 mt-10 rounded-xl'>
                    Login
                </button>
                <p className='my-3'>Don't have an account ? <Link to={'/signup'} className='text-[#016022] font-bold'>Create an account</Link></p>
                <div className='text-xl w-full '>--------------------- or ----------------------</div>
                <div className="flex items-center justify-center flex-col">
                    <h1 className='mb-3 text-xl'>Continue with</h1>
                    <div className='flex items-center justify-center gap-5 cursor-pointer'>
                        <div className='w-12 h-12' onClick={gitHubSignIn}>
                            <img className='w-full h-full object-contain' src='https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png' alt="" />
                        </div>
                        <div className='w-10 h-10' onClick={googleSignIn}>
                            <img className='w-full h-full object-contain' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png' alt="" />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}