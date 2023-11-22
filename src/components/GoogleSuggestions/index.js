// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    // console.log(suggestionsList)

    const {searchInput} = this.state

    const filteredsuggestionsList = suggestionsList.filter(suggestionitem =>
      suggestionitem.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="suggestions-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeInput}
          />

          <ul>
            {filteredsuggestionsList.map(suggestionitem => (
              <SuggestionItem
                key={suggestionitem.id}
                suggestionitem={suggestionitem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
