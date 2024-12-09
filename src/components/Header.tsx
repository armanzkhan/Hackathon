import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

export default function Header () {
    return (
      <header className="text-gray-600 body-font w-full h-auto">
        {/* First row: Centered FoodTuck text */}
        <div className="flex justify-center py-5">
          <span className="text-lg font-semibold">
            <span className="text-white">Food</span>
            <span className="text-orange-500">tuck</span>
          </span>
        </div>

        {/* Second row: Navigation and icons */}
        <div className="container mx-auto flex flex-wrap items-center justify-between px-5">
          {/* Navigation */}
          <nav className="flex flex-wrap items-center text-base gap-x-4">
            <a className="text-white">Home</a>
            <a className="text-white">Menu</a>
            <a className="text-white">Blogs</a>
            <a className="text-white">Pages</a>
            <a className="text-white">About</a>
            <a className="text-white">Shop</a>
            <a className="text-white">Contact</a>
          </nav>

          {/* Icons on the right side */}
          <div className="flex items-center gap-x-4 text-white">
            <IoSearchOutline className="text-xl"/>
            <HiOutlineShoppingBag className="text-xl"/>
          </div>
        </div>
      </header>
    );
}
