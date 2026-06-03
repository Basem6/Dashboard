import DropdownFilter from "../components/DropdownFilter";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import SummaryCards from "../components/SummaryCards";
import { admin, documentInventory } from "../utils/data";

const cards = [
  { label: "Total Documents", value: "24,145", icon: "fa-regular fa-user text-[#92bcf8]" },
  { label: "Awaiting Reviews", value: "410", icon: "fa-regular fa-newspaper text-[#f4c732d0]" },
  { label: "Approved This Week", value: "109", icon: "fa-regular fa-circle-check text-[#157351]" },
  { label: "Expired/Missing Document", value: "63", icon: "fa-solid fa-ban text-[#b779f0]" },
];

export default function DocumentsPage() {
  return (
    <>
      <Header />
      <SummaryCards cards={cards} />
      <div className="mt-3 px-3 min-w-full">
        <div className="nav-middle min-w-full bg-[#16181c] min-h-16 mt-4 rounded-md flex gap-12 items-center px-2">
          <div className="search w-1/3 h-9 relative">
            <span className="fa-solid fa-search absolute left-3 text-gray-400 text-sm top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search document, scholars"
              className="bg-[#22252d] rounded-lg border-none outline-2 focus:outline outline-[#5b9efcbb] pl-10 caret-[#78abf2] w-full h-full"
            />
          </div>
          <DropdownFilter label="Statue" options={["Approved", "Reviewing", "Missing"]} />
          <DropdownFilter label="Document Type" options={["Eassy", "Transcript", "Fasfa"]} />
          <DropdownFilter label="Deadline" options={["The Newest", "The Oldest"]} />
          <div>
            <button type="button" className="whitespace-nowrap bg-[#3183e7] rounded-md py-1 px-3">Upload New file</button>
          </div>
        </div>
        <main className="flex gap-2 mt-4">
          <div className="left flex flex-col gap-2 h-96 w-1/4 rounded-md">
            <div className="w-full h-1/2 bg-[#0f1219] rounded-md shadow-md shadow-black/30" />
            <div className="w-full h-1/2 bg-[#0f1219] rounded-md shadow-black/30" />
          </div>
          <div className="right w-3/4 min-h-96 h-auto rounded-md bg-[#0f1219] overflow-auto">
            <h1 className="p-2 font-semibold text-xl">Detailed Documents Inventory</h1>
            <div className="content">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th className="col-id">File Type</th>
                    <th className="col-name">File Name</th>
                    <th className="col-major">Statue</th>
                    <th className="col-doc">Upload Date</th>
                    <th className="col-date">Last Upload By</th>
                    <th />
                  </tr>
                </thead>
                <tbody className="body_table">
                  {documentInventory.map((row, index) => (
                    <tr key={`${row.file}-${index}`}>
                      <td><span className={row.icon} /><span> {row.type}</span></td>
                      <td>{row.file}</td>
                      <td><StatusBadge status={row.status} /></td>
                      <td>{row.date}</td>
                      <td className="flex gap-2 items-center">
                        <div className="image w-8 h-8">
                          <img src={admin.photo} alt="" loading="lazy" className="w-full h-full rounded-full" />
                        </div>
                        <span>{row.uploadedBy}</span>
                      </td>
                      <td>
                        <span className="fa-solid fa-trash-can text-red-400" />
                        <span className="fa-solid fa-upload text-green-600 mx-1" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
