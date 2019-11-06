import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchArt} from '../actions/artApi'
import styled from 'styled-components'

const Art = (props) => {
    console.log(props)
    useEffect(() => {
        props.fetchArt();
    },[])
    console.log(props)

    const IMG = styled.img`
        width: 16rem;
    `
    const Header = styled.h1`
        text-align: center;
    `
    const Container = styled.div`
        padding: 1rem;
        width: 16rem;
        margin-right: 2rem;
        background-color: white ;
        border-left: 1rem solid #8D6142;
        border-right: 1rem solid #8D6142;
        border-bottom: 1rem solid grey;
        border-top: 1rem solid grey;
        margin-bottom: 2rem;
        align-self: center;
    `
    const Images = styled.div`
        display: flex;
        width: 80%;
        margin-left: 12%;
        margin-right: 10%;
        flex-wrap: wrap;
    `
    return (
        <Images>
            {props.image && props.image.map((image,index) => (
                <Container>
                <IMG key={index} src={image.baseimageurl} alt={image.copyright}/>
                <Header>ID {image.fileid}</Header>
                </Container>
            ))}
        </Images>
    )
}

function mapStateToProps(state) {
    return {
        image: state.art
    }
}

const mapDispatchToProps = {
    fetchArt
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Art);
