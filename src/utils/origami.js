const getOrigami = async (length) => {
  const res = await fetch(`http://localhost:9999/api/origami?length=${length}`);
  const origamis = await res.json();
  return origamis;
};

export default getOrigami;
