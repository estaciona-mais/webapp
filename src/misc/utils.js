const normalizarString = (str) =>
  Array.from(str.toLowerCase())
    .map((ch, i) => (i === 0 ? ch.toUpperCase() : ch))
    .join("");

const campoEnumParaTitulo = (str) =>
  !str.includes("_")
    ? normalizarString(str)
    : str
        .split("_")
        .map((w) => normalizarString(w))
        .join(" ");

const enumParaObjeto = (en) =>
  en.map((field) => ({
    id: field,
    titulo: campoEnumParaTitulo(field),
  }));

const tituloParaCampoEnum = (str) =>
  !str.includes(" ")
    ? str.toUpperCase()
    : str
        .split(" ")
        .map((w) => w.toUpperCase())
        .join("_");

const gerarNumeroComLimites = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const gerarPlacaDeVeiculo = () => {
  const ls = Array(4)
    .fill(0)
    .map((_) => String.fromCharCode(gerarNumeroComLimites(65, 90)));
  const ns = Array(3)
    .fill(0)
    .map((_) => gerarNumeroComLimites(0, 9));
  return ls.slice(0, 3).join("") + ns[0] + ls[3] + ns.slice(1, 3).join("");
};

export {
  normalizarString,
  campoEnumParaTitulo,
  enumParaObjeto,
  tituloParaCampoEnum,
  gerarPlacaDeVeiculo,
};
