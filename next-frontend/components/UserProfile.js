import Image from "next/image";
import { useState } from "react";

const UserProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState("/profile_image.jpg");
  const [coverPhoto, setCoverPhoto] = useState("/1500x500.png");

  return (
    <div className="flex flex-col ">
      <div className="relative w-full h-52 ">
        <Image
          src={coverPhoto}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-around">
        <div className="relative mt-[-36px] flex flex-col items-center">
          <Image
            src={profilePhoto}
            alt="Profile Photo"
            width={120}
            height={120}
            className="rounded-full border-4 border-white"
          />
          <h1 className="text-black">John Doe</h1>
        </div>

        <button className="bg-blue-500 text-white rounded w-20 h-8 mt-8">
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
