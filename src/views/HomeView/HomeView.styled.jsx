import styled from '@emotion/styled';
import img from './image/phone3.jpg';

export const Thumb = styled.div`
   min-height: 'calc(100vh - 50px)';
   display: flex;
   /* align-items: center; */
   justify-content: center;
   margin-left: auto;
   margin-right: auto;
   margin-top: 50px;
   background-image: url(${img});
   max-width: 700px;
   height: 500px;
   background-size: cover;
   background-repeat: no-repeat;
   /* background-position: center;  */
`;

export const Title = styled.h1`
   font-weight: 500;
   font-size: 48;
   text-align: center;
`;