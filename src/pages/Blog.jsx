import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ScrollTop } from "../Components/ScrollTop"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export const Blog=()=>{
    useEffect(() => {
        const scripts = loadScripts();
    
        window.addEventListener('popstate', () => {
          // Handle popstate event (user navigates back or forward)
          unloadScripts(scripts);
          loadScripts();
        });
    
        return () => {
          // Cleanup the scripts when the component unmounts
          unloadScripts(scripts);
          window.removeEventListener('popstate', () => {
            unloadScripts(scripts);
            loadScripts();
          });
        };
      }, []);
      const [blogs,setblogs]=useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('');
      console.log('searchQuery',searchQuery,'selectedCategory',selectedCategory)
      const getgallery=async()=>{
        try{
           const res=await axios.get('https://bpds.thedatech.com/api/blogs');
           setblogs(res.data.blogs)
        }catch(err){
          console.log(err)
        }
      }
      useEffect(()=>{
        getgallery()
      },[])

      const filteredBlogs = blogs.filter(blog => {
        const matchesSearchQuery = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === '' || blog.name.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearchQuery && matchesCategory;
      });

      const handleFormSubmit = async (e) => {
        e.preventDefault();
      };

    return(
        <>
        <Breadbrum title="Blogs"/>
<section className="th-blog-wrapper space-top space-extra-bottom">
    <div className="container">
        <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {filteredBlogs && filteredBlogs.map(({id,banner,title,slug,short_description,name,date})=>{
                return(
                  <div className="th-blog blog-single has-post-thumbnail" key={id}>
                  <div className="blog-img"><Link to={`/${slug}`}>
                      <img src={banner} alt="Blog Image" />
                      </Link>
                      </div>
                      <div className="blog-content">
                          <div className="blog-meta">
                               <Link to="/blog">
                                <i className="fas fa-calendar-days" />{date}</Link> 
                               <Link to={`/${slug}`}><i className="fas fa-comments" />{name}</Link>
                               </div>
                               <h2 className="blog-title">
                                <Link to={`/${slug}`}>{title}</Link>
                                </h2>
                                <p className="blog-text">{short_description}</p>
                                <Link to={`/${slug}`} className="th-btn btn-small">Read More<i className="fas fa-arrow-right ms-2" /></Link>
                                </div>
                                </div>
                )
              })}
          </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form className="search-form" onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Enter Keyword"    value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}/> 
                    <button type="submit"><i className="far fa-search" /></button>
                    </form>
                    </div>
                    <div className="widget widget_categories">
                      <h3 className="widget_title">Categories</h3>
                      <ul>
                        {blogs && blogs.map(({id,name,title})=>{
                          return(
                            <li onClick={() => setSelectedCategory(name)} key={id+title+name} style={{cursor:"pointer"}}>{name}</li>
                          )
                        })}
                        
                          </ul>
                          </div>
                          <div className="widget">
                            <h3 className="widget_title">Recent Posts</h3>
                            <div className="recent-post-wrap">
                            {filteredBlogs && filteredBlogs.slice(0,3).map(({id,banner,title,slug,name,date})=>{
                                                                                                                                return(
                                                                                                                                    <div className="recent-post" key={id+slug}>
                                                                                                                                    <div className="media-img">
                                                                                                                                        <Link to={`/${slug}`}><img src={banner} alt={name} /></Link>
                                                                                                                                        </div>
                                                                                                                                        <div className="media-body">
                                                                                                                                            <h4 className="post-title">
                                                                                                                                                <Link className="text-inherit" to={`/${slug}`}>{title}</Link></h4>
                                                                                                                                                <div className="recent-post-meta">
                                                                                                                                                    <Link to="/blog"><i className="fas fa-calendar-days" />{date}</Link>
                                                                                                                                                    </div>
                                                                                                                                                    </div>
                                                                                                                                                    </div>
                                                                                                                                )
                                                                                                                            })}
                                              </div>
                                              </div>
                                              <div className="widget"><h3 className="widget_title">Gallery Post</h3><div className="sidebar-gallery"><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_1.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_1.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_2.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_2.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_3.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_3.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_4.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_4.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_5.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_5.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_6.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_6.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div></div></div><div className="widget widget_tag_cloud"><h3 className="widget_title">Popular Tags</h3><div className="tagcloud"><a href="blog.html">Driving</a> <a href="blog.html">Car</a> <a href="blog.html">Program</a> <a href="blog.html">Certificate</a> <a href="blog.html">Road</a> <a href="blog.html">Map</a> <a href="blog.html">Instructions</a> <a href="blog.html">Business</a></div></div></aside></div></div></div></section>

        <ScrollTop/>
        </>
    )
}