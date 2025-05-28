// Static video data - this is our primary source of truth
export interface VideoData {
  id: string
  title: string
  description: string
  publishedAt: string
  viewCount: string
  thumbnail: string
}

export const STATIC_VIDEOS: VideoData[] = [
  {
    id: "YL9TbJF2x8k",
    title: "Somnul copiilor",
    description: "Somnul copiilor. De vorba cu Iulia! 20.05.2025",
    publishedAt: "20 mai 2025",
    viewCount: "18 vizualizări",
    thumbnail: "/images/video-thumbnail-1.png",
  },
  {
    id: "Jv3MdHwLh9E",
    title: "Creme care șterg ridurile",
    description: "Creme care șterg ridurile. De vorba cu Iulia! 19.05.2025",
    publishedAt: "19 mai 2025",
    viewCount: "81 vizualizări",
    thumbnail: "/images/video-thumbnail-2.png",
  },
  {
    id: "FRvJp9JEXcw",
    title: "Micile lucruri mari sezon 2 Episodul 20",
    description: "Vera Rubin a privit cerul și a văzut ceea ce nimeni altcineva nu observase.",
    publishedAt: "18 mai 2025",
    viewCount: "28 vizualizări",
    thumbnail: "/images/video-thumbnail-3.png",
  },
  {
    id: "39CNoJ78NaA",
    title: "Skateboarding și informatică",
    description: "De vorba cu.... Paul Iordache, elev",
    publishedAt: "17 mai 2025",
    viewCount: "4 vizualizări",
    thumbnail: "/images/video-thumbnail-1.png",
  },
  {
    id: "3AOZSjqZ0hU",
    title: "Educație și dezvoltare personală",
    description: "Cum să îți dezvolți abilitățile în era digitală",
    publishedAt: "16 mai 2025",
    viewCount: "23 vizualizări",
    thumbnail: "/images/video-thumbnail-2.png",
  },
  {
    id: "dm1TxidYb2Q",
    title: "Tehnologie și inovație",
    description: "Ultimele tendințe în tehnologie și cum ne afectează viața",
    publishedAt: "15 mai 2025",
    viewCount: "82 vizualizări",
    thumbnail: "/images/video-thumbnail-3.png",
  },
]

// Get videos by category or all
export function getVideosByCategory(category: string, maxResults = 3): VideoData[] {
  // For now, return the same videos regardless of category
  // In the future, you could filter by category
  return STATIC_VIDEOS.slice(0, maxResults)
}

// Get latest video
export function getLatestVideo(): VideoData {
  return STATIC_VIDEOS[0]
}

// Get random videos
export function getRandomVideos(count = 3): VideoData[] {
  const shuffled = [...STATIC_VIDEOS].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
