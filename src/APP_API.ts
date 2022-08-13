export const getLoot = async () => {
  console.log('get loot works');
  const loot = await getThingBro('');
  console.log(loot)
  // getThingBro('');
};

const getThingBro = async (url: string) => {
  return await fetch(url)
  .then((response) => response.json())
  .then((data) => data);
};