import { useState } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {

  const [show, setShow] = useState(false)
  const close = () => setShow(!show)

  return (
    <>
      <div className='container mx-auto p-4'>
        {/* <button onClick={() => setShow(!show)}>{JSON.stringify(show)}</button>
        <br /> */}

        <OverlayTrigger
          rootClose
          show={show}
          onToggle={() => setShow(false)}
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-basic">
              <Popover.Header as="h3">
                <div className='d-flex justify-content-end'>
                  <button className='d-flex justify-content-end bg-secondary text-white'
                    style={{ borderRadius: '50%', borderColor: 'transparent' }}
                    onClick={close}>X</button>
                </div>
                Popover right
              </Popover.Header>
              <Popover.Body>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
              </Popover.Body>
            </Popover>
          }>
          <Button variant="success" onClick={() => setShow(!show)}>Click me to see</Button>
        </OverlayTrigger>
      </div>
    </>
  )
}

export default App
