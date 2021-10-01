
import styled from 'styled-components'

const StyledButton = styled.button<{bk: string}>`
    background: ${({bk})=>bk};
    border: none;
    font-weight: 300;
    font-family: Lato;
    font-size: 18px;
    color: white;
    padding: 10px 50px;
    border-radius: 25px;
`;

export default StyledButton;