import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

function Header() {
    const navigate = useNavigate(); // Define navigate using the useNavigate hook

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                padding: '1.2rem 2rem',
                borderRadius: '32px',
                width: '80%',
                maxWidth: '1800px',
                margin: '0 auto',
                marginTop: '1.5rem',
                maxHeight: '6.5rem',
                position: 'relative',
                zIndex: 1000,
                border: '1px solid rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.95)',
            }}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogoClick}
                style={{
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h2
                        style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            background: 'linear-gradient(45deg, #2c3e50 30%, #30a7d2 90%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textFillColor: 'transparent',
                            margin: 0,
                            cursor: 'pointer',
                            letterSpacing: '-0.5px',
                            position: 'relative',
                        }}
                    >
                        Librarian
                    </h2>
                </Link>
            </motion.div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3.5rem',
                    marginLeft: '8rem',
                }}
            >
                {[
                    { path: '/', label: 'Home' },
                    { path: '/login', label: 'Logout' },
                ].map((item) => (
                    <motion.div key={item.path} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                        <Link
                            to={item.path}
                            style={{
                                textDecoration: 'none',
                                color: '#254668',
                                fontSize: '1.3rem',
                                fontWeight: 600,
                                transition: 'all 0.3s ease-in-out',
                                position: 'relative',
                                padding: '0.5rem 0',
                            }}
                        >
                            {item.label}
                            <span
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '0%',
                                    height: '2px',
                                    background: 'linear-gradient(45deg, #2c3e50 30%, #30a7d2 90%)',
                                    transition: 'width 0.3s ease',
                                }}
                            ></span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.nav>
    );
}

export default Header;