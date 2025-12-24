"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { getBlogById } from "@/data/mockData";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = getBlogById(id || "");

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Blog not found
          </h1>
          <Link href="/blogs">
            <Button>Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Helmet>
        <title>{blog.title} | HackenProof Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet> */}

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>

            <article className="max-w-4xl mx-auto">
              <header className="mb-8">
                <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                  {blog.category}
                </span>
                <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </span>
                </div>
              </header>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                {blog.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-foreground mt-10 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3
                        key={index}
                        className="text-xl font-semibold text-foreground mt-8 mb-3"
                      >
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith("- ")) {
                    const items = paragraph.split("\n");
                    return (
                      <ul
                        key={index}
                        className="list-disc list-inside space-y-2 my-4 text-muted-foreground"
                      >
                        {items.map((item, i) => (
                          <li key={i}>{item.replace("- ", "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split("\n");
                    return (
                      <ol
                        key={index}
                        className="list-decimal list-inside space-y-2 my-4 text-muted-foreground"
                      >
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\.\s*/, "")}</li>
                        ))}
                      </ol>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </article>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default BlogDetail;
