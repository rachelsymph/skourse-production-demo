import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  margin: 10px;
`;
