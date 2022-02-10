import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Cripto"
      />
      <div>
        <Precio>
          El Precio Es De: <span> {PRICE} </span>
        </Precio>
        <Texto>
          El Precio Mas Alto Del Dia: <span> {HIGHDAY} </span>
        </Texto>
        <Texto>
          El Precio Mas Bajo Del Dia: <span> {LOWDAY} </span>
        </Texto>
        <Texto>
          Variacion Ultimas 24 Horas: <span> {CHANGEPCT24HOUR} </span>
        </Texto>
        <Texto>
          Ultima Actualizacion <span> {LASTUPDATE} </span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
