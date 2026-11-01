import { useContext } from "react"
import { UserContext } from "../context/userContext"

function User(){

    const {user}=useContext(UserContext);

    return (
        <>
        <div className="flex justify-center">
            <div className="card w-96 bg-base-100 card-md shadow-sm bg-mist-500">
              <div className="card-body">
                <h2 className="card-title">Utente: {user && user.nome}</h2>
                <p>E-mail: {(user && user.email) || "non richiesta tramite login"}</p>
              </div>
            </div>
        </div>
        </>
    )
}

export default User