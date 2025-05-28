import { YouTubeRobust } from "@/components/youtube-robust"

export const metadata = {
  title: "Videoclipuri | Perfect Home Media",
  description: "Urmărește cele mai recente videoclipuri de pe canalul nostru de YouTube",
}

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12 pt-32">
        <h1 className="text-3xl font-bold text-white mb-8">Videoclipuri</h1>
        <p className="text-white/70 mb-12 max-w-3xl">
          Urmărește cele mai recente videoclipuri de pe canalul nostru de YouTube. Aici găsești interviuri, evenimente
          și alte conținuturi media produse de Perfect Home Media.
        </p>

        <YouTubeRobust
          title="Toate videoclipurile de pe YouTube"
          description="Urmărește cele mai recente videoclipuri de pe canalul nostru de YouTube"
          category="all"
          maxVideos={12}
        />
      </div>
    </div>
  )
}
