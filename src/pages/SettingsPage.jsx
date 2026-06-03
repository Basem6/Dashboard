import { useState } from "react";
import Header from "../components/Header";
import StatusBadge from "../components/StatusBadge";
import { admin } from "../utils/data";

const systemSettings = [
  { key: "emailNotifications", label: "Email Notifications", enabled: true },
  { key: "twoFactorAuth", label: "Two-Factor Auth", enabled: true },
  { key: "Auto Renewal Alerts", label: "Auto Renewal Alerts", enabled: true },
];

const adminRows = [
  { name: "Dr. Evein Head", email: "dr.reen@gmail.com", role: "Admin", lastLogin: "Today, 09:30 AM", status: "Approved" },
  { name: "Evelyen Reed", email: "evelyen.reed@gmail.com", role: "Reviewer", lastLogin: "May 29, 2026", status: "Reviewing" },
  { name: "Andrea Seai", email: "andrea.seai@gmail.com", role: "Finance", lastLogin: "May 22, 2026", status: "Pending Document" },
  { name: "Andrea Seai", email: "andrea.seai@gmail.com", role: "Finance", lastLogin: "May 22, 2026", status: "Pending Document" },
  { name: "Andrea Seai", email: "andrea.seai@gmail.com", role: "Finance", lastLogin: "May 22, 2026", status: "Pending Document" },
];

function Toggle({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <span className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-[#78abf2] peer-checked:to-[#5b9efcbb] after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4 transition-all" />
    </label>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(
    systemSettings.reduce((current, setting) => ({ ...current, [setting.key]: setting.enabled }), {}),
  );

  const handleToggle = (key) => {
    setSettings((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <>
      <Header title="Settings" />
      <section className="px-3 min-w-full">
        <div className="cards flex flex-col gap-4">
          <div className="grid gap-4 w-full lg:grid-cols-2 md:grid-cols-1">
            <div className="card-last bg-[#0f1219] border border-transparent p-3 min-h-72 shadow-md relative">
              <div className="flex items-center gap-3 flex-wrap pt-5 admin-information">
                <div className="admin-image w-32 h-32 relative">
                  <img
                    src={admin.photo}
                    alt="Admin Profile"
                    className="w-full h-full rounded-full border-2 border-[#0f1219] object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-3xl text-white tracking-wide">{admin.name}</h3>
                  <p className="font-light text-xl tracking-wide text-gray-300">Email:dr.reen@gmail.com</p>
                  <p className="font-light text-xl tracking-wide text-gray-300">Role:({admin.role})</p>
                </div>
                <div className="btns flex gap-2 mt-10">
                  <button
                    type="button"
                    className="bg-transparent text-white px-4 py-1 border border-gray-400/40 rounded-md hover:bg-gray-800/40 whitespace-nowrap"
                  >
                    <span className="fa-solid fa-pen mr-2 text-sky-300" />
                    Eidt Profile
                  </button>
                  <button
                    type="button"
                    className="bg-transparent text-white px-4 py-1 border border-gray-400/40 rounded-md hover:bg-gray-800/40 whitespace-nowrap"
                  >
                    <span className="fa-solid fa-key mr-2 text-red-300" />
                    Change Passward
                  </button>
                </div>
              </div>
            </div>
            <div className="card bg-[#0f1219] border border-transparent p-3 h-72 shadow-md max-w-full">
              <h2 className="text-2xl text-white mb-2.5 flex items-center">
                <span className="fa-solid fa-sliders mr-2 text-[#1c4680] text-xl" />
                System Settings
              </h2>
              <div className="flex flex-col gap-2">
                {systemSettings.map((setting) => (
                  <div
                    key={setting.key}
                    className="flex justify-between items-center h-14 p-2 bg-[#13161b] border border-gray-700 hover:bg-[#191d24] rounded-lg text-xs transition-colors"
                  >
                    <span className="text-white text-xl">{setting.label}</span>
                    <Toggle checked={settings[setting.key]} onChange={() => handleToggle(setting.key)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card bg-[#0f1219] border border-transparent py-1 px-4  shadow-md w-full max-w-full overflow-auto">
            <table className="dashboard-table w-full">
              <thead>
                <tr>
                  <th className="col-id text-white">Admin Name</th>
                  <th className="col-name text-white">Email</th>
                  <th className="col-doc text-white">Role</th>
                  <th className="text-white whitespace-nowrap">Last login</th>
                  <th className="col-status text-white">Statue</th>
                  <th className="col-actions relative top-[0.5px]">Action</th>
                </tr>
              </thead>
              <tbody className="body_table_d">
                {adminRows.map((row) => (
                  <tr key={row.email}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.role}</td>
                    <td>{row.lastLogin}</td>
                    <td>
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="col-actions">
                      <button type="button" className="fa-solid fa-pencil text-blue-500/80" aria-label={`Edit ${row.name}`} />
                      <button type="button" className="fa-solid fa-trash-can text-red-400" aria-label={`Delete ${row.name}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
