import Footer from '@/features/common/modules/Footer'
import Navigation from '@/features/common/modules/Navigation'
import React from 'react'
export const metadata = {
  title :'Engrave Tattoo School',
   
  description: 'Welcome to Engrave Tattoo School',
};
const DefaultLayout = ({children}) => {
  return (
    <>
        <Navigation/>
        {children}
        <Footer/>
    </>
)
}

export default DefaultLayout