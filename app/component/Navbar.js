"use client"
import {useRouter} from "next/navigation";
import {useContext} from "react";
import {ShopContext} from "@/app/context/ShopContext";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter()
    const {getTotalCartItems} = useContext(ShopContext)

    return (
        <nav className="flex bg-cyan-400 w-full p-4 flex-row ">
            <div>
                <Link href="/">
                    <h1>
                        Ecommerce
                    </h1>
                </Link>

            </div>

            <div className="ml-auto flex gap-2">
                 <span onClick={()=> router.push("/cart")}>    🛒 {
                     getTotalCartItems()
                 }</span>
            </div>
        </nav>
    );
};

export default Navbar;