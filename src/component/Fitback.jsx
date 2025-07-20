

const Fitback = () => {
    return (
        <div className="max-w-[1680px] mx-auto p-12">
            <div>
                <h1 className="text-5xl text-[#303A40] font-extrabold font-displaymain text-center mt-5">Frequently Asked Questions</h1>
                <div className="grid grid-cols-3 mt-20">
                    <div className="flex justify-center items-center flex-col text-center gap-2">
                        <img className="h-10 w-10" src="/public/01.webp" alt="#" />
                        <h1 className="text-2xl text-[#303A40] font-medium">What are your operating </h1>
                        <p className="max-w-64 text-gray-500">Our restaurant is open from 11:00 AM to 9:00 PM, seven days a week. We're dedicated to providing our</p>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center gap-2">
                        <img className="h-10 w-10" src="/public/02.webp" alt="#" />
                        <h1 className="text-2xl text-[#303A40] font-medium">Do you offer delivery? </h1>
                        <p className="max-w-64 text-gray-500">Yes, we offer delivery services within a 5-mile radius of our restaurant</p>
                    </div>
                    <div className="flex justify-center items-center flex-col text-center gap-2">
                        <img className="h-10 w-10" src="/public/03.webp" alt="#" />
                        <h1 className="text-2xl text-[#303A40] font-medium">What is your refund </h1>
                        <p className="max-w-64 text-gray-500">If you're not completely satisfied with your dining experience, please let us know</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fitback;