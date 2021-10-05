import React, { Component } from 'react'
import axios from 'axios';
import FavCard from './FavCard';
import ModalForm from './ModalForm';

class FavWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favData: [],
            id: '',
            title:'',
            description:'',
            toUSD:'',
            image_url:'',
            showModle:false
        }
    }

    componentDidMount = async () => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}/getWatch`).then(res => {
            this.setState({
                favData: res.data
            })
        })
    }
    handleUpdate = async (e) => {
        e.preventDefault();
        let config = {
            method: "PUT",
            url: `${process.env.REACT_APP_LOCALHOST}/updaetWatch/${this.state.id}`,
            data: {
                name: e.target.title.value,
                description: e.target.description.value,
                toUSD: e.target.price.value,
                image_url: e.target.image_url.value
            }
        };
        await axios(config).then(res => {
            this.setState({
                favData: res.data,
                showModle:false
            })
        })
    }
    handleDelete = async (id) => {

        axios.delete(`${process.env.REACT_APP_LOCALHOST}/deleteWatch/${id}`).then(res => {
            this.setState({
                favData: res.data
            })
        })
    }
    handleEdit = (id,title,description,toUSD,image_url)=>{
        this.setState({
            id :id,
            title:title,
            description:description,
            toUSD:toUSD,
            image_url:image_url,
            showModle:true
        })
    }
    handleClose = ()=>{
        this.setState({
            showModle:false
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.favData.map(item => {
                        return <FavCard favData={item}
                            handleUpdate={this.handleUpdate}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}/>
                    })}
                </div>
                <ModalForm title={this.state.title}
                            description={this.state.description}
                            prise={this.state.toUSD}
                            image_url={this.state.image_url}
                            show={this.state.showModle}
                            handleUpdate={this.handleUpdate}
                            handleClose={this.handleClose}/>

            </div>
        )
    }

}

export default FavWatch
