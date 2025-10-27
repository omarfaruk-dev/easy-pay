import React from "react";

const SectionHeader = ({ 
  label, 
  title, 
  align = "center", 
  className = "",
  labelClassName = "",
  titleClassName = ""
}) => {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left"
  };

  const containerClasses = `max-w-3xl mx-auto mb-6 md:mb-10 ${alignmentClasses[align]} ${className}`;

  return (
    <div className={`${containerClasses} space-y-1`}>
      {label && (
        <p className={`text-base font-semibold text-general tracking-wide ${labelClassName}`}>
          {label}
        </p>
      )}
      {title && (
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight ${titleClassName}`}>
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionHeader;
