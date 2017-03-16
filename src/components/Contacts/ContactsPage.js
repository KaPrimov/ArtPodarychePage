import React, {Component} from 'react';

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <h1 className="page-header">Контакти</h1>
                </div>
                <div className="col-lg-12">
                    <div className="col-sm-3">
                        <h3>Lavaflake Team ЕООД</h3>
                        <h4>Адрес:</h4>
                        <p>
                            Around the corner
                        </p>

                        <span className="glyphicon glyphicon-earphone"> </span>Телефони за връзка: <p>+359 000 000 000</p>

                <span className="glyphicon glyphicon-envelope"> </span> Имейл адрес: <p><a href="mailto:lavaflake@lavaflake.bg">lavaflake@lavaflake.bg</a></p>

                        <span className="glyphicon glyphicon-cloud"> </span> Работно време: <p>All day everyday</p>

    </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7442397451487!2d23.35008831534504!3d42.666774979167535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cca4a719b7%3A0xdf53fcbcd8e758d7!2sSoftware+University!5e0!3m2!1sen!2sbg!4v1481032496100" width="75%" height="400px"></iframe>

    </div>
                <div>REACT JS Team Project for for Apps JS/JS Core at Softuni</div>
                <div>Products Catalog application.</div>
                <div>Code: <a href={"//github.com/KaPrimov/React-Course-Project"}>GitHub Repository </a></div>
            </div>


        )
    }
}