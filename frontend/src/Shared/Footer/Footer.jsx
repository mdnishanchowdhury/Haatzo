import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiVisa, SiPaypal, SiKlarna } from "react-icons/si";

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
            {/* Newsletter */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold">Join our newsletter for ৳500 offs</h3>
                        <p className="text-sm text-gray-500">
                            Register now to get the latest updates on promotions & coupons. Don’t worry, we’re not spam!
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full md:w-72 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button className="bg-purple-600 text-white px-5 rounded-r-md hover:bg-purple-700">
                            SEND
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Links */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
                {/* Help */}
                <div>
                    <h4 className="font-semibold mb-3">Do You Need Help ?</h4>
                    <p className="text-gray-500 mb-2">
                        For support, orders or any queries, feel free to contact our customer service.
                    </p>
                    <p className="font-semibold">Monday-Friday: 9am–6pm</p>
                    <p className="text-purple-600 font-bold">+880 1234 567 890</p>
                    <p className="mt-2">Need help with your order?</p>
                    <p className="text-purple-600 font-medium">support@BazarHat.com</p>
                </div>

                {/* Make Money */}
                <div>
                    <h4 className="font-semibold mb-3">Make Money with BazarHat</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>Sell on BazarHat</li>
                        <li>Sell Your Services</li>
                        <li>Open a BazarHat Store</li>
                        <li>Sell Your Apps</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                        <li>Self-Publish with Us</li>
                        <li>Become a Vendor</li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h4 className="font-semibold mb-3">Let Us Help You</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>Accessibility Statement</li>
                        <li>Your Orders</li>
                        <li>Returns & Replacements</li>
                        <li>Shipping Rates & Policies</li>
                        <li>Refund and Returns Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Cookie Settings</li>
                        <li>Help Center</li>
                    </ul>
                </div>

                {/* About */}
                <div>
                    <h4 className="font-semibold mb-3">Get to Know Us</h4>
                    <ul className="space-y-2 text-gray-500">
                        <li>Careers at BazarHat</li>
                        <li>About BazarHat</li>
                        <li>Investor Relations</li>
                        <li>BazarHat Devices</li>
                        <li>Customer Reviews</li>
                        <li>Social Responsibility</li>
                        <li>Store Locations</li>
                    </ul>
                </div>

                {/* App */}
                <div>
                    <h4 className="font-semibold mb-3">Download our app</h4>
                    <div className="flex flex-col gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="w-36"
                        />
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="w-36"
                        />
                    </div>
                    <p className="mt-2 text-gray-500 text-sm">Download App & Get 20% Discount</p>
                    <div className="flex gap-3 mt-4 text-gray-600">
                        <FaFacebookF className="hover:text-purple-600 cursor-pointer" />
                        <FaInstagram className="hover:text-purple-600 cursor-pointer" />
                        <FaTwitter className="hover:text-purple-600 cursor-pointer" />
                        <FaLinkedinIn className="hover:text-purple-600 cursor-pointer" />
                    </div>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Bottom */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>
                    Copyright ©2024 <span className="font-semibold text-purple-600">BazarHat</span>.
                    All rights reserved. Powered by <span className="text-purple-600">BazarHat Team</span>.
                </p>
                <div className="flex items-center gap-4">
                    <SiVisa className="text-2xl" />
                    <SiPaypal className="text-2xl" />
                    <SiKlarna className="text-2xl" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-6 text-sm flex justify-center gap-6 text-gray-600">
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Order Tracking</a>
            </div>
        </footer>
    );
}
export default Footer;