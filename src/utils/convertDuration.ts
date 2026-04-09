export default function converDuration(duration: number | null) {
  if (!duration) return "0:00 min";
  return (
    Math.floor(duration / 60) +
    ":" +
    ("0" + Math.floor(duration % 60)).slice(-2) +
    " min"
  );
}
