import * as React from "react";
import data from "bootstrap/js/src/dom/data";

const Quests = () => {

    const getRequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/quests/all', getRequestOptions)
            .then(response => response.json())
            .then(data => setQuests(data));
    }, []);

    React.useEffect(() => {
        fetch('http://localhost:8080/rest/players/quest?id=' + localStorage.getItem("currentPlayer"), getRequestOptions)
            .then(response => response.json())
            .then(data => setQuestsPlayer(data));
    }, []);

    const [questsPlayer, setQuestsPlayer] = React.useState([{
        idQuest: 0,
        imageSrc: "",
        level: 0,
        locationName: "",
        name: "",
        succes: {
            idSucces: 0,
            name: "",
            nbPoint: 0
        }
    }]);

    const [quests, setQuests] = React.useState([{
        idQuest: 0,
        imageSrc: "",
        level: 0,
        locationName: "",
        name: "",
        succes: {
            idSucces: 0,
            name: "",
            nbPoint: 0
        }
    }]);

    function addQuest(e){
        e.preventDefault();
        let idQuest = e.target.id;

        fetch('http://localhost:8080/rest/quests/id?id=' + idQuest, getRequestOptions)
            .then(response => response.json())
            .then(data => {

            const patchRequestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            
            fetch('http://localhost:8080/rest/players?id='+localStorage.getItem("currentPlayer"), patchRequestOptions)
                .then(response => response.json())
                .then(data => setQuests(data));}

    );

    }

    function checkInclude(quest) {
        let include = false;

        for(let i = 0 ; i < questsPlayer.length ; i++) {
            if(quest.idQuest === questsPlayer[i].idQuest) {
                include = true;
                break;
            }
        }
        return include;
    }

    function displayQuests(quest) {

        if(!checkInclude(quest)) {
           return(<tr>
                <td className="border-0 text-center">
                    <button type="button" id={quest.idQuest} className="btn btn-light" style={{width: "125%"}}
                    onClick={addQuest}> Indiquer faite </button>
                </td>
                <td className="border-0 text-center"> {quest.name}</td>
                <td className="border-0 text-center">{quest.locationName}</td>
                <td className="border-0 text-center">{quest.succes.name}</td>
            </tr>)
        }
        else {
            return (<tr>
                <td className="border-0 text-center"></td>
                <td className="border-0 text-center"> {quest.name}</td>
                <td className="border-0 text-center">{quest.locationName}</td>
                <td className="border-0 text-center">{quest.succes.name}</td>
            </tr>)
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


            <div className="container-fluid tableAll">
                <div className="row">
                    <div className="col-sm-10 offset-1">
                        <table className="table table-sm table-striped text-solodarkbrown">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-solobrown border-0"></th>
                                    <th scope="col" className="bg-solobrown border-0 text-center"> Nom </th>
                                    <th scope="col" className="bg-solobrown border-0 text-center"> Lieu </th>
                                    <th scope="col" className="bg-solobrown border-0 text-center"> Succès </th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                quests.map((quest) =>
                                    displayQuests(quest)
                                )

                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Quests;
