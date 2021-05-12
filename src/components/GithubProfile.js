import React from 'react';
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';


class GithubProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
            <section className='p-3'>
               <div className='container'>
                  <div className='row'>
                       <div className='col-md-3'>
                           {
                               Object.keys(this.props.githubprofile).length!==0?
                               <React.Fragment>
                                    <GithubProfileCard githubprofile={this.props.githubprofile}/>
                               </React.Fragment>:null
                           }
                          
                       </div>
                       <div className='col-md-9'>
                       {
                               Object.keys(this.props.githubprofile).length!==0?
                               <React.Fragment>
                                     <GithubProfileDetails  githubprofile={this.props.githubprofile}/>
                               </React.Fragment>:null
                           }
                            
                       </div>
                  </div>
               </div>
            </section>
          
            </React.Fragment>
        )
    }
};
export default GithubProfile;