import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from "react-player";

const ModalVideo = ({ closeModal, show , site , videoKey}) => {
    const [urlVideo , setUrlVideo] = useState(null)
    
    useEffect( () => {

        switch (site) {
            case "YouTube":
                setUrlVideo(`https://youtu.be/${videoKey}`)
                break;
            case "vimeo":
                setUrlVideo(`https://vimeo.com/${videoKey}`)    
            default:
                break;
        }

    }, [videoKey, site])

  return (
    <Modal show={show} onHide={closeModal}>
        <ReactPlayer url={urlVideo} controls/>
    </Modal> 
  );
};

export default ModalVideo