import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { Blog } from "../data/mockData";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blogs/${blog.id}`}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {blog.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {blog.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
