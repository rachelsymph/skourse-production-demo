import { Container, Menu, MenuItem } from './styles';


export function Navbar() {
  return (
    <Container>
      <Menu><MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Container>
  );
}
