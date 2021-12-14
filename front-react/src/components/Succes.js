import * as React from "react";
import Header from './Header';

const Succes = () => {

    const getRequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    //Get user's quests connected at this moment
    React.useEffect(() => {
        fetch('http://localhost:8080/rest/succes/all', getRequestOptions)
            .then(response => response.json())
            .then(data => setSucces(data));
    }, []);


    const [succes, setSucces] = React.useState([{
        idSucces: 0,
        name: "",
        nbPoint: 0
    }]);


    return (

        <div>

            <Header />

            <div className="container-fluid succesElement">
                <div className="row">
                    <div className="col-sm-10 offset-1">
                        <table className="table table-sm table-striped text-solodarkbrown">
                            <thead>
                            <tr>
                                <th scope="col" className="bg-solobrown border-0 text-center"> Nom </th>
                                <th scope="col" className="bg-solobrown border-0 text-center"> nbPoint </th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                succes.map((succe) =>
                                    <tr >
                                        <td> {succe.name}</td>
                                        <td> {succe.nbPoint} </td>
                                    </tr>
                                )

                            }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Succes;
