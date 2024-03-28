import styled from "styled-components";
import Team from "../Team";

const TeamsContainer = styled.div`

`;

const Teams = () => {
    return (
      <TeamsContainer>
        <h1>Teams</h1>
        <Team/>
      </TeamsContainer>  
    ); 
}

export default Teams;