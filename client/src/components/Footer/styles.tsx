import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterItem = styled.div`
  margin: 10px;
`;
