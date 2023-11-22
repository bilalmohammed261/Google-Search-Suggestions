// Write your code here
const SuggestionItem = props => {
  const {suggestionitem} = props
  const {id, suggestion} = suggestionitem
  console.log(id)

  return <li>{suggestion}</li>
}

export default SuggestionItem
