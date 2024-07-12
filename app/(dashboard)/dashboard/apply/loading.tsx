import { Skeleton } from "@/components/ui/skeleton";
import { LucideLoader2 } from "lucide-react";

import { FormSection } from "./ApplyForm";
import { Button } from "@/components/ui/button";

// Assuming FormSection and Button are imported correctly

const LoadingSkeletonForm = () => {
  return (
    <form className="block h-full space-y-6">
      <FormSection
        title="Personal Information"
        description="Disclaimer: your answers to these questions do not have any impact on your admission."
      >
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            First Name
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Last Name
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">Email</label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">Age</label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Gender
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">Race</label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Ethnicity
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Additional Information
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
      </FormSection>

      <FormSection
        title="Education Information"
        description="All universities and majors are able to participate in MRUHacks 2024."
      >
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            University
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">Major</label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Study Level
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Hackathon Experience
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Software Experience
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            How did you hear about MRUHacks?
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
      </FormSection>

      <FormSection
        title="Social Information"
        description="This information is optional and will not affect your application. If you choose to provide it, this information may be shared with our sponsors."
      >
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            GitHub
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            LinkedIn
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Website
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-xl font-bold text-gray-700">
            Can we share your information with companies?
          </label>
          <Skeleton className="h-10 mt-1" />
        </div>
      </FormSection>

      <Button
        role="submit"
        type="submit"
        className="text-white font-bold float-right mb-12 flex items-center"
        disabled
      >
        <LucideLoader2 className="animate-spin mr-2" />
        Submit Application
      </Button>
    </form>
  );
};

export default LoadingSkeletonForm;
