import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
        <AlertCircle className="w-10 h-10 text-red-600" />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-6">
        Sorry, the page you are looking for doesn’t exist or has been moved.  
        Please check the URL or return to the homepage.
      </p>

      {/* Button */}
      <Link href="/" passHref>
        <Button className="px-6 py-2 rounded-2xl shadow-md">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
