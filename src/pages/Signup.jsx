import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/ContextProvider'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Signup() {
    const navigate = useNavigate()
    const [see, setSee] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { logInByGoogle, createUser, setUserData, logInByGithub, user } = useContext(AuthContext)

    const onSubmit = (data) => {
        const { email, password } = data;

        if (password.length < 6) {
            toast("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast("Password must contain at least one lowercase letter.");
            return;
        }
        createUser(email, password)
            .then((e) => {
                updateProfile(e.user, {
                    displayName: data.name,
                    photoURL: data.photo
                })
                navigate('/');
                toast("Signup successful")
            })
            .catch(e => toast(e.message));

        reset();
    }


    const googleSignIn = () => {
        logInByGoogle()
            .then(e => navigate('/'))
            .catch(e => toast(e.message))
    }
    const gitHubSignIn = () => {
        logInByGithub()
            .then(e => navigate('/'))
            .catch(e => toast(e.message))
    }
    return (
        <div className="flex flex-col justify-cente items-center  border-2 w-fit mx-auto px-10 py-10">
            <h2 className='text-4xl font-semibold mb-5 text-[#016022]'>SignUp</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='text-black outline-none border-b-2 w-full  bg-transparent text-xl mb-5 pr-20'
                    {...register("name", { required: true })}
                    type="name"
                    placeholder='Your Name'
                />
                <br />
                {errors.password && <span className="text-red-600">Name is required</span>}
                <br />
                <input
                    className='text-black outline-none border-b-2 w-full  bg-transparent text-xl mb-5 pr-20'
                    {...register("email", { required: true })}
                    type="email"
                    placeholder='Email'
                />
                <br />
                {errors.password && <span className="text-red-600">Email is required</span>}
                <br />
                <input
                    className='text-black outline-none border-b-2 w-full  bg-transparent text-xl mb-5 pr-20'
                    {...register("photo", { required: true })}
                    type="photo"
                    placeholder='Your Photo'
                />
                <br />
                {errors.password && <span className="text-red-600">Photo is required</span>}
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

                <button className='bg-[#016022] text-white w-full p-2 mt-10 rounded-xl'>
                    SignUp
                </button>
                <p className='my-3'>Already have an account ? <Link to={'/signin'} className='text-[#016022] font-bold'>SignIn</Link></p>
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

export default Signup