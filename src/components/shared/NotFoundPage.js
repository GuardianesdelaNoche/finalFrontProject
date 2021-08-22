import React from 'react';
import './NotFoundPage.css';
import {Layout} from '../layout'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ContentBottomCenter, Button } from '../shared/elements/formElements';


function NotFoundPage(){
    return( 
        <Layout>
            <div className="main-content">
                <div className="container details">
                    <div className="card card-flush pt-12">
                        <div className="card card-body">
                            <div className="containerNPA">
                                <div className="noProductAvailable">
                                    <img src='/img/404.png' className="imageNPA" alt="sad face" />
                                    <h1 className="pt-10">
                                        <FormattedMessage
                                            id="notfoundpage.title"
                                            defaultMessage="404 ERROR"
                                        /></h1>
                                    <p className="text-description fw-500">
                                        <FormattedMessage
                                            id="notfoundpage.description"
                                            defaultMessage="Sorry about that, but the page you are looking for isn´t available"
                                        />
                                    </p>
                                    <ContentBottomCenter className="pt-4 pb-12">
                                        <Link to="/">
                                            <Button  className="btn btn-primary px-11"
                                                type="submit"
                                            >	
                                        
                                                <FormattedMessage
                                                    id="notfoundpage.button"
                                                    defaultMessage="Go Home"
                                                />
                                            
                                            </Button>
                                        </Link>
                                    </ContentBottomCenter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        
    );
}
export default NotFoundPage;
