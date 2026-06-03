export function getStatusClass(status) {
  const normalized = status.toLowerCase();

  if (normalized.includes("approved")) return "Scheduled";
  if (normalized.includes("reviewing")) return "Reviewing";
  if (normalized.includes("need")) return "Need";
  if (normalized.includes("missing")) return "Missing";
  if (normalized.includes("interview")) return "Scheduled";
  return "Pending-Document";
}
