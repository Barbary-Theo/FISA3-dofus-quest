import * as React from "react";

const Login = () => {

    //On this page disable the scroll
    window.onscroll = function () {
        window.scrollTo(0,0);
    }

    const getRequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    const postRequestOptions = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    const [pseudoConnexion, setPseudoConnexion] = React.useState('');
    const [passwordConnexion, setPasswordConnexion] = React.useState('');

    const [pseudoInscription, setPseudoInscription] = React.useState('');
    const [passwordInscription, setPasswordInscription] = React.useState('');

    const [players, setPlayers] = React.useState([{
        idPlayer: 0,
        pseudo: "",
        password: "",
        quest: []
    }]);

    //Get all players
    React.useEffect(() => {
        fetch('http://localhost:8080/rest/players/all', getRequestOptions)
            .then(response => response.json())
            .then(data => {
                setPlayers(data);
                if(players.length > 0) document.getElementById("btnInit").disabled = true;
            });
    }, []);


    //Function to init database with the button
    function initDataBase() {
        console.log(players.length)
        //If dataBase is already initialized
        if(players.length <= 0) {

            fetch('http://localhost:8080/rest/succes/initSucces', postRequestOptions)
            .then(response => response.json())
            .then(data => {

                fetch('http://localhost:8080/rest/quests/initQuest',postRequestOptions)
                    .then(response => response.json())
                    .then(data =>  {

                        fetch('http://localhost:8080/rest/players/initPlayer', postRequestOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log("data insert successfully");
                            document.getElementById("btnInit").disabled = true;
                        });
                    });
            });
        }


    }

    //Function to do when user clicked on the login button
    function connexion(event) {
        event.preventDefault();

        //For all players
        players.map( (player) => {

            //If it is the one who try to connect his-self
            if(player.pseudo === pseudoConnexion && player.password === passwordConnexion) {
                localStorage.setItem("currentPlayer", player.idPlayer);
                window.location.href = "/index";
            }
        })
        document.getElementById('connexionStatu').innerText = 'Identifiants incorrect';
    }

    //Function to do when user clicked on the sign-in button
    function inscription(event) {
        event.preventDefault()
        const playerToAdd = {
            pseudo: pseudoInscription,
            password: passwordInscription,
            questDone: []
        }

        let doesExist = false;
        players.map( (player) => {

            //Verify identifiants doesn't already exist
            if(player.pseudo === playerToAdd.pseudo && player.password === playerToAdd.password) {
                doesExist = true;
            }
        })

        //Combo already exist
        if (doesExist) {
            document.getElementById('inscriptionStatu').innerText = 'Identifiants déjà existants';
        }
        else {
            console.log(playerToAdd);
            //Add the new user to the database
            fetch('http://localhost:8080/rest/players',  {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(playerToAdd)
                }
            ).then(response => response.json())
            .then(data =>
                {
                    console.log(data);
                    localStorage.setItem("currentPlayer", data.idPlayer);
                    window.location.href = "/index";
                });
        }

    }

    return (

        <div>
            <div className="titleContentLogin container-fluid">
                <div className="row">

                    <div className="infoLogin col-sm-5 offset-1">
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
                        <img className="imagesLogin" src="http://www.otakia.com/wp-content/uploads/2011/03/Logo-Dofus.png" alt="dofus img"
                             style={{width : '20%',  left: '60%'}}/>
                        <img className="imagesLogin" src="https://solomonk.fr/img/classes/SACRIEUR.png" alt="cra img"
                             style={{ width: '20%', left: '75%', top: '18%'}}/>
                        <img className="imagesLogin" src="https://solomonk.fr/fr/img/wip.gif" alt="bong img"
                             style={{ width: '20%', left: '50%', top: '27%'}}/>
                    </div>

                </div>
            </div>

            <div className="principalContentLogin">

                <div className="container-fluid">
                    <div className="row">

                        <div className="loginLogin col-sm-6" style={{borderRight: 'thick double white', height: '500px'}}>

                            <div className="container-fluid">
                                <div className="row">

                                    <h1 style={{marginTop : "3%"}}> Se connecter </h1>
                                    <form onSubmit={connexion} method="get" className="form-example">
                                        <div className="input-group mb-3 col-sm-8">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Pseudo</span>
                                            </div>
                                            <input type="text" required={true} className="form-control" placeholder="Pseudo" aria-label="Username"
                                                   aria-describedby="basic-addon1" onChange={(e) => {
                                                setPseudoConnexion(e.target.value);}}/>
                                        </div>

                                        <div className="input-group mb-3 col-sm-8">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                                            </div>
                                            <input type="password" required={true} className="form-control" placeholder="Mot de passe" aria-label="Username"
                                                   aria-describedby="basic-addon1" onChange={(e) => {
                                                setPasswordConnexion(e.target.value);}}/>
                                        </div>


                                        <button type="submit" className="btn btn-light col-sm-8 offset-1"> Se connecter</button>
                                    </form>

                                </div>
                            </div>
                            <p id='connexionStatu' className="statuLogin"> </p>
                        </div>

                        <div className="signinLogin col-sm-6">

                            <div className="container-fluid">
                                <div className="row">
                                    <h1 style={{marginTop : "3%"}}> S'inscrire </h1>
                                    <form onSubmit={inscription} method="get" className="form-example">
                                        <div className="input-group mb-3 col-sm-8">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Pseudo</span>
                                            </div>
                                            <input type="text" required={true} className="form-control" placeholder="Pseudo" aria-label="Username"
                                                   aria-describedby="basic-addon1" onChange={(e) => {
                                                setPseudoInscription(e.target.value);}}/>
                                        </div>

                                        <div className="input-group mb-3 col-sm-8">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">Mot de passe</span>
                                            </div>
                                            <input type="password" required={true} className="form-control" placeholder="Mot de passe" aria-label="Username"
                                                   aria-describedby="basic-addon1" onChange={(e) => {
                                                setPasswordInscription(e.target.value);}}/>
                                        </div>

                                        <button type="submit" className="btn btn-light col-sm-8 offset-1"> S'inscrire</button>
                                    </form>

                                    <p id='inscriptionStatu' className="statuLogin"> </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <div className="initButton">
                <button id="btnInit" type="button" className="btn btn-success btnInit" onClick={initDataBase}> Initialiser </button>
            </div>

        </div>


)

}


export default Login;

