import { FC, PropsWithChildren, ReactNode } from 'react'
import { Typography } from '../Typography'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router'

interface LayoutProps extends PropsWithChildren {
  title: string
  HeaderItems?: ReactNode
}

const Layout: FC<LayoutProps> = ({ HeaderItems, title, children }) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex justify-between items-center px-8 py-4 bg-common-white">
        <div>
          <Typography variant="h6" className="text-common-black">
            {title}
          </Typography>
        </div>
        <div className="flex gap-x-4">
          {HeaderItems}

          <div className="w-px h-7 bg-common-gray" />
          <Link to="/questions">
            <img
              src={Logo}
              alt="logo"
              className="w-8 h-8 rounded-full border border-common-gray p-1.5"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className="px-8">{children}</div>
    </div>
  )
}
export default Layout
