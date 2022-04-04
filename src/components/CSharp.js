import React from "react";
import ContentCard from "../UI/ContentCard";

export default function CSharp() {
  return (
    <div>
      <ContentCard
        moreInfo="For more information, see: "
        language="C#"
        externalLink="https://cloud.google.com/dotnet/docs/setup"
        installCommand="Install-Package Google.Apis"
      />
    </div>
  );
}
