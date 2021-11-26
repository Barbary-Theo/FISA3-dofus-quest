
const Login = () => {


    return (

        <div className="likeBody divLogin">
            <div className="container-fluid divLogin" style={{marginTop: '2%', marginBottom: '3%'}}>
                <div className="row divLogin">

                    <div className="col-sm-12 divLogin">
                        <h1 className="h1Login"> Vous avez un compte ? <br/> Veuillez indiquer votre pseudo</h1>
                    </div>

                    <div className="col-sm-12 inputElement divLogin">
                        <div className="input-group mb-3 divLogin">
                            <span className="input-group-text" id="basic-addon1">Pseudo</span>
                            <input type="text" className="form-control" placeholder="pseudo"
                                   aria-label="identifiant" aria-describedby="basic-addon1"/>
                        </div>
                    </div>

                    <div className="col-sm-12 divLogin">
                        <button className="btn btn-secondary"> Se connecter</button>
                    </div>

                </div>
            </div>


            <hr style={{color : 'lightgrey'}}/>


                <div className="container-fluid divLogin" style={{marginTop: '3%', marginBottom: '2%'}}>
                    <div className="row divLogin">

                        <div className="col-sm-12 divLogin">
                            <h1 className="h1Login"> Pas de compte ? <br/> Inscrivez-vous en indiquant votre pseudo</h1>
                        </div>

                        <div className="col-sm-12 inputElement divLogin">
                            <div className="input-group mb-3 divLogin">
                                <span className="input-group-text" id="basic-addon2">Pseudo</span>
                                <input type="text" className="form-control" placeholder="pseudo"
                                       aria-label="Nom" aria-describedby="basic-addon1"/>
                            </div>
                        </div>

                        <div className="col-sm-12 divLogin">
                            <button className="btn btn-secondary"> S'inscrire</button>
                        </div>

                    </div>
                </div>

        </div>

    );

}

export default Login;
