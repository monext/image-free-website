import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { FooterLinks } from '../FooterLinks';
import { CopyrightText } from '../CopyrightText';

const Container = styled.footer`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    background: ${({ theme }) => theme.color.white};

    @media only screen and (min-width: 1920px) {
        & {
            padding: 32px 0;
        }
    }
`;

export function Footer(): JSX.Element {
    return (
        <Container>
            <FooterLinks />
            <CopyrightText />
        </Container>
    );
}
