import React from 'react';
import Heading from '../Shared/Heading';
//Images
import img1 from "../../assets/blog/blog-1.jpg";
import img2 from "../../assets/blog/blog-2.jpg";
import img3 from "../../assets/blog/blog-3.jpg";

const BlogData = [
    {
        title: "How To Choose Perfect Laptop",
        subtitle: "I recently bought my ideal laptop, and here's everything I learned from the experience – from research and comparison to the final purchase, including all the tips, tricks, and insights you need to find the perfect laptop for your needs!",
        published: "Feb 14, 2024 by Justine",
        image: img1,
        aosDelay: "0",
    },
    {
        title: "Essential Laptop Accessories You Didn't Know You Needed",
        subtitle: " I discovered a few game-changing accessories that have made a significant difference. Investing in an ergonomic laptop stand has not only improved my posture but also enhanced my comfort during long work hours. Additionally, upgrading to a wireless mouse and keyboard setup has decluttered my workspace and boosted my productivity.",
        published: "Mar 11, 2024 by Rency",
        image: img2,
        aosDelay: "200",
    },
    {
        title: "Maximizing Your Laptop's Performance",
        subtitle: "After recently upgrading my setup, I've learned a lot about optimizing laptop performance. One of the most effective tips I can share is to regularly clean up unnecessary files and programs to free up disk space and improve speed. Updating drivers and software also plays a crucial role in maintaining smooth performance.",
        published: "May 21, 2024 by John",
        image: img3,
        aosDelay: "400",
    },
]

const Blog = () => {
  return (
    <div className="my-12">
        <div className="container">
            {/* Header Section */}
            <Heading title="Recent News" subtitle={"Explore Our Blogs"}/>
            {/* Blog Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                {/* Blog Card */}
                {
                    BlogData.map((data) => (
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.title} className="bg-white dark:bg-gray-900">
                            {/* Image Section */}
                            <div className="overflow-hidden rounded-2xl mb-2">
                                <img src={data.image} alt="" className="w-full h-[300px] object-cover rounded-2xl hover:scale-105 duration-500" />
                            </div>
                            {/* Content Section */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                                <p className="font-bold line-clamp-1">{data.title}</p>
                                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default Blog;