import React from 'react'
import Link from 'next/link'

const renderLink = ({ href, label }) => (
    <li key={`nav-link-${href}-${label}`}>
        <Link href={href}>
            <a>{label}</a>
        </Link>
    </li>
)

const links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
].map(renderLink)

/**
 * Render the links (above) as a top navbar.
 * See styles/components/_nav.scss 
 */
const renderNav = () => (
    <div className='nav'>    
        <ul>{links}</ul>
    </div>
)

export default renderNav
