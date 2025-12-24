// import { Helmet } from "react-helmet-async";
"use client";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/mockData";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <>
      {/* <Helmet>
        <title>Blog - Security Insights & Research | HackenProof</title>
        <meta
          name="description"
          content="Explore the latest cybersecurity insights, research articles, and security best practices from industry experts."
        />
      </Helmet> */}

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Security Insights & Research
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the latest cybersecurity trends, vulnerability research, and security best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Blogs;
