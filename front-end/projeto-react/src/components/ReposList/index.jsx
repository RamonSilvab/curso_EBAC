import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);
        
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Usuário não encontrado ou ocorreu um erro na requisição.');
                }
                return res.json();
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            })
            .catch(error => {
                setEstaCarregando(false);
                setDeuErro(true);
                console.error('Erro ao carregar repositórios:', error);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : deuErro ? (
                <h1>Erro: Usuário não encontrado ou ocorreu um erro na requisição.</h1>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>
                            <div>
                                <a className={styles.itemLink} href={html_url} target="_blank" rel="noopener noreferrer">Visitar no GitHub</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReposList;
