// Write your code here
// Write your code here
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

  updateSearchResult = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    // console.log(suggestionsList)

    const {searchInput} = this.state

    const filteredsuggestionsList = suggestionsList.filter(suggestionitem =>
      suggestionitem.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                placeholder="Search Google"
                className="search-input"
                type="search"
                value={searchInput}
                onChange={this.onChangeInput}
              />
            </div>

            <ul className="suggestions-list">
              {filteredsuggestionsList.map(suggestionitem => (
                <SuggestionItem
                  key={suggestionitem.id}
                  suggestionitem={suggestionitem}
                  updateSearchResult={this.updateSearchResult}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
