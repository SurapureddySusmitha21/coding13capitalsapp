import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  getCapital = event => {
    this.setState({capital: event.target.value})
  }

  getFindCapital = () => {
    const {capital} = this.state
    const find = countryAndCapitalsList.find(
      eachItem => capital === eachItem.id,
    )
    return find
  }

  render() {
    const {capital} = this.state
    const findCapitals = this.getFindCapital()
    return (
      <>
        <div className="bg-container">
          <div className="capita-container">
            <h1 className="heading">Countries And Capitals</h1>
            <div className="container">
              <select
                className="select-container"
                onChange={this.getCapital}
                value={capital}
              >
                {countryAndCapitalsList.map(each => (
                  <option className="option" key={each.id} value={each.id}>
                    {each.capitalDisplayText}
                  </option>
                ))}
              </select>{' '}
              is capital of which country?
              <p className="paragraph">{findCapitals.country}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Capitals
// Write your code here
