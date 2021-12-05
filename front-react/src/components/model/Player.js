import * as React from "react";

const AffichageChelou = () => {

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
        data.map((item) => item.questDone.map((quest) => <div className="image" style={{backgroundImage:`url(${quest.imageSrc})`}}> </div>)  )
    )

}

const GetAll = () => {
    console.log("oui")
    if( this.props.pseudo === document.getElementById("connectInput").value ) {
        console.log("oui")
        return (<p> Oui </p>)
    }
    else {
        console.log("non")
        return (<p> Non </p>)
    }
}

export default GetAll;