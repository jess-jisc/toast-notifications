import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    height: 300px;
`

const Box = styled.section`
  width: 10em;
  padding: 4em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 300px; 
  height: 100px;
  margin: auto; 
`;

const Button = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #2f3e46;
  cursor: pointer;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0px 0px 0px 10px;
  padding: 10px 20px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  flex-flow: row wrap;
  justify-content: space-around;
`



export const Aaron = () => {
  return (
    <Wrapper>
    <Box>
        <Button>Hire</Button>
        <Button>Promote</Button>
        <Button>Fire</Button>
    </Box>
    </Wrapper>
  );
};
