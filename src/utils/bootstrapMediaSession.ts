interface BootstrapMediaSession {
  onPlay: () => void;
  onPause: () => void;
  image: string;
  title: string;
}
export function bootstrapMediaSession(options: BootstrapMediaSession) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: options.title,
    artist: "Fayrouz",
    artwork: [{ src: options.image, sizes: "512x512", type: "image/png" }],
  });
  navigator.mediaSession.setActionHandler("play", () => {
    options.onPlay();
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    options.onPause();
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    options.onPause();
  });
}
