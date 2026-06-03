import { PieChart, SplineChart } from "../components/Charts";
import Header from "../components/Header";
import { DocumentTrackingPanel, RecentApplicationsPanel } from "../components/InfoPanels";
import SummaryCards from "../components/SummaryCards";
import { recentApplications, trackedDocuments } from "../utils/data";

const cards = [
  { label: "Active Scholars", value: "1,245", icon: "fa-regular fa-user text-[#92bcf8]" },
  { label: "Application Reviewing", value: "310", icon: "fa-regular fa-newspaper text-[#92bcf8]" },
  { label: "Total funds Alocatted", value: "$15.6M", icon: "fa-solid fa-sack-dollar text-[#92bcf8]" },
  { label: "Upcoming Renwels", value: "45", icon: "fa-solid fa-arrows-rotate text-[#8c7af3]" },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div>
        <SummaryCards cards={cards} />
        <main className="charts flex gap-2 mt-3 px-3 min-w-full flex-wrap md:flex-col lg:flex-row">
          <div id="chart" className="py-1 bg-[#0f1219] rounded-lg lg:w-[49%] md:w-full min-h-64 max-h-fit text-xl font-semibold text-white flex-grow">
            <div className="flex justify-between">
              <div className="px-2 text-xl font-semibold">Scholar Perfomance Overview</div>
              <div className="pr-4 pt-1 text-xs text-gray-300">
                <div className="flex gap-1"><span className="fa-solid fa-circle text-xs text-blue-600" /><span>cohort 2024</span></div>
                <div className="flex gap-1"><span className="fa-solid fa-circle text-xs text-violet-700" /><span>cohort 2024</span></div>
              </div>
            </div>
            <p className="text-sm p-2 font-light text-gray-400">Gpa Trends Semesters</p>
            <SplineChart />
          </div>
          <div className="pie-chart bg-[#0f1219] rounded-lg lg:w-[49%] md:w-full min-h-64 max-h-fit text-xl font-semibold text-white flex-grow" id="chart2">
            <div className="px-2 pt-3">Funding Allocation by Type</div>
            <PieChart />
          </div>
        </main>
        <footer className="w-full footer flex gap-2 mt-3 px-3 lg:flex-row md:flex-col">
          <RecentApplicationsPanel rows={recentApplications} />
          <DocumentTrackingPanel rows={trackedDocuments} />
        </footer>
      </div>
    </>
  );
}
