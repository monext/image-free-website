import styled from '@emotion/styled';

export const InvertedColorsContainer = styled.div`
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    a, a:visited {
        color: ${({ theme }) => theme.color.blue};
    }
    a:active {
        color: ${({ theme }) => theme.color.lightBlue};
    }
`;
