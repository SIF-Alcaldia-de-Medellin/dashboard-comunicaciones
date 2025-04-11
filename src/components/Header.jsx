const Header = ({title, className = ""}) => {
  return (
    <div className={`p-[20px] flex justify-between bg-blue-sky-500 rounded-2xl ${className}`}>
      <h1 className="display-1 font-extrabold text-white">{title}</h1>
      <img src="https://serviciosdetransitodigitales.com/portal-servicios/resources/images/correo/img/alcaldiaMedellin.png" alt="alcaldia de medellin" className="aspect-video max-w-[250px]"/>
    </div>
  );
};

export default Header;
