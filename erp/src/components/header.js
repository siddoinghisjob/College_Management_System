import { UserIcon} from "@heroicons/react/solid";

function Header(props) {
  const pageUpdate = props.func
  return (
    <div className="grid sm:gird-rows-3 grid-row-1 bg-header shadow-xl left-0 md:text-left h-auto p-2 w-screen">
      <span className="left-0 sm:left-auto">
        <h1 onClick={() => pageUpdate("main")} className="cursor-pointer text-4xl text-yellow-400" >Prima ERP</h1>
        <h3 className="text-xl text-white">
          Powerful ERP for Powerful organisations
        </h3>
      </span>
      <span className="sm:absolute left-[43%] left:0">
        <form className="p-4 m-auto">
          <input
            className="p-2 rounded-md bg-slate-200 text-md lg:w-full hover:w-72 transition-all duration-300 origin-center cursor-pointer focus:placeholder-black"
            placeholder="Search"
          ></input>
        </form>
      </span>
      <span className="align-middle lg:absolute lg:mt-2 lg:right-0 sm:left:0 md:left:0 text-white text-lg flex flex-row text-center">
        <h1 className="m-auto">Birla Institute of Technology</h1>
        <span className="group">
          <UserIcon className="ml-6 cursor-pointer w-12 h-12 mr-3" />
          <p className="absolute bg-white border text-black shadow rounded-sm p-2 m-2 scale-0 group-hover:scale-100 transition-all duration-100 origin-top">
            Profile
          </p>
        </span>
      </span>
    </div>
  );
}

export default Header;