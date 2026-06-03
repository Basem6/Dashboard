import { admin } from "../utils/data";

export default function Header({ title = "Scholarship Monitoring Dashboard" }) {
  return (
    <header className="flex justify-between items-start p-3 mt-0.5 gap-2 min-w-full max-w-full flex-wrap nav-top">
      <div className="title-left w-1/2 text-2xl">
        <span className="font-bold">Scholar Track Hub</span>:{title}
      </div>
      <div className="search w-36 h-7 relative">
        <span className="fa-solid fa-search absolute right-3 text-gray-400 text-sm top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#13161b] rounded-lg border-none outline-2 focus:outline outline-[#5b9efcbb] py-0.5 px-3 caret-[#78abf2] w-full h-full pr-11"
        />
      </div>
      <div className="user-admin ml-2 flex flex-wrap gap-3 items-start md:hidden sm:hidden lg:flex">
        <div className="relative bell">
          <span className="fa-regular fa-bell" />
        </div>
        <div className="admin-details flex gap-3 relative bottom-1 items-start">
          <div className="image w-9 h-9">
            <img src={admin.photo} alt="" loading="lazy" className="w-full h-full rounded-full" />
          </div>
          <div className="name flex gap-2 items-center">
            <div className="flex flex-col items-center">
              <span>{admin.name}</span>
              <span className="text-gray-400 text-sm">{admin.role}</span>
            </div>
            <span className="fa-solid fa-angle-down" />
          </div>
        </div>
      </div>
    </header>
  );
}
