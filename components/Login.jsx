import Image from 'next/image'
import { signIn } from 'next-auth/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Login = () => {
	return (
		<div className='flex flex-col items-center'>
			<Image
				src='https://links.papareact.com/t4i'
				height={400}
				width={400}
				objectFit='contain'
				alt='Login'
			/>
			<h1 className='text-3xl font-semibold'>Login to Facebook</h1>
			<div
				className='p-5 m-5 mt-20 flex items-center  bg-gray-100
				rounded-3xl hover:bg-black transition duration-300 
				cursor-pointer group'
				onClick={() => {
					signIn('github')
				}}
			>
				<FontAwesomeIcon
					size='3x'
					icon={faGithub}
					className='group-hover:hidden'
				/>
				<FontAwesomeIcon
					inverse
					size='3x'
					icon={faGithub}
					className='hidden group-hover:block'
				/>
				<p className='text-xl pl-6 group-hover:text-white'>
					Sign in with Github
				</p>
			</div>
		</div>
	)
}

export default Login
