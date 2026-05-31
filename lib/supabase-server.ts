import { createClient } from "@supabase/supabase-js";
import { Course, User } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export interface QueryResult<T> {
  data: T;
  error: string | null;
  usingFallback: boolean;
}

const fallbackUser: User = {
  id: "sample-user",
  name: "Rupam Dutta",
  streak: 7,
};

const fallbackCourses: Course[] = [
  {
    id: "sample-react",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "Code2",
    created_at: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "sample-performance",
    title: "Web Performance Optimization",
    progress: 45,
    icon_name: "Zap",
    created_at: "2026-01-02T00:00:00.000Z",
  },
  {
    id: "sample-typescript",
    title: "TypeScript Mastery",
    progress: 82,
    icon_name: "BookOpen",
    created_at: "2026-01-03T00:00:00.000Z",
  },
  {
    id: "sample-systems",
    title: "System Design Fundamentals",
    progress: 60,
    icon_name: "Database",
    created_at: "2026-01-04T00:00:00.000Z",
  },
];

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

export async function getUser(): Promise<QueryResult<User | null>> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      data: fallbackUser,
      error: "Supabase is not configured. Showing sample dashboard data.",
      usingFallback: true,
    };
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .limit(1)
      .single();

    if (error) {
      console.error("Error fetching user:", error.message);
      return {
        data: fallbackUser,
        error: "Could not load the student profile. Showing sample data.",
        usingFallback: true,
      };
    }

    return { data, error: null, usingFallback: false };
  } catch (err) {
    console.error("Unexpected error fetching user:", err);
    return {
      data: fallbackUser,
      error: "Could not load the student profile. Showing sample data.",
      usingFallback: true,
    };
  }
}

export async function getCourses(): Promise<QueryResult<Course[]>> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return {
      data: fallbackCourses,
      error: "Supabase is not configured. Showing sample course data.",
      usingFallback: true,
    };
  }

  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching courses:", error.message);
      return {
        data: fallbackCourses,
        error: "Could not load courses from Supabase. Showing sample data.",
        usingFallback: true,
      };
    }

    return { data: data || [], error: null, usingFallback: false };
  } catch (err) {
    console.error("Unexpected error fetching courses:", err);
    return {
      data: fallbackCourses,
      error: "Could not load courses from Supabase. Showing sample data.",
      usingFallback: true,
    };
  }
}
