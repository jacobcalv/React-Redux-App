import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchArt} from '../actions/artApi'

const Art = (props) => {
    console.log(props)
    useEffect(() => {
        props.fetchArt();
    },[])
    console.log(props)

    return (
        <div>
            {props.image && props.image.map((image,index) => (
                <img key={index} src={image.baseimageurl} alt={image.copyright}/>
            ))}
        </div>
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