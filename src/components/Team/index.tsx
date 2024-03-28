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

const Team = () => {
  return (
    <TeamContainer>
      <h5>
        Nome do time <i className="pi pi-eye"></i>
      </h5>
      <h1>0/0</h1>
      <div className="acoes">
        <Button label="Adicionar" />
        <Button icon={"pi pi-trash"} />
      </div>
    </TeamContainer>
  );
};

export default Team;
