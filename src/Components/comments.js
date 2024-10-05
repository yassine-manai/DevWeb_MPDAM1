/* eslint-disable no-cond-assign */
import React, { useState } from 'react';
import logo192 from '../images/logo192.png';
import '../Styles/commentsBloc.css';

function CommentsBloc() {
    const [comments, setComments] = useState([
        { author: 'Yassine Manai', text: 'The hours, minutes and seconds.', date: '1 day ago', avatar: logo192 },
        { author: 'Christian Rocha', text: 'I re-tweeted this.', date: '2 days ago', avatar: logo192 }
    ]);

    const [newComment, setNewComment] = useState('');
    const [newAuthor, setNewAuthor] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() && newAuthor.trim()) {
            const newCommentObject = {
                author: newAuthor,
                text: newComment,
                date: 'Just now',
                avatar: logo192
            };
            setComments([...comments, newCommentObject]);
            setNewComment(''); 
            setNewAuthor(''); 
        }
    };

    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };

    return (
        <div className="ui comments">
            {comments.map((comment, index) => (
                <div className="comment" key={index}>
                    <span className="avatar">
                        <img alt="User Avatar" src={comment.avatar} />
                    </span>
                    <div className="content">
                        <span className="author">{comment.author}</span>
                        <div className="metadata">
                            <div className="date">{comment.date}</div>
                        </div>
                        <div className="text">{comment.text}</div>
                        <div className="actions">
                            <span
                                className="delete" onClick={() => handleDeleteComment(index)}>
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <form
                className="ui reply form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComment();
                }}
            >
                <div className="field">
                    <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="Your name..."
                        required
                    />
                </div>
                <div className="field">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="ui primary submit labeled icon button"
                >
                    <i className="icon edit" /> Add Comment
                </button>
            </form>
        </div>
    );
}

export default CommentsBloc;
