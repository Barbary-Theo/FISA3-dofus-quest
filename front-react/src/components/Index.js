import * as React from "react";

const Index = () => {

    const getRequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/players/quest?id=' + localStorage.getItem("currentPlayer"), getRequestOptions)
            .then(response => response.json())
            .then(data => setQuest(data));
    }, []);

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/players/id?id=' + localStorage.getItem("currentPlayer"), getRequestOptions)
            .then(response => response.json())
            .then(data => setPlayer(data));
    }, []);


    const [quests, setQuest] = React.useState([{
        idQuest: 0,
        imageSrc: "",
        level: 0,
        locationName: "",
        name: "",
        idSucces: 0
    }]);

    const [player, setPlayer] = React.useState([{
        idPlayer: 0,
        pseudo: "",
        password: "",
        questDone: []
    }]);

    function displayQuests() {
        if(quests.length >0) {
            return quests.map((quest) =>

                <div className="row col-sm-4 offset-1 questCard">
                    <div className="col-auto bg-solobrown rounded-left p-2 locationName">
                        <p style={{writingMode: 'vertical-rl'}}>{quest.locationName}</p>
                    </div>
                    <div className="col bg-solobeige rounded-bottom-right questCardContent">
                        <div className="row">
                            <div className="questTitle col-12 rounded-top-right bg-solodarkbrown text-solobeige font-weight-bold pt-1 pb-1">
                                <div className="container-fluid">
                                    <div className="row">
                                        <p className="col-sm-8"> {quest.name}</p><span className="col-sm-4" style={{textAlign: 'end'}}>Niv.{quest.level}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divImage">
                            <img src={quest.imageSrc} alt={quest.name}/>
                        </div>

                    </div>
                </div>
            )
        }
        else {
            return <div style={{textAlign : 'center', fontSize: '40px', marginTop: '7%'}}> Aucun </div>
        }
    }

    return (

        <div>

            <nav className="navbar navbar-expand-lg header">
                <a className="navbar-brand" href="/index"><img src="https://upload.wikimedia.org/wikipedia/fr/a/a3/Dofus_emeraude.png" alt="emerald img" style={{width : '35%'}}/></a>
                <div>
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-link" href="/index">Quêtes réalisées</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/all">Toutes les quêtes</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/succes">Les succès</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/">Se déconnecter</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="classDecoration container-fluid">
                <div className="row">
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/1M.svg" height="50"  style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/2M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/3M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/4M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/5M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/6M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/7M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/8M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/9M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/10M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/11M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1"><img src="https://solomonk.fr/img/classes/12M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                </div>
            </div>

            <div className="presentation">
                <h1> Bonjour {player.pseudo}</h1>

                <h4> Voici les quêtes quêtes réalisées sur ce personnage </h4>
            </div>

            <div className="container-fluid">
                <div className="row">

                {
                    displayQuests()
                }

                </div>
            </div>


        </div>
    )

}

export default Index;
