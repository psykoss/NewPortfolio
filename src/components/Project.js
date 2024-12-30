import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import closeModal from "../images/close.svg";

const Project = ({ technologies, title, image, color, id, github, deployed, description }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-md-6 col-lg-4 mb-4 px-4"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="project-card"
        onClick={handleOpenModal}
        style={{
          backgroundColor: '#2d2d2d',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div className="image-container" style={{ height: '200px' }}>
          <img 
            src={image} 
            alt="Project preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        
        <div className="content-container" style={{ 
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 200px)'
        }}>
          <div className="tech-tag" style={{ color: color, marginBottom: '8px' }}>
            <em>{technologies}</em>
          </div>
          
          <h2 className="project-title mb-2" style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ffffff'
          }}>
            {title}
          </h2>
          
          <p className="project-description mb-3" style={{
            color: '#e0e0e0',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            flex: '1',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis'
          }}>
            {description}
          </p>
          
          <div className="project-links" style={{ marginTop: 'auto' }}>
            <button 
              className="view-more"
              style={{
                background: color,
                color: '#000000',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                width: '100%',
                fontWeight: '500'
              }}
            >
              Read More →
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#2d2d2d',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '600px',
            width: '90%'
          }
        }}
      >
        <button
          onClick={handleCloseModal}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <img src={closeModal} alt="Close" style={{ width: '20px', height: '20px' }} />
        </button>

        <img 
          src={image} 
          alt="Project preview"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}
        />

        <h2 style={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '1rem'
        }}>
          {title}
        </h2>

        <p style={{
          color: '#e0e0e0',
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: color,
                color: '#000000',
                padding: '8px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              View on GitHub
            </a>
          )}
          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: color,
                color: '#000000',
                padding: '8px 16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </Modal>
    </motion.div>
  );
};

export default Project;