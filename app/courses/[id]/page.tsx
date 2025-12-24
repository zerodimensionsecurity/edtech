"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { getCourseById } from "@/data/mockData";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  User,
  Play,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || "");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Course not found
          </h1>
          <Link href="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Helmet>
        <title>{course.title} | HackenProof Courses</title>
        <meta name="description" content={course.description} />
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
              href="/courses"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>

            {/* Course Header */}
            <div className="grid lg:grid-cols-5 gap-8 mb-12">
              <div className="lg:col-span-3">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    {course.level}
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-sm font-medium px-4 py-1.5 rounded-full">
                    {course.lessons} lessons
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  {course.description}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {course.instructor}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {course.videos.length} videos
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                    <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Content */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start bg-secondary/50 border border-border rounded-xl p-1 mb-8">
                <TabsTrigger
                  value="about"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Videos ({course.videos.length})
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Notes ({course.notes.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-0">
                <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
                  <div className="prose prose-lg prose-invert max-w-none">
                    {course.fullDescription.split("\n\n").map((paragraph, index) => {
                      if (paragraph.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0"
                          >
                            {paragraph.replace("## ", "")}
                          </h2>
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
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="divide-y divide-border">
                    {course.videos.map((video, index) => (
                      <motion.button
                        key={video.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setSelectedVideo(video.id)}
                        className={`w-full flex items-center gap-4 p-4 lg:p-6 hover:bg-secondary/50 transition-colors text-left ${
                          selectedVideo === video.id ? "bg-secondary/50" : ""
                        }`}
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-medium text-foreground truncate">
                            {index + 1}. {video.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {video.duration}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-0">
                <div className="grid gap-4">
                  {course.notes.map((note, index) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {note.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {note.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default CourseDetail;
