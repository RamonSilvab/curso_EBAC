import { useEffect, useState } from "react";

const ReposList = () => {
    const [repos, getRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/RamonSilvaB/repos')
            .then(res => res.json())
            .then(resJson => {
                getRepos(resJson);
                console.log(resJson);
            })
    }, [])

    return (
        <ul>
            <li>Repositórios:</li>
            {repos.map(repositorio => (
                <li key={repositorio.id}> <br /><br />
                    <b>Nome:</b> {repositorio.name}; <br /> 
                    <b>Linguagem:</b> {repositorio.language} <br />
                    <a href={repositorio.html_url} target="_blank">Visitar no GitGub</a><br />
                </li>
            ))}
        </ul>
    )
}

export default ReposList;