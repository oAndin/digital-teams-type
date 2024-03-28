import { InputText } from "primereact/inputtext";
import styled from "styled-components";

const HeaderContainer = styled.header`
display: flex;
align-items: center;
padding: 1rem 6rem;
gap: 4rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
        <h1>LOGO</h1>
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText placeholder="Pesquisar por nome" />
      </span>
    </HeaderContainer>
  );
};

export default Header;
