import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  line-height: 50px;
  font-size: 15px;
  font-weight: bolder;
  font-family: 'Saira Semi Condensed';
  letter-spacing: 0.5px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  padding: 0 35px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
`