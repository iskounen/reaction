import { storiesOf } from "@storybook/react"
import * as React from "react"
import Button from "../../buttons/default"
import { Images } from "../fixtures/components"
import FullscreenViewer from "../sections/fullscreen_viewer/fullscreen_viewer"

class FullscreenViewerDemo extends React.Component<any, any> {
  constructor(props) {
    super(props)
    this.state = { isViewerOpen: false }
  }

  openViewer = () => {
    this.setState({ isViewerOpen: true })
  }

  closeViewer = () => {
    this.setState({ isViewerOpen: false })
  }

  render() {
    return (
      <div>
        <Button onClick={this.openViewer}>Open Fullscreen Viewer</Button>
        <FullscreenViewer onClose={this.closeViewer} show={this.state.isViewerOpen} images={Images} />
      </div>
    )
  }
}

storiesOf("Publishing/Fullscreen Viewer", module).add("Button", () => {
  return <FullscreenViewerDemo />
})
