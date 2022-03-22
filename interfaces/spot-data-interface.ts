export default interface SpotData {
  name: string;
  slug: string;
  country: string;
  region: string;
  id: string;
  webcam_urls?: { type: "video" | "picture"; url: string }[];
}
