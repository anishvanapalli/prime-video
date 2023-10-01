// Write your code here
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import 'reactjs-popup/dist/index.css'

class MovieItem extends Component {
  render() {
    const {details} = this.props
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <div className="item-card">
              <img
                src={details.thumbnailUrl}
                alt="thumbnail"
                className="thumbnail-img"
              />
            </div>
          }
          className="popup-content"
        >
          {close => (
            <>
              <button
                data-testid="closeButton"
                className="close-button"
                type="button"
                onClick={close}
              >
                <IoMdClose />
              </button>
              <ReactPlayer url={details.videoUrl} controls />
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default MovieItem
