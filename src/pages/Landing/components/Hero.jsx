import "./Hero.css";

export default function Hero() {
  return (
    <div>
      <img className="hero__bg" src="src/assets/pexels-kelly-2655864.jpg"></img>
      <div className="hero__container">
        <h1 className="hero__titulo">Estacionando sem estresse</h1>
        <p className="hero__subtitulo">Sua vaga já está garantida</p>
      </div>
    </div>
  );
}
