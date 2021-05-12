import React from 'react';


class GithubProfileCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
 {/* <pre>{JSON.stringify(this.props.githubprofile)}</pre> */}
 <div className='card'>
          <img src={this.props.githubprofile.avatar_url} alt='/' className='img-fluid'/>
          <div className='card-body'>
            <h3 className='card-title'>{this.props.githubprofile.name}</h3>
            <p>{this.props.githubprofile.location}</p>
            <a href={this.props.githubprofile.html_url} target='_blank' className='btn btn-sm bg-primary'>profile</a>
           </div>
           </div>
           
            </React.Fragment>
        )
    }
};
export default GithubProfileCard;