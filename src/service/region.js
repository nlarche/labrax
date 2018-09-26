const regions = [
  { key: 'golfe', value: 'golfe-gascogne.json' },
  { key: 'manche', value: 'manche-mer-du-nord.json' },
  { key: 'mediterranee', value: 'mediterranee.json' },
];

const setRegion = (region) => {
  const reg = regions.filter(r => r.key === region)[0];
  if (reg) {
    localStorage.setItem('region', JSON.stringify(reg));
  }
};

const getRegion = () => {
  const reg = localStorage.getItem('region');
  if (!reg) {
    setRegion(regions[0]);
    return regions[0];
  }
  return JSON.parse(reg);
};

export {
  getRegion,
  setRegion,
};
