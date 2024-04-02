import styled from "styled-components";
import Team from "../Team";

const TeamsContainer = styled.div`

`;

const Teams = () => {
    return (
      <TeamsContainer>
        <h1>Teams</h1>
        <Team nome={"Time Nº 1"} capacidade={10} integrantes={["a","b","c","d"]}/>
      </TeamsContainer>  
    ); 
}

export default Teams;