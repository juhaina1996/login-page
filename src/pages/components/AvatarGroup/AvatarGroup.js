import React from "react";

const AvatarGroup = ({ avatars, extraCount }) => {
  return (
    <div className="avatars">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {avatars.map((avatar, index) => (
          <img
            key={index}
            className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={avatar.src}
            alt={avatar.alt}
          />
        ))}
        {extraCount && (
          <a
            className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#"
          >
            +{extraCount}
          </a>
        )}
      </div>
    </div>
  );
};

export default AvatarGroup;
