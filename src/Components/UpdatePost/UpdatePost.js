import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';


const UpdatePost = () => {
    const {id} = useParams();
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const [image, setImage] = useState(' ');
    const [userAdded, setUserAdded] = useState(false);


    const handleUpdatePost = data => {
        const userData = {
            author: data.userName,
            authorAvatar: image
        }
        fetch(`https://my-json-server.typicode.com/tania-developer/post-maker/users/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data) {
                reset();
                setUserAdded(data);

                setTimeout(() => {
                    setUserAdded(false);
                }, 4000)
            }
        })
         };

    const handleImageUpload = event =>{
        const imageData = new FormData();
        imageData.set('key', 'c2591ce672b45bd63749672d354a304d');
        imageData.append('image', event.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload', 
            imageData
          )
          .then(function (response) {
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div className="createPost">
            <h2 className="post__header">Update User {id}</h2>
            <form className="createPost__form" onSubmit={handleSubmit(handleUpdatePost)}>
                {
                    userAdded && <p className="success">Update user successfully.</p>
                }
                <div className="createPost__form--content">
                    <div className="input__group">
                        <label htmlFor="userName">User Name</label>
                        <input
                            name="userName"
                            type="text"
                            {...register("userName",{ required: true })}
                            placeholder="Enter Name"
                        />
                        {errors.userName?.type === 'required' && <p className="error">*user name is required</p>}
                    </div>
                    <div className="input__group">
                        <label htmlFor="profilePic">Add Profile Pic</label>
                        <input
                            type="file"
                            {...register( "profilePic", { required: true})}
                            onChange={handleImageUpload}
                        />
                        {errors.profilePic?.type === 'required' && <p className="error">* profile pic is required</p>}
                    </div>
                </div>
                <div className="btn--box">
                <input className="btn" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default UpdatePost;