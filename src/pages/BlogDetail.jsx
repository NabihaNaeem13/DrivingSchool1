import { Breadbrum } from "../Components/AboutBread/Breadbrum"
import { ScrollTop } from "../Components/ScrollTop"
import { loadScripts,unloadScripts } from "../Components/LoadScript"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const blogdata=[{
    id:1,
    title:'DANGERS OF SLEEPING WHILST SLEEP DEPRIVED',
    para:'When learner drivers are asked what the biggest causes are of road fatalities, they will most likely answer with the best-known',
    para1:'To be behind the wheel without knowing or being able to remember the distances can be extremely dangerous, not just to yourself and your passengers, but to others on the road too.',
    date:'18 July, 2018',
    image:"assets/img/blog/blog1.jpg"
},{
    id:2,
    title:'WHY AUTOMATIC DRIVING LESSONS HELP YOU PASS FASTER',
    para:'When learning to drive, one of the biggest things to remember is the stopping and the braking distances of the car you are driving.',
    para1:'To be behind the wheel without knowing or being able to remember the distances can be extremely dangerous, not just to yourself and your passengers, but to others on the road too.',
    date:'15 October, 2018',
    image:"assets/img/blog/blog2.jpg"
},{
    id:3,
    title:'HOW TO REMEMBER THE STOPPING AND BREAKING DISTANCE OF A CAR',
    para:'When learning to drive, one of the biggest things to remember is the stopping and the braking distances of the car you are driving.',
    para1:'To be behind the wheel without knowing or being able to remember the distances can be extremely dangerous, not just to yourself and your passengers, but to others on the road too.',
    date:'22 October, 2018',
    image:"assets/img/blog/blog3.jpg"
}]

export const BlogDetail=()=>{
    const currentPath = window.location.pathname;
const pathParts = currentPath.split('/');
const encodedName = pathParts[pathParts.length - 1];
const name = decodeURIComponent(encodedName);

console.log(name);
const [blog_detail,setblog_detail]=useState();
const blogDetails=async()=>{
    try{
      const res=await axios.get(`https://bpds.thedatech.com/api/blog-detail/${name}`)
      console.log('res of blog detail',res.data.blog_detail)
      setblog_detail(res.data.blog_detail)
    }catch(err){
        console.log('err',err)
    }
}
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
        blogDetails()
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
        <Breadbrum title={blog_detail && blog_detail.title}/>
       <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8 col-lg-7">
                    { blog_detail && (  <div className="th-blog blog-single" key={blog_detail.id}>
      <div className="blog-img">
          <img src={blog_detail.banner} alt={blog_detail.title} />
          </div>
          <div className="blog-content">
              <div className="blog-meta">
                  <Link to="/blog"><i className="fas fa-calendar-days" />{blog_detail.date}</Link>
                   <Link to={`/${blog_detail.slug}`}><i className="fas fa-comments" />{blog_detail.name}</Link>
                   </div>
                   <h2 className="blog-title">{blog_detail.title}</h2>
                   <div dangerouslySetInnerHTML={{__html:blog_detail.long_description}}/>
              
    
               
                    
                    </div>
                    <div className="share-links clearfix">
                        <div className="row justify-content-between">
                            <div className="col-sm-auto">
                                <div className="tagcloud">
                        <Link to="/blog">Blogs</Link> 
                       
                        </div>
                        </div>
                        <div className="col-sm-auto text-xl-end">
                            <span className="share-links-title">Share On:</span>
                            <ul className="social-links">
                                <li><a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter" /></a></li>
                                <li><a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram" /></a>
                   </li>
                   </ul>
                   </div>
                   </div>
                   </div>
                   </div>)

                    }
                    

           {/* <div className="th-comment-form">
                                                                                    <div className="form-title">
                                                                                        <h3 className="blog-inner-title mb-2"><i className="fa-solid fa-reply" /> Leave a Comment</h3>
                                                                                        <p className="form-text">Your email address will not be published. Required fields are marked *</p>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-md-6 form-group">
                                                                                                <input type="text" placeholder="Your Name*" className="form-control" /> <i className="far fa-user" /></div>
                                                                                                <div className="col-md-6 form-group"><input type="text" placeholder="Your Email*" className="form-control" /> <i className="far fa-envelope" /></div>
                                                                                                <div className="col-12 form-group"><input type="text" placeholder="Website" className="form-control" /> <i className="far fa-globe" /></div>
                                                                                                <div className="col-12 form-group"><textarea placeholder="Write a Comment*" className="form-control" defaultValue={""} /> <i className="far fa-pencil" /></div>
                                                                                                <div className="col-12 form-group mb-0"><button className="th-btn">Post Comment</button>
                                                                                                </div>
                                                                                                </div>
                                                                                                </div> */}   


                                 
                                                                               
                                                                                                </div>
                                                                                                <div className="col-xxl-4 col-lg-5">
                                                                                                    <aside className="sidebar-area">
                                                                                                        <div className="widget widget_search">
                                                                                                            <form className="search-form" onSubmit={handleFormSubmit}>
                                                                                                                <input type="text" placeholder="Enter Keyword" value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}/> 
                                                                                                                <button type="submit"><i className="far fa-search" />
                                                                                                                </button>
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
                                                                                                                                                                                                <div className="widget"><h3 className="widget_title">Gallery Post</h3><div className="sidebar-gallery"><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_1.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_1.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_2.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_2.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_3.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_3.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_4.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_4.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div><div className="gallery-thumb"><img src="assets/img/widget/gallery_1_5.jpg" alt="Gallery Image" /> <a href="assets/img/widget/gallery_1_5.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a></div>
       <div className="gallery-thumb">
        <img src="assets/img/widget/gallery_1_6.jpg" alt="Gallery Image" /> 
        <a href="assets/img/widget/gallery_1_6.jpg" className="gallery-btn popup-image"><i className="fab fa-instagram" /></a>
        </div>
        </div>
        </div>
        
                </aside>
                </div>
                </div>
                </div>
                </section>

        <ScrollTop/>
       </>
    )
}