import styled from '@emotion/styled';
import img from './image/phone3.jpg';

export const Thumb = styled.div`
   min-height: 'calc(100vh - 50px)';
   display: flex;
   /* align-items: center; */
   /* justify-content: center; */
   margin-left: auto;
   margin-right: auto;
   
   background-image: url(${img});
   max-width: 600px;
   height: 430px;
   background-size: cover;
   background-repeat: no-repeat;
   /* background-position: center;  */
`;

export const Title = styled.h1`
   margin-top: 10px;
   text-align: left;
   
`;