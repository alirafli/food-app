import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import * as ImIcons from "react-icons/im"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
  {
    title: 'Search',
    path: '/searchpage',
    icon: <ImIcons.ImSearch/>,
  },
  {
    title: 'Liked Posts',
    path: '/maintenance',
    icon: <FaIcons.FaRegHeart />,
  },
  {
    title: 'Add Post',
    path: '/maintenance',
    icon: <IoIcons.IoMdAddCircleOutline/>,
  },
  {
    title: 'Settings',
    path: '/maintenance',
    icon: <AiIcons.AiOutlineSetting />,
  },
]