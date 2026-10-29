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

export {
  normalizarString,
  campoEnumParaTitulo,
  enumParaObjeto,
  tituloParaCampoEnum,
};
