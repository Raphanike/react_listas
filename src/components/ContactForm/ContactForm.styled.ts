import styled from 'styled-components'

interface ButtonProps {
  buttonType: 'add' | 'adjust'
}

export const InputContainer = styled.div`
  margin-bottom: 10px;
  text-align: center;
`

export const Button = styled.button<ButtonProps>`
  display: block;
  width: 40%;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.buttonType === 'adjust'
      ? '#ff9800'
      : '#007bff'}; /* Laranja para Ajustar, Azul para Adicionar */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: ${(props) =>
      props.buttonType === 'adjust'
        ? '#fb8c00'
        : '#0056b3'}; /* Hover mais escuro */
  }
`
