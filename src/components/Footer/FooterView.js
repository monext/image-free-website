// @flow
import React from 'react';
import type { Node } from 'react';
import FooterLinks from '../FooterLinks';
import CopyrightText from '../CopyrightText';
import './Footer.scss';

const Footer = (): Node => (
    <footer className="Footer">
        <FooterLinks />
        <CopyrightText />
    </footer>
);

export default Footer;
