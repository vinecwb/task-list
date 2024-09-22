import React from 'react'; 
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #ed145b;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>© 2024 Task Manager</p>
        </FooterContainer>
    );
};

export default Footer;