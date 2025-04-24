const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-center md:text-left">C. {new Date().getFullYear()} CloudCore Intern Task — All rights reserved</p>
                <div className="flex gap-4 mt-3 md:mt-0">
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    <a href="#" className="text-sm hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
