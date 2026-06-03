import { useMemo, useState } from "react";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { applicationRows } from "../utils/data";

const filters = [
  { label: "Filter by Status", placeholder: "Filter by Status", key: "statue" },
  { label: "Filter by Major", placeholder: "Filter by Major", key: "Major" },
  { label: "Filter by Date", placeholder: "Filter by Date", key: "Date" },
  { label: "", placeholder: "Search Application", key: "person" },
];

function formatDate() {
  const months = ["Jan", "Fep", "Mar", "Apr", "May", "Jun", "Jul", "agu", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  return `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()}`;
}

export default function ApplicationPage() {
  const [rows, setRows] = useState(applicationRows);
  const [filterValues, setFilterValues] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ person: "", Major: "", Scholar: "Merit", statue: "Pending Document" });
  const [toast, setToast] = useState(null);

  const visibleRows = useMemo(() => {
    return rows.slice().sort((a, b) => {
      const score = (row) =>
        filters.reduce((total, filter) => {
          const value = filterValues[filter.key]?.trim().toLowerCase();
          if (!value) return total;
          return total + (String(row[filter.key]).toLowerCase().startsWith(value) ? 1 : 0);
        }, 0);
      return score(b) - score(a);
    });
  }, [filterValues, rows]);

  const showToast = (nextToast) => {
    setToast(nextToast);
    window.setTimeout(() => setToast(null), nextToast.type === "success" ? 1400 : 2000);
  };

  const handleCreate = () => {
    if (!form.person.trim() || !form.Major.trim()) {
      showToast({ type: "error", text: "Please Fill ALl input" });
      return;
    }

    setRows((currentRows) => [
      ...currentRows,
      {
        id: currentRows[currentRows.length - 1].id + 1,
        person: form.person.trim(),
        Major: form.Major.trim(),
        Scholar: form.Scholar,
        Date: formatDate(),
        statue: form.statue,
      },
    ]);
    setForm({ person: "", Major: "", Scholar: "Merit", statue: "Pending Document" });
    setModalOpen(false);
    showToast({ type: "success", text: "Added The Client Succesfully" });
  };

  return (
    <>
      <Header title="Application Management" />
      <section className="px-3 min-w-full">
        <div className="inputs flex gap-2 min-w-full flex-wrap items-center justify-between">
          {filters.map((filter) => (
            <div key={filter.key} className={`flex flex-col justify-center flex-grow ${filter.key === "person" ? "" : ""}`}>
              <div className="title min-h-6 max-h-6">{filter.label}</div>
              <input
                type="text"
                placeholder={filter.placeholder}
                value={filterValues[filter.key] || ""}
                onChange={(event) => setFilterValues((current) => ({ ...current, [filter.key]: event.target.value }))}
                className={`bg-[#13161b] input rounded-md border-none outline-2 focus:outline outline-[#5b9efcbb] py-0.5 px-3 caret-[#78abf2] max-h-32 pr-3 ${
                  filter.key === "person" ? "min-w-[40%] max-h-23" : "min-w-[10%]"
                }`}
              />
            </div>
          ))}
          <div className="flex flex-col justify-center flex-grow">
            <div className="title min-h-6" />
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-[#2e3138] rounded-md btn border-none py-0.5 px-3 caret-[#78abf2] min-w-[20%] max-h-32 add-application"
            >
              Add New Application
            </button>
          </div>
          <div className="flex flex-col justify-center flex-grow">
            <div className="title min-h-6" />
            <button type="button" className="bg-[#16181a] rounded-md py-0.5 px-3 caret-[#78abf2] min-w-[10%] max-h-32">
              Export Data
            </button>
          </div>
        </div>
      </section>
      <div className="con min-w-full px-3 mt-4 rounded-md">
        <div className="content p-1 text-gray-300 w-full bg-[#131419] rounded-md px-2 min-h-[550px] overflow-auto">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th className="col-id">Schlar ID</th>
                <th className="col-name">Application Name</th>
                <th className="col-major">Major</th>
                <th className="col-doc">Document Type</th>
                <th className="col-date">Date</th>
                <th className="col-status">Status</th>
                <th className="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody className="body_table">
              {visibleRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.person}</td>
                  <td>{row.Major}</td>
                  <td>{row.Scholar}</td>
                  <td>{row.Date}</td>
                  <td><StatusBadge status={row.statue} /></td>
                  <td className="col-actions">
                    <button type="button" className="fa-regular fa-eye text-blue-500/80" aria-label="View application" />
                    <button type="button" className="fa-solid fa-pencil text-blue-500/80" aria-label="Edit application" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="bg-gray-800 min-w-96 max-w-md p-6 rounded-xl dk shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Add New Application</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Applicant Name"
              required
              value={form.person}
              onChange={(event) => setForm((current) => ({ ...current, person: event.target.value }))}
              className="input_name p-2 w-full rounded bg-gray-900 border-none outline-2 focus:outline outline-[#5b9efcbb] caret-[#78abf2]"
            />
            <input
              type="text"
              placeholder="The Major"
              required
              value={form.Major}
              onChange={(event) => setForm((current) => ({ ...current, Major: event.target.value }))}
              className="input_Major w-full p-2 rounded bg-gray-900 border-none outline-2 focus:outline outline-[#5b9efcbb] caret-[#78abf2]"
            />
            <select
              value={form.Scholar}
              onChange={(event) => setForm((current) => ({ ...current, Scholar: event.target.value }))}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700"
            >
              <option>Merit</option>
              <option>Need</option>
              <option>Departmental</option>
              <option>Other</option>
            </select>
            <select
              value={form.statue}
              onChange={(event) => setForm((current) => ({ ...current, statue: event.target.value }))}
              className="w-full p-2 rounded bg-gray-900 border border-gray-700"
            >
              <option>Reviewing</option>
              <option>Pending Document</option>
              <option>Need Document</option>
              <option>Interview Scheduled</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
              Cancel
            </button>
            <button type="button" onClick={handleCreate} className="px-4 py-2 bg-blue-500/80 rounded hover:bg-blue-600/80">
              Create
            </button>
          </div>
        </div>
      </div>
      {toast && (
        <div
          className={`${toast.type === "success" ? "bg-gray-100" : "bg-gray-200"} w-fit py-1 px-3 font-semibold transition duration-500 absolute top-24 left-[42%] -translate-x-1/2 rounded-md ${
            toast.type === "success" ? "text-green-400" : "text-red-600"
          }`}
        >
          {toast.text}
        </div>
      )}
    </>
  );
}
