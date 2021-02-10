import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
    </Head>

    {/* Header */}
    <header id="app-header" className="w-full shadow-sm bg-white px-6 fixed top-0">

      <div className="bg-gray-500 text-white p-2">
        <Link href="/">Home</Link>{' '}|{' '}
        <Link href="/login">Login</Link>{' '}|{' '}
        <Link href="/profile">Profile</Link>{' '}|{' '}
        <Link href="/setting">Setting</Link>{' '}|{' '}
      </div>

      <div className="lg:hidden flex items-center py-4">
        <div className="w-1/2">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="w-1/2 text-right flex items-center">
          <img src="/img/bell-icon.svg" alt="" className="ml-auto mr-4" />
          <Image
            src="/img/user.jpg"
            alt=""
            width="40"
            height="40"
            className="rounded-full"
          />
          <img src="/img/arrow-down.svg" alt="" className="mx-4" />
          <button
            id="sidebar-triggerer"
            className="outline-none focus:outline-none"
          >
            <div className="line rounded-full"></div>
            <div className="line rounded-full my-1"></div>
            <div className="line rounded-full"></div>
          </button>
        </div>
      </div>
      <div className="lg:flex items-center hidden">
        <div className="w-1/5">
          <img src="/img/logo.svg" alt="" />
        </div>
        <div className="w-3/5 text-center">
          <ul className="flex justify-center">
            <li className="mr-12 py-6">
              <Link href="/"><a className="secondary-color1">Home</a></Link>
            </li>
            <li className="mr-12 py-6">
              <a href="#" className="secondary-color1">Opportunities</a>
            </li>
            <li className="mr-12 py-6">
              <a href="#" className="secondary-color1">Messages</a>
            </li>
            <li className="py-6 active-link">
              <Link href="/profile"><a className="secondary-color2">Profile</a></Link>

            </li>
          </ul>
        </div>
        <div className="w-1/5 flex items-center justify-end">
          <img src="/img/bell-icon.svg" alt="" />
          <span className="secondary-color1 mx-4 truncate">Jim H.</span>
          <img
            src="/img/user.jpg"
            alt=""
            width="40"
            height="40"
            className="rounded-full"
          />
          <i className="fas fa-chevron-down ml-4"></i>
        </div>
      </div>
      {/* sidebar for mobile */}
      <div id="sidebar" className="shadow-lg">
        <div className="px-4 mt-2">
          <button
            id="sidebar-close-btn"
            className="outline-none focus:outline-none"
          >
            <div className="close-1"></div>
            <div className="close-2"></div>
          </button>
        </div>

        <div className="flex w-full mt-16">
          <ul>
            <li className="pl-6 mb-5">
              <Link href="/"><a className="secondary-color1">Home</a></Link>
            </li>
            <li className="pl-6 mb-5">
              <a href="#" className="secondary-color1">Opportunities</a>
            </li>
            <li className="pl-6 mb-5">
              <a href="#" className="secondary-color1">Messages</a>
            </li>
            <li className="pl-6 active-sidebar-link">
              <a href="#" className="secondary-color2">Profile</a>
            </li>
          </ul>
        </div>
      </div>
      {/* sidebar for mobile ends */}
    </header>
    {/* Header ends */}



    {children}

  </div>
)

export default Layout