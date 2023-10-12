import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  handleMode = () => {
    this.setState(prevState => ({
      isLightMode: !prevState.isLightMode,
    }))
  }

  render() {
    const {isLightMode} = this.state

    const bgMode = isLightMode ? 'light-color' : 'dark-color'
    return (
      <div className="bg1">
        <div className={bgMode}>
          <h1>Click To Change Mode</h1>
          <button type="submit" onClick={this.handleMode}>
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
