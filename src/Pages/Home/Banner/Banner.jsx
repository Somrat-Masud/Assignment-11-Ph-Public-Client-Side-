
const Banner = () => {
    return (
        <div className="flex   bg-[#f3f6f9]  justify-between   ">
         <div className="ml-6 py-14 w-1/2  ">
                <h1 className="text-[#5f4ecb]  text-2xl font-bold py-7" >NEW RELEASE</h1>
            <div className="space-y-8">
                <h1 className="text-8xl font-serif text-[#25272d]">The Sons of the <br />Empire</h1>
                <p className="text-3xl text-[#565a61]">Justo habitant at augue ac sed proin consectetur ac urna nisl elit  nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing  nibh euismod</p>
                <div className="py-5 flex gap-6 rounded">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-secondary  btn-outline">Red Simple</button>
                </div>
            </div>
            </div>
            <div className=" py-14 mr-12  ">
                <img src="https://i.ibb.co/bvxm1wp/author-book-store-hero-book-cover-img-1.jpg" alt="" />
            </div>
         </div>
      
    );
};

export default Banner;