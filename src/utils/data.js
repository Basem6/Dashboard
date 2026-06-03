export const admin = {
  name: "Dr. Evein Head",
  role: "Admin",
  photo: "/assests/photo/admin-photo.webp",
};

export const navItems = [
  { label: "Dashboard", path: "/", icon: "fa-regular fa-house" },
  { label: "Application", path: "/application", icon: "fa-regular fa-newspaper" },
  { label: "Funding", path: "/funding", icon: "fa-solid fa-sack-dollar" },
  { label: "Documents", path: "/documents", icon: "fa-regular fa-file-lines" },
  { label: "Settings", path: "/settings", icon: "fa-solid fa-gear" },
];

export const applicationRows = [
  { id: 472042, person: "Jon Maged", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2024", statue: "Reviewing" },
  { id: 472043, person: "Basem Mahomud", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2023", statue: "Pending Document" },
  { id: 472044, person: "Jon Maged", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2024", statue: "Reviewing" },
  { id: 472045, person: "Jon Basem", Major: "Doctor", Scholar: "Merit", Date: "Jan 1,2024", statue: "Need Document" },
  { id: 472046, person: "Maged Ali", Major: "Engineering", Scholar: "Merit", Date: "Fep 14,2024", statue: "Interview Scheduled" },
  { id: 472047, person: "Jon Maged", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2024", statue: "Reviewing" },
  { id: 472048, person: "Basem Mahomud", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2023", statue: "Pending Document" },
  { id: 472049, person: "Jon Maged", Major: "Engineering", Scholar: "Merit", Date: "Jan 14,2024", statue: "Reviewing" },
  { id: 472050, person: "Jon Basem", Major: "Doctor", Scholar: "Merit", Date: "Jan 1,2024", statue: "Need Document" },
  { id: 472051, person: "Maged Ali", Major: "Engineering", Scholar: "Merit", Date: "Fep 14,2024", statue: "Interview Scheduled" },
];

export const recentApplications = [
  { name: "Jon Maged", major: "Engineering", date: "2025-5-21", status: "Reviewing", icons: ["fa-solid fa-newspaper text-green-600/80", "fa-regular fa-circle-check text-green-600/80"] },
  { name: "Ahmed Sayed", major: "Engineering", date: "2023-3-1", status: "Pending Document", icons: ["fa-regular fa-circle-check text-purple-600/80", "fa-solid fa-newspaper text-purple-600/80"] },
  { name: "Alaa Mohamed", major: "Doctor", date: "2022-6-11", status: "Pending Document", icons: ["fa-solid fa-newspaper text-blue-600/80", "fa-solid fa-newspaper text-purple-600/80"] },
  { name: "Basem Mahmoud", major: "Engineering", date: "2021-7-16", status: "Reviewing", icons: ["fa-solid fa-newspaper text-green-600", "fa-regular fa-circle-check text-green-600"] },
];

export const trackedDocuments = [
  { id: "8320542", name: "Even Head", document: "Document", status: "Transcript - ", statusValue: "Received", statusClass: "text-green-500", deadline: "02/09/2023" },
  { id: "3291841", name: "Andrea Seai", document: "Document", status: "Rec Letter - Missing", statusClass: "text-red-400", deadline: "02/12/2023" },
  { id: "3171749", name: "carlos Even", document: "Eassy", status: "Eassy - ", statusValue: "Approved", statusClass: "text-green-500", deadline: "02/14/2023" },
  { id: "3710741", name: "Andiller", document: "Document", status: "Eassy - ", statusValue: "Approved", statusClass: "text-green-500", deadline: "01/19/2023" },
];

export const documentInventory = [
  { type: "Transcript", icon: "fa-regular fa-newspaper text-gray-400", file: "transcript_2022pdf", status: "Approved", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
  { type: "Transcript", icon: "fa-regular fa-newspaper text-gray-400", file: "transcript_2022pdf", status: "Approved", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
  { type: "Letter of Recomended", icon: "fa-regular fa-newspaper text-blue-800/80", file: "recomended_let_dov", status: "Reviewing", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
  { type: "FAf57", icon: "fa-regular fa-newspaper text-red-500", file: "FAf47_team", status: "Missing", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
  { type: "Transcript", icon: "fa-regular fa-newspaper text-gray-400", file: "transcript_2022pdf", status: "Approved", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
  { type: "FAf57", icon: "fa-regular fa-newspaper text-red-500", file: "FAf47_team", status: "Missing", date: "01/09/2023", uploadedBy: "Evelyen Reed" },
];
