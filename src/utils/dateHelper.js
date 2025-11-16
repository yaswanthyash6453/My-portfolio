export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24)); // days

  if (diff === 0) return "Updated today";
  if (diff === 1) return "Updated 1 day ago";
  return `Updated ${diff} days ago`;
}
