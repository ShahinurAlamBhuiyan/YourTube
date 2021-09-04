import React from 'react';
import './_header.scss';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

const Header = () => {
    return (
        <div className="header">
            <FaBars
                className="headerMenu" size={26} />
            <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" className="headerLogo" alt="youtube_PNG2" />

            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="headerIcons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://koolinus.files.wordpress.com/2019/03/avataaars-e28093-koolinus-1-12mar2019.png" alt="avatar" />
            </div>
        </div>
    )
}
export default Header;