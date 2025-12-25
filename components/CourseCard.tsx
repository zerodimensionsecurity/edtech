import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, BookOpen, BarChart3, User } from "lucide-react";
import { Course } from "../data/mockData";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/courses/${course.id}`}>
        <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {course.level}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {course.lessons} lessons
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {course.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {course.instructor}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {course.duration}
              </span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">
                  {course.videos.length} videos
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-foreground font-medium">
                  {course.notes.length} notes
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default CourseCard;
