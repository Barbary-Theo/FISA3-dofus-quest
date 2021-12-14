import * as React from "react";
import Header from "./minorComponents/Header";

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

    //Function to add quest to the current player
    function addQuest(e){
        e.preventDefault();
        let idQuest = e.target.id;

        //Get the clicked quest
        fetch('http://localhost:8080/rest/quests/id?id=' + idQuest, getRequestOptions)
            .then(response => response.json())
            .then(data => {

                //Prepare the fetch to add the quest
                const patchRequestOptions = {
                    method: 'PATCH',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };

                //Add the quest to the player by his id
                fetch('http://localhost:8080/rest/players?id='+localStorage.getItem("currentPlayer"), patchRequestOptions)
                    .then(response => response.json())
                    .then(res => {
                        setQuestsPlayer(res);

                        //Fetch to refresh all quest on the page
                        fetch('http://localhost:8080/rest/quests/all', getRequestOptions)
                            .then(response => response.json())
                            .then(data => setQuests(data)
                        );

                });
        });

    }

    function removeQuest(e){
        e.preventDefault();

        let idQuest = e.target.id;

        //Get the clicked quest
        fetch('http://localhost:8080/rest/quests/id?id=' + idQuest, getRequestOptions)
            .then(response => response.json())
            .then(data => {

                //Prepare the fetch to add the quest
                const patchRequestOptions = {
                    method: 'PATCH',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                };

                //Add the quest to the player by his id
                fetch('http://localhost:8080/rest/players/rm?idP='+localStorage.getItem("currentPlayer")+'&idQ='+data.idQuest, patchRequestOptions)
                    .then(response => response.json())
                    .then(res => {
                        setQuestsPlayer(res);
                        console.log(res);

                        //Fetch to refresh all quest on the page
                        fetch('http://localhost:8080/rest/quests/all', getRequestOptions)
                            .then(response => response.json())
                            .then(data => setQuests(data)
                            );

                    });
            });

    }

    //Function to verify if the quest is present in the player's quests
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

    //Function to display quests
    function displayQuests(quest) {

        //If it is not include in the player's quests
        if(!checkInclude(quest)) {
           return(<tr>
                <td className="border-0 text-center">
                    <button type="button" id={quest.idQuest} className="btn btn-light buttonDone" style={{width: "125%"}}
                    onClick={addQuest}> Indiquer faite </button>
                </td>
                <td className="border-0 text-center"> {quest.name}</td>
                <td className="border-0 text-center">{quest.locationName}</td>
                <td className="border-0 text-center">{quest.succes.name}</td>
            </tr>)
        }
        else {
            return (<tr>
                <td className="border-0 text-center">
                    <button type="button" id={quest.idQuest} className="btn btn-light buttonNotDone" style={{width: "125%"}}
                     onClick={removeQuest}> Annuler </button></td>
                <td className="border-0 text-center"> {quest.name}</td>
                <td className="border-0 text-center">{quest.locationName}</td>
                <td className="border-0 text-center">{quest.succes.name}</td>
            </tr>)
        }

    }

    return (

        //header
        <div>
            <Header />

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
