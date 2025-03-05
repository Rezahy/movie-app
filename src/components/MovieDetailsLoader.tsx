const MovieDetailsLoader = () => (
	<div
		role="status"
		className="pt-16 grid grid-cols-1 md:grid-cols-6 gap-y-7 md:gap-0 md:gap-x-7 animate-pulse"
	>
		<div className="col-span-1 md:col-span-2 bg-[#262626] rounded flex justify-center items-center h-[400px] md:h-[450px]">
			<svg
				className="w-10 h-10 text-gray-600"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 18"
			>
				<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
			</svg>
		</div>
		<div className="col-span-1 md:col-span-4 flex flex-col justify-center  space-y-3 ">
			<div className="flex flex-row-reverse">
				<div className="h-5 bg-[#262626] rounded-full  w-40 "></div>
			</div>
			<div className="h-2.5 bg-[#262626] rounded-full  w-48 "></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[480px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[440px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[460px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[360px]"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[480px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[440px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[460px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[360px]"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[480px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[440px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[460px] mb-2.5"></div>
			<div className="h-2.5 bg-[#262626] rounded-full  max-w-[360px]"></div>
		</div>
		<span className="sr-only">Loading...</span>
	</div>
);
export default MovieDetailsLoader;
