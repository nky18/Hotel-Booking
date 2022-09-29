import React from 'react'
import "./propertyList.css"
const PropertyList = () => {
  return (
    <div className='pList'>
        <div className='pListItem'>
        <img src="https://xohotels.com/wp-content/uploads/2022/01/x6.-XO-Hotels-Couture-Comfort-Double-753x500.jpg.pagespeed.ic.Hr8M2goeoL.jpg" 
        alt="" className='pListImg'/>
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>233 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
        <img src="https://media.cntraveler.com/photos/53da5aa96dec627b149e509d/master/w_1024,h_768,c_limit/royal-ethiad-suite-jumeirah-abu-dhabi-2.jpg" alt="" className='pListImg'/>
        <div className='pListTitles'>
            <h1>Apartments</h1>
            <h2>333 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
        <img src="https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg" alt="" className='pListImg'/>
        <div className='pListTitles'>
            <h1>Resorts</h1>
            <h2>150 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
        <img src="https://luxuryproperties.in/wp-content/uploads/2019/07/Prestige-Golfshire-Villa-1.jpg" alt="" className='pListImg'/>
        <div className='pListTitles'>
            <h1>Villas</h1>
            <h2>183 hotels</h2>
        </div>
        </div>
        <div className='pListItem'>
        <img src="https://www.themanual.com/wp-content/uploads/sites/9/2021/05/best-luxurious-log-cabin-vacation-rentals.jpg?fit=800%2C800&p=1" 
        alt="" className='pListImg'/>
        <div className='pListTitles'>
            <h1>Cabins</h1>
            <h2>133 hotels</h2>
        </div>
        </div>
    </div>
  )
}

export default PropertyList
