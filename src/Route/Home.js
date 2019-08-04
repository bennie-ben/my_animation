import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "../queries";


const _returnData = data =>{
    const {Page:{media}}=data;
    const movie = media.map(movie=>{
        return (
            <div className="movie_column">
                <div></div>
                <span>
                    <img src={movie.coverImage.large} alt="Sorry Can't Upload the File"/>
                    <p>{movie.title.english}</p>
                    <p>{movie.title.native}</p>
                </span>
                <div></div>
            </div>
        );
    })
    return movie;
}

const Home = () => <Query query = {HOME_PAGE}>
    {
        ({loading, data, error}) => {
        if (loading) return <span>LOADING</span>
        if (error) return <span>ERROR</span>
        if (data) {
            return _returnData(data);
        }
    }}
</Query>
export default Home;