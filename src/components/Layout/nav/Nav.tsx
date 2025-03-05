import { IoIosHome, IoMdBookmark } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="w-full mb-4">
			<ul className="w-full flex justify-end space-x-3 text-3xl">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "text-neutral-300" : "text-neutral-600"
						}
					>
						<IoIosHome className="cursor-pointer" />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/bookmarked"
						className={({ isActive }) =>
							isActive ? "text-neutral-300" : "text-neutral-600"
						}
					>
						<IoMdBookmark className="cursor-pointer" />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Nav;
