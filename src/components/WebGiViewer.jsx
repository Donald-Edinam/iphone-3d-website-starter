import React, {useRef} from 'react'

const WebGiViewer = () => {

  const canvasRef = useRef(null);
  return (
    <div>
      <div id="webgi-canva-container">
        <canvas id="webgi-canvas" ref={canvasRef} />
      </div>
    </div>
  )
}

export default WebGiViewer
