import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  div {
    flex: 1;

    strong {
      display: block;
      font-size: 1.1em;
      margin-bottom: 5px;
    }

    p {
      margin: 0;
      font-size: 0.9em;
      color: #555;
    }
  }
`;

export const Button = styled.button`
  background-color: #e63946;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d62839;
  }
`;
