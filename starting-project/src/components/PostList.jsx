import { useState } from "react";
import Post from "./Post";
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';


function PostList({isPosting, onStopPosting}){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(e){
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e){
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
        {
            isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
                </Modal>  
        }   
        <ul className={classes.post}>
            <Post author={enteredAuthor} body={enteredBody}/>
        </ul>
        </>
    )
}

export default PostList;