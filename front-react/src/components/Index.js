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


    return (

        <div>
            <nav>

            </nav>

            <div className="container-fluid">
                <div className="row">

                    {
                        quests.map((quest) =>


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

                </div>
            </div>


        </div>
    )

}

export default Index;
