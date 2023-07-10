import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../services/api'

import {FaArrowLeft} from 'react-icons/fa'

import { Container, Owner, Loading, BackButton, IssuesList, PageActions, FilterList } from "./styles";

export default function Repositorio(){
   const {repositorio} = useParams();

   const [repo, setRepo] = useState({});
   const [issues, setIssues] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [filters, setfilters] = useState([
    {state: 'all', label: 'Todas', active: true},
    {state: 'open', label: 'Abertas', active: false},
    {state: 'closed', label: 'Fechadas', active: false}
   ])
   const [filterIndex, setFilterIndex] = useState(0) 
   
   useEffect(()=>{
    async function load(){
        const nomeRepo = repositorio;

        const [repositorioData, issuesData] = await Promise.all([
            api.get(`/repos/${nomeRepo}`),
            api.get(`/repos/${nomeRepo}/issues`, {
                params:{
                    state: filters.find(f => f.active).state,
                    per_page:5
                }
            })
        ])
        setRepo(repositorioData.data)
        setIssues(issuesData.data)
        setLoading(false)
    } 
    load();
   },[repositorio])

   useEffect(()=>{
    
    async function loadIssues(){
        const nomeRepo = repositorio;
        const response = await api.get(`/repos/${nomeRepo}/issues`,{
            params:{
                state:filters[filterIndex].state,
                page,
                per_page: 5,
            },
        });

        setIssues(response.data)

    }
    loadIssues()
   },[page, filterIndex, filters])

   function handlePage(action){
        setPage(action === 'back' ? page - 1 : page + 1)
   }

   function handleFilter(index){
    setFilterIndex(index)
    setPage(1)
   }

    return(
    <>
        {!loading ?(
           <Container>
            <BackButton to="/">
                <FaArrowLeft color="#0d2636" size={30}/>
            </BackButton>
                <Owner>
                    <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                </Owner>

                <FilterList active={filterIndex}>
                    {
                        filters.map((filter, index)=>(
                            <button
                                key={index}
                                type="button"
                                onClick={()=>handleFilter(index)}
                            >
                                {filter.label}
                            </button>
                        ))
                    }
                </FilterList>

                <IssuesList>
                    {issues.map((issue, index) =>(
                        <li key={index}>
                            <img src={issue.user.avatar_url} alt={issue.user.login}/>
                            <div>
                                <strong>
                                    <a target="_blank" href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map((label,index) => (
                                        <span key={index}>{label.name}</span>
                                    ))}

                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssuesList>

                <PageActions>
                    <button
                     type="button" 
                     onClick={()=> handlePage('back')}
                     disabled={page < 2}
                     >
                        Voltar
                    </button>
                    <p>{page}</p>
                    <button type="button" onClick={()=> handlePage('next')}>
                        Proxima
                    </button>
                </PageActions>
            </Container>
        ) : (
            <Loading>
                <h1>Carregando...</h1>
            </Loading>
        )}
        
        </>
    )
    
}