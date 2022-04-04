import React from "react";
import ContentCard from "../UI/ContentCard";

export default function NodeJs() {
  return (
    <div>
      <ContentCard
        moreInfo="For more information, see: "
        language="Node.js"
        externalLink="https://cloud.google.com/nodejs/docs/setup"
        installCommand="npm install --save @google-cloud/speech"
      />
    </div>
  );
}
