// import Layout from "@/components/Layout";
// import { Button } from "@/components/ui/button";

import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <section className="text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Your Journey to IIT Begins Here</h2>
        <p className="mb-6 text-lg">Trusted Coaching for Classes 9–12 and JEE Preparation</p>
        {/* <div className="space-x-4">
          <Button variant="secondary">Explore Courses</Button>
          <Button variant="outline">Join Free Demo Class</Button>
        </div> */}
      </section>
    </RootLayout>
  );
}
