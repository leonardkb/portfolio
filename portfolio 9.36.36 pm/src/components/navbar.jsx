import { Link, useLocation } from "react-router-dom";

const link = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Music",
        link: "/music",
    },
    {
        name: "Photography",
        link: "/photography",
    },{
        name: "Project",
        link: "/project",
    }
]

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="">
            <div className="text-5xl leading-snug absolute bg-gradient-to-r from-red-100 via-fuchsia-400 to-fuchsia-500 text-transparent bg-clip-text opacity-50 start-3/4 top-2/3">
                <ul className="list-none">
                    {link.map((item, index) => {
                        const isActive = item.link === location.pathname;
                        return (
                            <li key={index} className={`border-b-4 border-fuchsia-300 cursor-pointer ${isActive ? 'opacity-50' : ''}`}>
                                <Link to={item.link} className="z-10">{item.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
