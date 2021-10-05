import axios from 'axios'
import React, { Component } from 'react'
import WatchCard from './WatchCard';

 class Home extends Component {
     constructor(props){
         super(props);
         this.state = {
             allData : []
         }
     }

    componentDidMount = async ()=>{
        axios.get(`${process.env.REACT_APP_LOCALHOST}/seed`).then(res=>{
            this.setState({
                allData :res.data
            })
        })
    }
    addFav = async (name,description,price,image_url)=>{
        let config ={
            method:"POST",
            url:`${process.env.REACT_APP_LOCALHOST}/createWatch`,
            data:{
                name :name,
                description :description,
                toUSD : price,
                image_url : image_url
            }
        };
        await axios(config)
    }
    render() {
        return (
            <div>
                <div className="row">
                {this.state.allData.map(item=>{
                    return <WatchCard allData={item}
                                      addFav={this.addFav} />
                })}
                </div>
            </div>
        )
    }
}

export default Home
