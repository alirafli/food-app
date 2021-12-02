import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as ImIcons from "react-icons/im"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
  {
    title: 'Search',
    path: '/searchpage',
    icon: <ImIcons.ImSearch/>,
    isActive: true
  },
  {
    title: 'Liked Posts',
    path: '/liked',
    icon: <FaIcons.FaRegHeart />,
    isActive: false
  },
  {
    title: 'Add Post',
    path: '/addresep',
    icon: <IoIcons.IoMdAddCircleOutline/>,
    isActive: false
  },
  {
    title: 'Settings',
    path: '/editprofile',
    icon: <AiIcons.AiOutlineSetting />,
    isActive: false
  },
]