"use server";

export async function fetchShortURL(url) {
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch shortcode");
  }
  return await data;
}
