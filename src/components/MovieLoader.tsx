import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const MovieLoader = () => (
	<SkeletonTheme baseColor="#262626" highlightColor="#404040">
		<div>
			<Skeleton height={400} className="rounded-xl" />
			<Skeleton className="rounded-full h-[10px]" />
			<Skeleton className="rounded-full h-[8px] w-1/5 min-w-[68px] " />
		</div>
	</SkeletonTheme>
);

export default MovieLoader;
