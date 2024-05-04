export default function AboutUs() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="/cat.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-accent-500">About US!</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ea quidem in voluptatum mollitia impedit magni deserunt quae corrupti! Libero, illum hic eligendi expedita possimus consequuntur tenetur error odit aliquid?</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
