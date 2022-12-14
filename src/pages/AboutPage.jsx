import React from 'react';
import Card from "../components/shared/Card"
import {Link} from "react-router-dom"

const AboutPage = () => {
    return (
        <Card className="about">
            <h1>About This Project</h1>
            <p>This is a React App to leave feedback for a product or service</p>
            <p>Verstion: 1.0.0</p>

            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </Card>
    );
};

export default AboutPage;