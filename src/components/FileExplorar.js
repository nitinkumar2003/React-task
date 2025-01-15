import React, { useState } from 'react'
// FileExplorerObj
import { FileExplorerObj } from './Constant'
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';

const FileExplorar = () => {
    console.log("FileExplorerObj", FileExplorerObj)
    return (
        <Row className="mt-4">
            <Col xs={12} md={8} className="ms-4">
                <h3>File Explorer</h3>
                {FileExplorerObj?.map((item, index) => (
                    <div key={index} className="ms-3">
                        <MapFolder item={item} />
                    </div>
                ))}
            </Col>
        </Row>

    )
}



const MapFolder = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ms-4" onClick={() => setIsOpen(!isOpen)}>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Button
                            variant="link"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            style={{ textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            {item.label}
                        </Button>
                    </Card.Header>
                    {isOpen && item.folder?.length > 0 && <>

                        {item.folder?.map((fItem, index) => {

                            return <MapFolder key={index} item={fItem} />
                        }
                        )}
                    </>}
                </Card>
            </Accordion>
        </div>
    );
};

export default FileExplorar
