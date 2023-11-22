// Write your code here
const SuggestionItem = props => {
  const {suggestionitem, updateSearchResult} = props
  const {id, suggestion} = suggestionitem
  console.log(id)

  const onClickSuggestion = () => {
    updateSearchResult(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
