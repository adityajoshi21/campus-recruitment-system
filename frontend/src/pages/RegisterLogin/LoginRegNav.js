/* eslint-disable */
import React from 'react';

const LoginRegNav = (props) => {
    return (
        <header class="header-2 access-page-nav">
        <div class="container">
            <div class="row">
            <div class="col">
                <div class="header-top">
                <div class="logo-area">
                    <a href="index.html">
                        <img src="images/Logo.png" alt=""></img>
                    </a>
                </div>
                <div class="top-nav">
                    <a class="account-page-link">{props.title}</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
};

export default LoginRegNav;