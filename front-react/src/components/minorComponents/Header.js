import * as React from "react";

const Header = () => {

    return (

        <div>

            <nav className="navbar navbar-expand-lg header">
                <a className="navbar-brand dofus" href="/index"><img src="https://upload.wikimedia.org/wikipedia/fr/a/a3/Dofus_emeraude.png" alt="emerald img" style={{width : '35%'}}/></a>
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
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/1M.svg" height="50"  style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/2M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/3M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/4M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/5M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/6M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/7M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/8M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/9M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/10M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/11M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                    <div className="col-sm-1 tete"><img src="https://solomonk.fr/img/classes/12M.svg" height="50" style={{display: 'inline-block', height: '50px', width: 'auto'}}/></div>
                </div>
            </div>


        </div>
    )

}

export default Header;
