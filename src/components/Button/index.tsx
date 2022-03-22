
import React, { ButtonHTMLAttributes } from 'react';
/* import Logo from '../../assets/logo_MetaMask.svg'; */
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
 {/*    <Logo/> */}
    {children}
  </Container>
);

export default Button;