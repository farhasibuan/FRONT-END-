import { Component } from 'react'
class Footer extends Component {
  render () {
    return (
      <footer>
        <h3>Copyright &copy;2025 Front-end developer by {this.props.nama}</h3>
        <span>Make with &#10084;</span>
      </footer>
    )
  }
}
export default Footer