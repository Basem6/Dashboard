import StatusBadge from "./StatusBadge";

export function RecentApplicationsPanel({ rows }) {
  return (
    <div className="left px-2 py-0.5 bg-[#0f1219] lg:w-1/2 md:w-full rounded-lg min-h-40">
      <div className="title text-white flex justify-between">
        <span className="text-xl font-semibold">Recent Application Status</span>
        <span className="text-sm text-gray-200 mt-1">Renewal Alerts</span>
      </div>
      <div className="content p-1 text-gray-300 w-full">
        <div className="const flex justify-between w-full gap-1 items-start flex-wrap">
          <div className="min-w-fit text-start flex flex-col justify-start gap-1">
            <div>Aplication Name</div>
            {rows.map((row) => <div key={row.name}>{row.name}</div>)}
          </div>
          <div className="min-w-fit text-start flex flex-col justify-start mr-5 gap-1">
            <div>Major</div>
            {rows.map((row) => <div key={`${row.name}-${row.major}`}>{row.major}</div>)}
          </div>
          <div className="min-w-fit text-start flex flex-col justify-start gap-1">
            <div>Date</div>
            {rows.map((row) => <div key={`${row.name}-${row.date}`}>{row.date}</div>)}
          </div>
          <div className="status min-w-fit text-start flex flex-col justify-start gap-1">
            <div>Status</div>
            <div className="status-content flex flex-col gap-1">
              {rows.map((row) => <StatusBadge key={`${row.name}-${row.status}`} status={row.status} />)}
            </div>
          </div>
          <div className="icon min-w-fit text-start flex flex-col justify-start gap-1">
            <div>Documents</div>
            {rows.map((row) => (
              <div key={`${row.name}-icons`} className="flex gap-3">
                {row.icons.map((icon) => <span key={icon} className={icon} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DocumentTrackingPanel({ rows }) {
  return (
    <div className="right px-2 py-0.5 bg-[#0f1219] lg:w-1/2 md:w-full rounded-lg min-h-48">
      <div className="title text-white flex justify-between p-1">
        <span className="text-xl font-semibold">Scholar Document Tracking</span>
        <span className="text-sm text-gray-200 m-t">Renewal Alerts</span>
      </div>
      <div className="content p-1 text-gray-300 w-full">
        <div className="const flex justify-between w-full gap-1 items-start flex-wrap">
          <div className="min-w-fit text-start flex flex-col justify-start gap-1">
            <div>Scholar ID</div>
            {rows.map((row) => <div key={row.id}>{row.id}</div>)}
          </div>
          <div className="min-w-fit text-start flex flex-col justify-start mr-5 gap-1">
            <div>Name</div>
            {rows.map((row) => <div key={`${row.id}-${row.name}`}>{row.name}</div>)}
          </div>
          <div className="min-w-fit w-0.5/5 text-start flex flex-col justify-start gap-1 overflow-hidden">
            <div>Document </div>
            {rows.map((row) => <div key={`${row.id}-${row.document}`}>{row.document}</div>)}
          </div>
          <div className="min-w-fit text-start flex flex-col justify-start status gap-1">
            <div>Status</div>
            {rows.map((row) => (
              <div key={`${row.id}-status`} className={row.statusValue ? "" : row.statusClass}>
                {row.status}
                {row.statusValue && <span className={row.statusClass}>{row.statusValue}</span>}
              </div>
            ))}
          </div>
          <div className="min-w-fit flex flex-col justify-start gap-1">
            <div>Deadline</div>
            {rows.map((row) => <div key={`${row.id}-${row.deadline}`}>{row.deadline}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
}
