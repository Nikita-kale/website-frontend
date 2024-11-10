import React, { useState, useEffect, useCallback } from 'react';
import './CSS/Feedback.css';
import axios from 'axios';  // Using Axios for HTTP requests

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [newFeedback, setNewFeedback] = useState({ name: '', rating: 0, comment: '' });
    const [error, setError] = useState(null);  // State for error handling

    useEffect(() => {
        // Fetch feedbacks from backend on component mount
        const fetchFeedbacks = async () => {
            try {
                const response = await axios.get('https://website-back-nptk.onrender.com/feedbacks');
                setFeedbacks(response.data);
            } catch (error) {
                console.error("There was an error fetching the feedbacks!", error);
                setError("Could not load feedbacks. Please try again later.");
            }
        };
        fetchFeedbacks();
    }, []);

    const handleRatingHover = useCallback((rating) => {
        setNewFeedback((prev) => ({ ...prev, rating }));
    }, []);

    const handleFeedbackChange = useCallback((e) => {
        const { name, value } = e.target;
        setNewFeedback((prev) => ({ ...prev, [name]: value }));
    }, []);

    const addFeedback = useCallback(async (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        if (!newFeedback.name || !newFeedback.rating || !newFeedback.comment) {
            setError("All fields are required!");  // Simple validation
            return;
        }
        
        try {
            const response = await axios.post('https://website-back-nptk.onrender.com/feedbacks', newFeedback);
            setFeedbacks((prev) => [...prev, response.data]);  // Add the new feedback to the current list
            setNewFeedback({ name: '', rating: 0, comment: '' });  // Reset form
            setError(null);  // Reset error state
        } catch (error) {
            console.error("There was an error adding the feedback!", error);
            setError("Could not add feedback. Please try again later.");
        }
    }, [newFeedback]);

    return (
        <div className="feedback-container">
            <h2 className="feedback-title">FEEDBACKS</h2>
            {error && <div className="error-message">{error}</div>}  {/* Show error message if exists */}
            <div className="feedback-list">
                {feedbacks.map((fb, index) => (
                    <div key={index} className="feedback-item">
                        <div className="feedback-header">
                            <span className="feedback-name">{fb.name}</span>
                            <span className="feedback-date">on {new Date(fb.date).toLocaleDateString()}</span>
                        </div>
                        <div className="feedback-content">
                            <div className="feedback-stars">
                                {[...Array(5)].map((star, i) => (
                                    <span key={i} className={i < fb.rating ? 'star filled' : 'star'}>★</span>
                                ))}
                            </div>
                            <div className="feedback-comment">{fb.comment}</div>
                        </div>
                        <hr className="feedback-separator" />
                    </div>
                ))}
            </div>
            <form className="feedback-form" onSubmit={addFeedback}>
                <h3>Give Feedback</h3>
                <div className="star-rating">
                    {[...Array(5)].map((star, i) => (
                        <span
                            key={i}
                            className={i < newFeedback.rating ? 'star filled' : 'star'}
                            onMouseEnter={() => handleRatingHover(i + 1)}
                            onClick={() => handleRatingHover(i + 1)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Full Name"
                    value={newFeedback.name}
                    onChange={handleFeedbackChange}
                    required
                />
                <textarea
                    name="comment"
                    placeholder="Enter your feedback"
                    value={newFeedback.comment}
                    onChange={handleFeedbackChange}
                    required
                ></textarea>
                <button type="submit">Give Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;
