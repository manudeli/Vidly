export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "액션" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "코미디" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "스릴러" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
