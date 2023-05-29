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
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  updateState = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachObject => eachObject.id === activeCapitalId,
    )
    return activeCapitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()
    return (
      <div className="bg-container">
        <div className="capitals-card">
          <h1 className="title">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capitals-drop-down"
              onChange={this.updateState}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachObject => (
                <option
                  className="drop-down-item"
                  value={eachObject.id}
                  key={eachObject.id}
                >
                  {eachObject.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1 className="capital">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
