import React from 'react';
import './NotFoundPage.css';
import {Layout} from '../layout'
import { ContentBottomCenter, Button } from '../shared/elements/formElements';


function NotFoundPage({message}){
    return( 
        <Layout>
            <div className="main-content">
                <div className="container details">
                    <div className="card card-flush pt-12">
                        <div className="card card-body">
                            <div className="containerNPA">
                                <div className="noProductAvailable">
                                    <img src='/img/sad.svg' className="imageNPA" alt="sad face" />
                                    <h1>404 ERROR</h1>
                                    <p className="text-description fw-500">{message}</p>
                                    <ContentBottomCenter className="pt-4 pb-12">
                                        <Button  className="btn btn-primary px-11"
                                            type="submit"
                                        >
                                          Go Home
                                        </Button>
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
