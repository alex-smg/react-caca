import React, {Component} from 'react';
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
        fetch('seriesEpisodesList.json',{})
            .then(response => response.json())
            .then(seriesListDepuisFichier => {
                this.setState({seriesEpisodesList: seriesListDepuisFichier});

            })



    };


    render() {

        return (

            <div>
                <input type="text"  value={this.state.value} onChange={this.handleChange}/>

                <ul>
                    {   this.state.value !== "" ? this.state.seriesList.filter(a => a.seriesName.toLowerCase().indexOf(this.state.value)>-1)
                            .map((item) => <li key={item.id}>{item.seriesName}

                                <ul>
                                    {
                                        this.state.seriesEpisodesList.filter(
                                            b => b.serie_id == item.id
                                        ).map(episode => episode.episodes_list.filter(
                                            c => c.episodeName
                                            ).map(name => <li>{name.episodeName}</li>)
                                        )


                                    }
                                </ul>
                            </li>)




                        : <li>Nom de la série</li>
                    }

                </ul>

            </div>
        )
    }
}


export default App;
