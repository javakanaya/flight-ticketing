import { Component } from "react";
import { Link, Head } from "@inertiajs/react";
import { MenuItems } from "./MenuItems";
import { FaPlane } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ApplicationLogo from "./ApplicationLogo";
import "../../css/home.css";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };
    render() {
        const { user } = this.props;
        return (
            <nav className=" z-10 absolute flex flex-row justify-between items-center w-[70%] bg-[#fff] h-[50px] rounded-full top-[20px] left-[50%] transform -translate-x-1/2">
                <Link href="/">
                    <ApplicationLogo className="ml-8 block h-6 w-auto fill-current text-gray-800" />
                </Link>

                <div>
                    <ul className="items-center flex gap-5">
                        {MenuItems.map((item, index) => {
                            return (
                                (user == null || (!user.is_admin || item.disabled === 0)) && (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                            );
                        })}

                    </ul>
                </div>

                <div className="flex gap-4 mr-3">
                    {user ? (
                        <>
                            <Link
                                className="  text-gray-800 flex items-center gap-3 hover:shadow-md hover:border-2 hover:border-gray-300 rounded-3xl p-2"
                                href={route("profile.edit")}
                            >
                                <FaRegUser />
                                {user.name}
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="bg-[#60cff4] text-[#fff] px-[0.8rem] py-[0.3rem] rounded-lg hover:bg-[#fff] hover:text-[#60cff4]"
                            >
                                Login
                            </Link>
                            <Link
                                href={route("register")}
                                className=" text-[#60cff4] px-[0.8rem] py-[0.3rem] rounded-lg"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        );
    }
}

export default Navbar;
