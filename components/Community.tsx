import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Community() {
    return (
        <div className="flex flex-col p-12 items-center justify-center">
            <div className="mb-8">
                <Image
                    src="/group_image_vlad4.jpg"
                    alt="Big cat chilling"
                    className="rounded"
                    width={1600}
                />
            </div>
            <h1 className="text-2xl font-bold mb-4">Join The MRUHACKS Community!</h1>
            <div className="flex flex-wrap mb-4"> {/* Added flex-wrap for responsive wrapping */}
                <a href="https://www.instagram.com/mruhacks" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-link mr-4 mb-2">
					<FaInstagram size={24} />
                </a>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-link mr-4 mb-2">
                    <FaDiscord size={24} />
                </a>
                <a href="https://www.linkedin.com/company/mruhacks" target="_blank" rel="noopener noreferrer" className="btn btn-active btn-link mb-2">
					<FaLinkedinIn size={24} />
                </a>
            </div>
        </div>
    );
}

