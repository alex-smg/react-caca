import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesList: [],
            seriesEpisodesList: [],
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    };

    componentDidMount() {


        fetch('seriesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesList: seriesListDepuisFichier});

            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                alert("j'ai fait ce que j'ai pu");
            });

    }

    render() {
        console.log(this.state.seriesList.id)
        return (
            <div>
                <input type="text"  value={this.state.value} onChange={this.handleChange}/>

                <ul>
                    {   this.state.value !== "" ? this.state.seriesList.filter(a => a.seriesName.toLowerCase().indexOf(this.state.value)>-1)
                        .map(item => <li key={item.id}>{item.seriesName}</li>)
                        : <li>FUCK LES MOTIONS !</li>
                    }
                </ul>
                <ul>
                    {this.state.seriesEpisodesList.filter(b => b.this.state.seriesEpisodesList.serie_id == this.state.seriesList.id)
                            .map(item => <li key={item.id}>{item.episodeName}</li>)


                    }
                </ul>

            </div>


        )


    }









}




export default App;
