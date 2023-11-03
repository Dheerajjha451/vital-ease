'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDashboard, faChartBar, faUser, faToggleOn, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Index(props) {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const icons = [
        { icon: faBars, name: 'Bars' },
        { icon: faDashboard, name: 'Dashboard' },
        { icon: faChartBar, name: 'ChartBar' },
        { icon: faUser, name: 'User' },
        { icon: faToggleOn, name: 'ToggleOn' },
        { icon: faSignOutAlt, name: 'SignOutAlt' },
    ];

    const iconSize = '2x'; 
    const gapSize = '1rem'; 
    return (
        <div className="fixed z-20 left-0 h-full w-1/11 bg-teal-500 p-6">
            <div className="mb-20">
                {icons.slice(0, 4).map((iconObj) => (
                    <div
                        key={iconObj.name}
                        className={`cursor-pointer ${
                            hoveredIcon === iconObj.name ? 'bg-blue-500' : ''
                        } rounded transition duration-300 ease-in-out transform hover:bg-blue-500 hover:scale-105 mb-${gapSize}`}
                        onMouseEnter={() => setHoveredIcon(iconObj.name)}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <FontAwesomeIcon
                            icon={iconObj.icon}
                            size={iconSize}
                            className="text-white"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-auto ">
                {icons.slice(4).map((iconObj) => (
                    <div
                        key={iconObj.name}
                        className={`cursor-pointer ${
                            hoveredIcon === iconObj.name ? 'bg-blue-700' : ''
                        } rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 mb-${gapSize}`}
                        onMouseEnter={() => setHoveredIcon(iconObj.name)}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <FontAwesomeIcon
                            icon={iconObj.icon}
                            size={iconSize}
                            className="text-white"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
