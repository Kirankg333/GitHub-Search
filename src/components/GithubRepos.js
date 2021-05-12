import React from 'react';


class GithubRepos extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.props)}</pre> */}
               
             <div className='card'>
                    <div className='card-header bg-light'>
                        <h3>GITHUB REPOS</h3> 
                    </div>
                    <div className='card-body'>
                      <ul className='list-group'>
                        {
                            this.props.githubrepos.map((repose)=>{
                                return(
                                    <li className='list-group-item'>
                                         <a href={repose.html_url}  target='_blank' >{repose.name}</a>
                                         <span className='badge badge-primary mx-5'>{repose.stargazers_count}STARGAZERS</span>
                                         <span className='badge badge-secondary mx-5'>{repose.watchers_count}WATCHERS</span>
                                    </li>
                                )
                            })
                        }
                      </ul>
                    </div>
             </div>
            </React.Fragment>
        )
    }
};
export default GithubRepos;