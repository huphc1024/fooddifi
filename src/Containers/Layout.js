import React from 'react';
import {SideBar} from './SideBar';
import BasketCart from "./BasketCart";


const Layout = ({children})=>{
    return (
        <div>
        <div className="navbar navbar-default">
            <a className="navbar-brand" href="/">Foods & Drinks</a>
            {/*<ul className="nav navbar-nav">*/}
                {/*<li className="active">*/}
                    {/*<a href="#">Home</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="#">Link</a>*/}
                {/*</li>*/}
            {/*</ul>*/}
            <div className="pull-right"> <BasketCart/></div>

        </div>

            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <SideBar/>
                        </div>
                        <div className="col-md-9">
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default Layout;