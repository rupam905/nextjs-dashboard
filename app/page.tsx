import { Suspense } from "react";
import { connection } from "next/server";
import { getUser, getCourses } from "@/lib/supabase-server";
import { Dashboard } from "./components/Dashboard";
import { MainContent } from "./components/MainContent";
import { Hero } from "./components/Hero";
import { CourseCard } from "./components/CourseCard";
import { ActivityTile } from "./components/ActivityTile";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { DataNotice } from "./components/DataNotice";

async function DashboardContent() {
  await connection();

  const [userResult, courseResult] = await Promise.all([
    getUser(),
    getCourses(),
  ]);
  const notice =
    userResult.error || courseResult.error
      ? Array.from(
          new Set([userResult.error, courseResult.error].filter(Boolean)),
        ).join(" ")
      : null;

  return (
    <MainContent>
      {notice && <DataNotice message={notice} />}
      <Hero user={userResult.data} />
      <section
        id="courses"
        className="col-span-full grid scroll-mt-6 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Active courses"
      >
        {courseResult.data.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
      <ActivityTile />
    </MainContent>
  );
}

export default function Home() {
  return (
    <Dashboard>
      <Suspense fallback={<SkeletonLoader />}>
        <DashboardContent />
      </Suspense>
    </Dashboard>
  );
}
