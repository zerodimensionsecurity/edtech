"use client";
// import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/mockData";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <>
      {/* <Helmet>
        <title>Courses - Security Training & Education | HackenProof</title>
        <meta
          name="description"
          content="Master cybersecurity with our comprehensive courses covering web security, ethical hacking, smart contract auditing, and more."
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
              Learn Security
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Security Training & Courses
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master cybersecurity skills with expert-led courses designed for all skill levels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Courses;
