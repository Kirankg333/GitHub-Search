import Axios from 'axios';
import React from 'react';
import {CLIENT_ID,CLIENT_SECRET} from './GithubclientId';
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';


class GithubSearchApp extends React.Component{
    constructor(){
        super();
        this.state={
            githubusername:'',
            githubprofile:{},
            githubrepos:[],
            errormsg:''
        }
    }
    userChange=(e)=>{
        this.setState({
            githubusername:e.target.value
        })
    }


    click=(e)=>{
        e.preventDefault()
       this.searchProfileInfo(this.state.githubusername);
      this.searchreposInfo(this.state.githubusername);
    };
    searchProfileInfo=(githubusername)=>{
    let dataUrl=`https://api.github.com/users/${githubusername}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    Axios.get(dataUrl).then((response)=>{
        this.setState({
           githubprofile:response.data,
             githubusername:''
        })
        // console.log(response.data);
    }).catch((error)=>{
        this.setState({
            errormsg:error
        })
    })
    }
    searchreposInfo=(githubusername)=>{
        let dataUrl=`https://api.github.com/users/${githubusername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        Axios.get(dataUrl).then((response)=>{
            this.setState({
                githubrepos:response.data
               
            })
            console.log(response.data)
        }).catch((error)=>{
            this.setState({
                errormsg:error
            })
        })
        
    }

    render(){
       
        return(
            <React.Fragment>
                 {/* <pre>{JSON.stringify(this.state.githubusername)}</pre>
                <pre>{JSON.stringify(this.state.githubprofile)}</pre>
                <pre>{JSON.stringify(this.state.githubrepos)}</pre> */}

            <section className='p-3'>
               <div className='container'>
                  <div className='row'>
                    <div className='col'>
                      <p className='h3 text-primary'>GITHUB SEARCH APP </p>
                      <p>With elmah.io's free image to Base64 encoder it's easy to copy and paste markup or style for exactly your codebase. Simply drag and drop, upload, or provide an image URL in the controls above and the encoder will quickly generate</p>
                      <form className='form-inline'>
                          <div className='form-group'>
                              <input
                              name='githubusername'
                               value={this.state.githubusername}
                               onChange={this.userChange}
                              type='text' placeholder='username' className='form-control'/>
                          </div>
                          <div>
                              <input
                               onClick={this.click}
                              className='btn btn-sm bg-warning' type='submit'  value='search'/>
                          </div>   
                      </form>
                    </div>
                  </div>
               </div>
            </section>
            <section className='p-3'> 
             <div className='container'>
                   <div className='row'>
                       <div className='col'>
                          <GithubProfile githubprofile={this.state.githubprofile}/>
                       </div>
                   </div>
             </div>
            </section>
              <section className='p-3'> 
             <div className='container'>
                   <div className='row'>
                       <div className='col'>
                           {
                               this.state.githubrepos.length>0?
                               
                                   <GithubRepos githubrepos={this.state.githubrepos}/>:null
                            
                           }
                         
                       </div>
                   </div>
             </div>
            </section>
            </React.Fragment>
        )
    }
};
export default GithubSearchApp;