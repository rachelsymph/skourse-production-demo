import styled from 'styled-components';
import { Button, Switch } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  :hover,
  :focus {
    color: ${(props) => props.theme.colors.black};
    border-color: ${(props) => props.theme.colors.black};
    background: ${(props) => props.theme.colors.primary};
  }

  color: ${(props) => props.theme.colors.black};
  border-color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledSwitch = styled(Switch)`
  background-color: ${(props) => props.theme.colors.primary};
`;
