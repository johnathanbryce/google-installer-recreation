import React from "react";
import ContentCard from "../UI/ContentCard";

export default function Python() {
  return (
    <div>
      {" "}
      <ContentCard
        moreInfo="For more information, see: "
        language="Python"
        externalLink="https://cloud.google.com/python/docs/setup"
        installCommand="pip install --upgrade google-cloud-speech"
      />
    </div>
  );
}
