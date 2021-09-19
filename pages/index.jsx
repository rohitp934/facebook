import { getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
export default function Home() {
	const [session, loading] = useSession()
	if (!session) return <Login />
	return (
		<div>
			<Head>
				<title>Facebook</title>
				<meta name='description' content='Facebook Clone by Rohit Prakash' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
		</div>
	)
}

export const getServerSideProps = async (context) => {
	//Get user props;
	const session = await getSession(context)

	return {
		props: {
			session,
		},
	}
}
