import React from 'react';
import Container from './container';

import { graphql, useStaticQuery } from 'gatsby'


const query = graphql`
    query {
        eli: file(relativePath: { eq: "eli@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        megan: file(relativePath: { eq: "megan@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        sydney: file(relativePath: { eq: "sydney@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        jon: file(relativePath: { eq: "jon@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        koffi: file(relativePath: { eq: "koffi@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        cadi: file(relativePath: { eq: "cadi@2x.png" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
}
`

const team = [
    {
        name: "Elisha Coad",
        role: "President",
        src: "eli"
    },
    {
        name: "Megan Biggs",
        role: "Vice President",
        src: "megan"
    },
    {
        name: "Sydney Petrehn",
        role: "Relations Director",
        src: "sydney"
    },
    {
        name: "Jonathan Bosse",
        role: "Logistics Director",
        src: "jon"
    },
    {
        name: "Koffi Anderson",
        role: "Dev Director",
        src: "koffi"
    },
    {
        name: "Cadence Moffitt",
        role: "Design Director",
        src: "cadi"
    },
]

const CoreTeamSection = () => {
    const data = useStaticQuery(query);

    const coreTeam = team.map((member) => ({
        ...member,
        image: data[member.src].childImageSharp.fluid.src,
    }))

    console.log("site: ", data, coreTeam);


    return (
        <div id="core-team" className="flex flex-col items-center justify-center w-screen text-gray-600 py-16">
            <Container>
                <h1 className="text-6xl text-blue-600 mb-2">
                    Meet the Core Team!
            </h1>

                <div className="flex flex-col">
                    <p className="text-xl">
                        Our team of leaders are the top students in our areas of expertise, but they are also students just like you! They want to connect with you in whatever digital projects you are passionate about.
                </p>
                </div>

                <div className="flex flex-wrap justify-around mt-10">
                    {
                        coreTeam.map((member) => (
                            <div key={member.name} className="flex flex-col items-center mr-6 mb-6">
                                <img src={member.image} alt="team" className="mb-3 h-40 w-40" />
                                <h2 className="text-xl font-semibold">{member.role}</h2>
                                <h4 className="text-blue-600">{member.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default CoreTeamSection;