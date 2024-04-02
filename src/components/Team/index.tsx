import styled from "styled-components";

import { Button } from "primereact/button";

const TeamContainer = styled.div`
  width: 10%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;

  & h5 {
    & i {
      cursor: pointer;
    }
  }
`;

interface TeamProps {
  nome:string;
  capacidade:number;
  integrantes:string[];
}

const Team = ({nome, capacidade = 0, integrantes = []}:TeamProps) => {
  return (
    <TeamContainer>
      <h5>
        {nome}<i className="pi pi-eye"></i>
      </h5>
      <h1><span>{integrantes.length}</span>/<span>{capacidade}</span></h1>
      <div className="acoes">
        <Button label="Adicionar" />
        <Button icon={"pi pi-trash"} />
      </div>
    </TeamContainer>
  );
};

export default Team;
