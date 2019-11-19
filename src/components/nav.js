import React from 'react';

const navs = [
    { title: "About", link: "#about" },
    { title: "Mission", link: "#mission" },
    { title: "Core Team", link: "#core-team" },
    { title: "Contact", link: "#contact" },
]

const Nav = () => (
    <div className="flex items-center mx-6">
        {navs.map((nav) => (
            <a className="mx-6 text-xl font-medium uppercase leading-loose" key={nav.link} href={nav.link}>{nav.title}</a>
        ))}
    </div>
);

export default Nav;