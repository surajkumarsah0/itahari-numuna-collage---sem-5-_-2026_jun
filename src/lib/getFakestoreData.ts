export default async function getFakeStoreData(path: `/${string}`) {
  const res = await fetch(`https://dev.tejbahadurkarki.name.np/api${path}`,{
    next:{
      tags: ["api", path]
    }
  });
  return await res.json();
}