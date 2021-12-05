import GetAll from './model/Player';
import data from "bootstrap/js/src/dom/data";
import * as React from "react";

const Login = () => {

    const [searchCard, setSearchCard] = React.useState('');

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const [data, setData] = React.useState([{
        pseudo: "",
        questDone: []
    }]);


    React.useEffect(() => {
        fetch('http://localhost:8080/rest/players/all', requestOptions)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (

        <div>
            <div className="titleContent container-fluid">
                <div className="row">

                    <div className="info col-sm-5 offset-1">
                        <img src="https://upload.wikimedia.org/wikipedia/fr/a/a3/Dofus_emeraude.png" alt="emerald img"
                            style={{width : '20%'}}/>
                        <h1> Bienvenu sur Dofus Quest </h1>
                        <h2> Organisation, Facilité, Fiabilité </h2>
                        <p> Ce site vous offrira la possibilité d'avoir un suivis sur vos quêtes. <br/>
                            Vous avez simplement à vous connecter sur votre personnage, pour avoir accès à votre gestionnaire. <br/>
                            Vous pourrez aussi connaître toutes les quêtes du jeu qui peuvent être triées par niveau, localisation, etc.. <br/>
                            Bon jeu ! </p>

                    </div>



                    <div className="col-sm-4 offset-2">
                        <img className="images" src="http://www.otakia.com/wp-content/uploads/2011/03/Logo-Dofus.png" alt="dofus img"
                             style={{width : '20%',  left: '60%'}}/>
                        <img className="images" src="https://solomonk.fr/img/classes/SACRIEUR.png" alt="cra img"
                             style={{ width: '20%', left: '75%', top: '18%'}}/>
                        <img className="images" src="https://solomonk.fr/fr/img/wip.gif" alt="wabbit img"
                             style={{ width: '20%', left: '50%', top: '27%'}}/>
                    </div>

                </div>
            </div>

            <div className="wave">

            </div>

            <div className="principalContent">

                <div className="container-fluid">
                    <div className="row">

                        <div className="login col-sm-6" style={{borderRight: 'thick double white', height: '500px'}}>

                            <div className="container-fluid">
                                <div className="row">

                                    <h1 style={{marginTop : "3%"}}> Se connecter </h1>

                                    <div className="input-group mb-3 col-sm-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Pseudo</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Pseudo" aria-label="Username"
                                               aria-describedby="basic-addon1"/>
                                    </div>

                                    <div className="input-group mb-3 col-sm-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Mot de passe" aria-label="Username"
                                               aria-describedby="basic-addon1"/>
                                    </div>


                                    <button type="button" className="btn btn-light col-sm-8 offset-2"> Se connecter</button>

                                </div>
                            </div>
                        </div>

                        <div className="signin col-sm-6">

                            <div className="container-fluid">
                                <div className="row">
                                    <h1 style={{marginTop : "3%"}}> S'inscrire </h1>

                                    <div className="input-group mb-3 col-sm-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Pseudo</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Pseudo" aria-label="Username"
                                               aria-describedby="basic-addon1"/>
                                    </div>

                                    <div className="input-group mb-3 col-sm-8">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Mot de passe" aria-label="Username"
                                               aria-describedby="basic-addon1"/>
                                    </div>

                                    <button type="button" className="btn btn-light col-sm-8 offset-2"> S'inscrire</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </div>


)

}


export default Login;

