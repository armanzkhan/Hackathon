// import { AiOutlineUser } from "react-icons/ai";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoSearchOutline } from "react-icons/io5";

// export default function Header (){
//     return (
//       <header className="text-gray-600 body-font w-1320px h-87px">
//       <div className="container mx-auto flex flex-wrap p-5 pl-32 flex-col md:flex-row items-center">
//         {/* Logo */}
//         <span className="text-lg font-semibold mr-20">
//           <span className="text-white">Food</span>
//           <span className="text-orange-500">tuck</span>
//         </span>
//         {/* Navigation */}
//         <nav className="border-black bg-black flex flex-wrap items-center text-base justify-center gap-x-4">
//           <a className="mr-5 text-white">Home</a>
//           <a className="mr-5 text-white">Menu</a>
//           <a className="mr-5 text-white">Blogs</a>
//           <a className="mr-5 text-white">Pages</a>
//           <a className="mr-5 text-white">About</a>
//           <a className="mr-5 text-white">Shop</a>
//           <a className="mr-5 text-white">Contact</a>
//         </nav>
//         {/* Icons import from react icons. */}
//         <div className="flex items-center gap-x-4 text-white pl-20">
//         <IoSearchOutline className="text-xl"/>
//         <HiOutlineShoppingBag className="text-xl"/>
//         </div>
//       </div>
//     </header>
//     );
// }
import { AiOutlineUser } from "react-icons/ai";
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
