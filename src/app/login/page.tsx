import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-[100%] h-screen m-auto">
      {/* Row */}
      <div className="flex flex-row">
        <div className="w-full h-screen flex justify-center items-center">
          {/* Form */}
          <div className="max-w-[384px] w-[100%] p-[16px]">
            <LoginForm />
          </div>
        </div>
        <div className="w-full h-screen hidden lg:block">
          <div className="relative w-[100%] h-[100%]">
            <Image
              className="rounded-2xl object-cover"
              src="/white-building.jpg"
              alt="hero-image"
              priority
              fill={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
