import PropTypes from 'prop-types';

export const Section = ({title , children}) => {
    return(
        <div>
            <Section>
            {title && <h2> {title} </h2>}
            {children}
            </Section> 
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    //children: PropTypes.nobe
}

export default Section;