import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
	opacity: 0;
	 transform: translate3d(0,50px,0);
  }

  to {
	opacity: 1;
	transform: translate3d(0,0,0);
  }
`;

const CardWrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  margin: 2rem;
  background-color: rgb(100, 7, 187);
  flex: 2 2 10%;
  width: 15rem;
  color: #fff;
  
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-delay: ${({index}) => `${index * 250}ms`};
  animation-fill-mode: both;

  &:hover {
    background-color: blueviolet;
  }
`;



export default CardWrapper;
