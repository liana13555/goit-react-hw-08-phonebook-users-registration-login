import styled from '@emotion/styled';

export const List = styled.ol`
  max-width: 300px;
  cursor: pointer;
  padding-left: 5px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;

  @media screen and (min-width: 400px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } 
`;

export const ButtonDelete = styled.button`
  margin-left: 8px;
  
  background-color: #e7b352;
  border: 2px solid #e67e38;;
  cursor: pointer; 
`;

export const Span = styled.span`
  display: inline-block;
`;

