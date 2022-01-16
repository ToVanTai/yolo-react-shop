import React from 'react'

const Section = (props) => {
    return (
        <div className='section'>
            {props.children}
        </div>
    )
}
const SectionBody = (props) => {
    return (
        <div className='section__body'>
            {props.children}
        </div>
    )
}
const SectionTitle = (props) => {
    return (
        <div className='section__title'>
            {props.children}
        </div>
    )
}
export {SectionBody,SectionTitle}
export default Section
