
const BannerExtraSection = () => {
    return (
        <div className="flex bg-[#f3f6f9] py-14 w-full">
            <div className=" ml-6 w-1/2">
                <img src="https://i.ibb.co/qWB9gRW/author-book-store-author-img.jpg" alt="" />
            </div>
            <div className="ml-9 w-1/2">
                <h1 className="text-[#5f4ecb] font-serif py-11  text-xl">BIOGRAPHY</h1>
                <h1 className="text-black text-3xl font-bold font-serif py-8">John Roberts</h1>
                <p className="text-[#565a61] text-xl">Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed vestibulum neque praesent pharetra ut fames viverra suscipit gravida dictumst volutpat ullamcorper lacus, malesuada enim proin volutpat mattis nunc amet, eget vitae egestas.</p>
                <br />
                <p className="text-[#565a61] text-xl">Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean nam.</p>
                <button className="btn btn-outline btn-primary my-11">Red More</button>
             
            </div>
        </div>
    );
};

export default BannerExtraSection;