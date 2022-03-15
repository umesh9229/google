import React from 'react'
import "./SearchPage.css"
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './Response';
import { Link } from "react-router-dom";
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoomIcon from '@mui/icons-material/Room';
import ImageIcon from '@mui/icons-material/Image';





function SearchPage() {
  const [{ term }, dispach] = useStateValue();
  const { data } = useGoogleSearch(term);

  // const data = Response;

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to="/">
          <img
            className='searchPage__logo'
            src="https://logos.textgiraffe.com/logos/logo-name/Jyoti-designstyle-boots-m.png" alt=""




          />



        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons />

          <div className='searchPage__options'>

            <div className='searchPage__optionsLeft'>
              <div className='searchPage__option'>
                <SearchIcon />
                <Link to="/all">All</Link>

              </div>
              <div className='searchPage__option'>
                <DescriptionIcon />
                <Link to="/news">News</Link>

              </div>
              <div className='searchPage__option'>
                <ImageIcon />
                <Link to="/image">Images</Link>

              </div>
              <div className='searchPage__option'>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>

              </div>
              <div className='searchPage__option'>
                <RoomIcon />
                <Link to="/maps">Maps</Link>

              </div>
              <div className='searchPage__option'>
                <MoreVertIcon />
                <Link to="/more">More</Link>

              </div>
              <div className='searchPage__optionsRight'>
                <div className='searchPage__option'>

                  <Link to="/settings">Settings</Link>

                </div>
                <div className='searchPage__option'>

                  <Link to="/tools">Tools</Link>

                </div>


              </div>








            </div>



          </div>

        </div>



      </div>
      {true && (
        <div className='searchPage__result'>
          <script async src="https://cse.google.com/cse.js?cx=554e892cb43dc431d">
</script>
<div className="gcse-search"></div>

          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results
            ({data?.searchInformation.formattedSearchTime} seconds) for {term}


          </p>
          {data?.items.map(items => (
            <div className='searchPage__results'>
              <a href={items.link}>
                {items.displayLink}

              </a>
              <a className="searchPage__resultTitle"
                href={items.link}>
                <h2>{items.title}</h2>



              </a>
              <p className='searchPage__resultSnippet'>{items.snippet}


              </p>


            </div>


          ))}

        </div>



      )}



    </div>
  )
}
//AIzaSyD9H2nh0CI2HoBMJmHZk_sjQFvusm1byB8
export default SearchPage