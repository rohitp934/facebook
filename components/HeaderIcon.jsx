const HeaderIcon = ({ Icon, active }) => {
	return (
		<div
			className='flex items-center cursor-pointer lg:px-5 md:px-1 sm:h-14
				md:hover:bg-gray-100 rounded-xl transition duration-300
				md:active:border-b-2 md:active:border-blue-500 group'
		>
			<Icon
				className={`h-5 text-center sm:h-7 mx-auto text-gray-500 
					group-hover:text-blue-500 ${active && 'text-blue-500'}`}
			/>
		</div>
	)
}

export default HeaderIcon
