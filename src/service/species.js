const getList = async (region) => {
  const response = await fetch(`./static/data/${region.value}`);
  const list = await response.json();
  return list.map((sp) => {
    const frontSp = { ...sp };
    frontSp.id = sp.name.split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return frontSp;
  });
};

export default getList;
