import { getStatusClass } from "../utils/status";

export default function StatusBadge({ status }) {
  return <div className={getStatusClass(status)}>{status}</div>;
}
