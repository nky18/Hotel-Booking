import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
    <div className="featuredItem">
        <img
         src="https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=373&format=pjpg&exif=1&iptc=1" 
         alt="" 
         className="featuredImg"/>
         <div className="featuredTitles">
        <h1>Dublin</h1>
        <h2>123 properties</h2>
    </div>
    </div>
    <div className="featuredItem">
        <img
         src="https://burst.shopifycdn.com/photos/london-uk.jpg?width=373&format=pjpg&exif=1&iptc=1" 
         alt="" 
         className="featuredImg"/>
         <div className="featuredTitles">
        <h1>Reno</h1>
        <h2>455 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img
         src="https://burst.shopifycdn.com/photos/urban-street-in-morning.jpg?width=373&format=pjpg&exif=1&iptc=1" 
         alt="" 
         className="featuredImg"/>
         <div className="featuredTitles">
        <h1>Austin</h1>
        <h2>523 properties</h2>
    </div>
    </div>
    </div>

  )
}

export default Featured