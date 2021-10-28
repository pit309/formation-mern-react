import { useState } from "react"
import './formulaire.css'

function Formulaire(props) {
    const [showForm, setShowForm] = useState(true)
    const [persons, setPersons] = useState([
        {id: 1, name: "Patrick"},
        {id: 2, name: "Patrick"},
        {id: 3, name: "Patrick"},
        {id: 4, name: "Patrick"},
    ]);
    const [input, setInput] = useState()

    function DisplayForm(e) {
        e.preventDefault()

        //persons.push({id:5, name:"Marcel"})
        if(showForm){
            console.log(e.target.input, input)
        }
        console.log(showForm)
        setShowForm(!showForm)
    }

    function changeInput(e) {
        setPersons([...persons, {id: persons.length + 1, name: e.target.value}])
    }

    if (showForm) {
        return (
            <div class="container p10">
                <form className="container p10" onSubmit={DisplayForm}>
                    <input type="text" className="inputText" id="inputText" />
                    <button>Valider</button>
                </form>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                    </tr>
                    {
                        persons.map((person) => {
                            return (<tr><td>{person.id}</td><td>{person.name}</td></tr>)
                        })
                    }
                </table>
            </div>
        )
    }
    else {
        return (
            <div className="container p10">
                <button onClick={DisplayForm}>Afficher le formulaire</button>

                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                    </tr>
                    {
                        persons.map((person) => {
                            return (<tr><td>{person.id}</td><td>{person.name}</td></tr>)
                        })
                    }
                </table>
            </div>
        )
    }
}

export default Formulaire