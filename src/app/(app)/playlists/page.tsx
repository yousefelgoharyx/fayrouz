import PlaylistItem from "../../../ui/PlaylistItem";
import PlaylistAdd from "../../../components/playlists/PlaylistAdd";
const playlists = [
  {
    id: 1,
    title: "Morning",
    songs: 1,
  },
  {
    id: 2,
    title: "Night",
    songs: 5,
  },
  {
    id: 3,
    title: "Happy",
    songs: 1,
  },
  {
    id: 4,
    title: "Sad",
    songs: 8,
  },
  {
    id: 5,
    title: "Joy",
    songs: 4,
  },
];

const Page = () => {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Playlists</h1>
        <PlaylistAdd />
      </div>

      {/* Playlists */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {playlists.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            id={playlist.id}
            title={playlist.title}
            songs={playlist.songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
