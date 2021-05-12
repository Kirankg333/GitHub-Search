import React from 'react';


class GithubProfileDetails extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let{followers,public_repos,gists_url,following,email,location,company,starred_url,name,twitter_username}=this.props.githubprofile
        return(
            <React.Fragment>
                 <div className='card'>
                       <div className='card-header bg-light'>
                      <span className='badge badge-primary mx-2'>{followers}FOLLOWERS</span>
                      <span className='badge badge-warning mx-2'>{public_repos}REPOS</span>
                      <span className='badge badge-success mx-2'>{gists_url}</span>
                      <span className='badge badge-secondary mx-2'>{following}FOLLOWING</span>
                       </div>
                       <div className='card-body'>
                         <ul className='list-group'>
                             <li className='list-group-item'>
                               NAME:{name}
                             </li>
                             <li className='list-group-item'>
                               COMPANY:{company}
                             </li>
                             <li className='list-group-item'>
                               LOCATION:{location}
                             </li>
                             <li className='list-group-item'>
                            EMAIL:{email}
                             </li>
                             <li className='list-group-item'>
                               PROFILE_URL:{starred_url}
                             </li>
                             <li className='list-group-item'>
                               USER NAME:{twitter_username}
                             </li>
                         </ul>
                       </div>
                 </div>
            </React.Fragment>
        )
    }
};
export default GithubProfileDetails;