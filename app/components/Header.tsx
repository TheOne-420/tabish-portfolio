import React from 'react';

function Header(props) {
    return (
        <div className= 'flex flex-row justify-between p-2 bg-gray-600 rounded-xl text-amber-600'>
            <h1 className='font-mono'>Tabish</h1>
            <div id="links" className='flex flex-col'>
                <nav >
                <ul>

                <li>Projects</li>
                </ul>
            </nav>
            </div>
            <div>
                <p>Resume</p>
            </div>
        </div>
    );
}

export default Header;