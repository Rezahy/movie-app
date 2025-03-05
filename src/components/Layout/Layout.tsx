import Nav from "./nav/Nav";
import Header from "./header/Header";
import { FC } from "react";
import useAppPersist from "../../hooks/useAppPersist";
import { APP_BOOKMARKED_MOVIES_STORAGE_KEY } from "../../utils/storageKey";

interface PropTypes {
	children: React.ReactNode;
}
const Layout: FC<PropTypes> = ({ children }) => {
	useAppPersist(APP_BOOKMARKED_MOVIES_STORAGE_KEY);
	return (
		<div className="min-h-screen bg-neutral-900 py-20 px-10">
			<div className="max-w-6xl mx-auto text-neutral-300">
				<Nav />
				<Header />
				{children}
			</div>
		</div>
	);
};
export default Layout;
