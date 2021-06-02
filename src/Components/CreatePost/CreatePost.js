import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './CreatePost.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const CreatePost = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [image, setImage] = useState(' ');
    const [productAdded, setProductAdded] = useState(false);


    const handleAddProduct = data => {
        const userData = {
            author: data.userName,
            authorAvatar: data.profilePic,
         
            postImag: postPhoto
        }
        fetch('https://my-json-server.typicode.com/tania-developer/post-maker/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(pdData)
        })
        .then(res => console.log('server side response', res));
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
            <h2 className="post__header">Add Product</h2>
            <form className="createPost__form" onSubmit={handleSubmit(handleAddProduct)}>
                {
                    productAdded && <p className="success">Product succesfully added to the database.</p>
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
                        <label htmlFor="postDetails">Post Details</label>
                        <input
                            type="text"
                            {...register("postDetails", { required: true })}
                            placeholder="Enter details"
                        />
                        {errors.postDetails?.type === 'required' && <p className="error">* details is required</p>}
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
                    <div className="input__group">
                        <label htmlFor="postPhoto">Add Post Photo</label>
                        <input
                            type="file"
                            {...register("postPhoto", {required: true })}
                            onChange={handleImageUpload}
                        />
                        {errors.postPhoto?.type === 'required' && <p className="error">* Photo is required</p>}
                    </div>
                </div>
                <div className="btn--box">
                    {!image && <CircularProgress disableShrink />} <input className={`btn ${!image && 'disabled'}`} type="submit" value="Save" />
                </div>
            </form>
        </div>
    );
};

export default CreatePost;