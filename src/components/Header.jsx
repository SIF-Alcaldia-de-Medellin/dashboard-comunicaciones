const Header = ({title, className = ""}) => {
  return (
    <div className={`p-[20px] flex flex-col justify-center items-center xl:flex-row xl:justify-between bg-blue-sky-500 rounded-2xl flex-wrap ${className}`}>
      <h1 className="display-1 font-bold md:font-extrabold text-white text-center xl:text-start">{title}</h1>
      <img src="https://serviciosdetransitodigitales.com/portal-servicios/resources/images/correo/img/alcaldiaMedellin.png" alt="alcaldia de medellin" className="aspect-video max-w-[250px]"/>
    </div>
  );
};

export default Header;
