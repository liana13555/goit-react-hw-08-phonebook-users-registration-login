import styled from '@emotion/styled';

export const FormContact = styled.form`
  @media screen and (max-width: 400px) {
    max-width: 240px;
  }
  max-width: 300px;
  padding: 10px;

  background-color: #60a7e9;
  border: 2px solid #083763;
  border-radius: 5px;  
  cursor: pointer;
`;

export const FormInput = styled.input`  
 @media screen and (max-width: 400px){
   /* width: 150px; */
 }
`;

export const FormButton = styled.button`
  @media screen and (max-width: 400px) {
    font-size: small;
  }
  margin-top: 20px;
  padding: 5px;

  font-size: medium;
  background-color: #156bbb;
  border: 2px solid #10589b;
  cursor: pointer;
`;

