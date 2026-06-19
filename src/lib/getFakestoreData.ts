export default async function getFakeStoreData(path: `/${string}`) {
  const res = await fetch(`https://fakestoreapi.com${path}`);
  return await res.json();
}