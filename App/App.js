import React, { Component } from 'react';
// import asideTextArr from './Aside/aside.js';
import Button from './Button/Button.js';
import CardList from './CardList/CardList.js';
import speciesScrubber from './Scrubbers/speciesScrubber';
import peopleScrubber from './Scrubbers/peopleScrubber';
import planetScrubber from './Scrubbers/planetScrubber'
import vehicleScrubber from './Scrubbers/vehicleScrubber'
import filmsScrubber from './Scrubbers/filmsScrubber'
import Favorites from './Favorites/favorites.js'

let film;

class App extends Component {
  constructor() {
    super()
    this.state = {
      cardArr: '',
      film: 'film text',
      speciesArr: [],
      peopleArr: [],
      planetsArr: [],
      vehicleArr: [],
      previous: 'previous-url',
      next: 'next-url'
    }
  }

  componentDidMount () {
    let species;
    let planets;
    let vehicles;
    let people;

    filmsScrubber().then(filmArr => {
      console.log(filmArr);
      let filmSelector = Math.floor(Math.random() * (7 - 0)) + 0
      this.setState({film: filmArr[filmSelector]})
    })

    // speciesScrubber()
    //   .then( speciesScrubbedArr => {
    //     species = speciesScrubbeArr
    //     planetScrubber()
    //       .then( planetScrubbedArr => {
    //         planets = planetScrubbedArr
    //         // people = peopleScrubber()
    //       } )
    //   } )

      // this.setState( {
      //   speciesArr: species,
      //   planetsArr: planets,
      //   vehicleArr: vehicles,
      //   peopleArr: people
      // })

    this.setState({
      speciesArr: species,
      // peopleArr: peopleScrubber(),
      cardArr: [
        {
          Type: 'people',
          Name: 'Luke Skywalker',
          Homeworld: 'Tatooine',
          Species: 'Human',
          Language: 'Galactic Basic',
          Population: '200000',
          Terrain: null,
          Climate: null,
          Residents: null,
          Model: null,
          Class: null,
          NumberOfPassengers: null
        },
        {
          Type: 'people',
          Name: 'Person 2',
          Homeworld: 'Ta',
          Species: 'Hum',
          Language: 'Basic',
          Population: '10000',
          Terrain: null,
          Climate: null,
          Residents: null,
          Model: null,
          Class: null,
          NumberOfPassengers: null
        }
      ]
    })
  }


  render() {
    // console.log(this.state.speciesArr);
    return (
      <div id='main-container'>
          <div id='aside-container'>
            <aside id='synopsis-title'>
              <div id='synopsis'><p key='1'>{this.state.film}</p></div>
            </aside>
          </div>
        <div id='content-container'>
          <header id='header-container'>
            <h1>SWAPI-box</h1>
            <Favorites />
          </header>
          <section id='button-container'>
            <Button type={ 'people' }/>
            <Button type={ 'planets' }/>
            <Button type={ 'vehicles' }/>
          </section>
            <CardList cardArr={ this.state.cardArr }
                      type={ 'person' }/>
        </div>
      </div>
    )
  }

}


export default App;
